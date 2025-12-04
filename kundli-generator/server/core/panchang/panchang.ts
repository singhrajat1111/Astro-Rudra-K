import { AstronomyWrapper } from "../../astro-engine/astronomy/AstronomyWrapper";

export interface PanchangData {
  tithi: string;
  paksha: "Shukla" | "Krishna";
  nakshatra: string;
  nakshatraPada: number;
  yoga: string;
  karana: string;
  weekday: string;
  sunrise: Date | null;
  sunset: Date | null;
  moonPhase: string;
}

export class Panchang {
  private astronomy = AstronomyWrapper.getInstance();

  private TITHIS = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi",
    "Purnima / Amavasya"
  ] as const;

  private NAKSHATRAS = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra",
    "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula",
    "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ] as const;

  private YOGAS = [
    "Vishkumbha", "Preeti", "Ayushman", "Saubhagya", "Shobhana",
    "Atiganda", "Sukarma", "Dhriti", "Shoola", "Ganda",
    "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
    "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
    "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
    "Indra", "Vaidhriti"
  ] as const;

  private KARANAS = [
    "Bava", "Balava", "Kaulava", "Taitila", "Garaja",
    "Vanija", "Vishti", "Shakuni", "Chatushpada", "Naga"
  ] as const;

  private getLongitudes(date: Date) {
    const sun = this.astronomy.getPlanetPosition(date, "Sun").longitude;
    const moon = this.astronomy.getPlanetPosition(date, "Moon").longitude;
    return { sun, moon };
  }

  private getTithiData(date: Date) {
    const { sun, moon } = this.getLongitudes(date);
    const diff = (moon - sun + 360) % 360;

    const tithiNum = Math.floor(diff / 12) + 1;

    const paksha: "Shukla" | "Krishna" = tithiNum <= 15 ? "Shukla" : "Krishna";

    const index = (tithiNum - 1) % 15;

    return {
      name: this.TITHIS[index],
      paksha
    };
  }

  private getNakshatraData(date: Date) {
    const { moon } = this.getLongitudes(date);

    const NAK_LEN = 360 / 27;        // 13°20'
    const PADA_LEN = NAK_LEN / 4;    // 3°20'

    const nakIndex = Math.floor(moon / NAK_LEN);
    const nakshatra = this.NAKSHATRAS[nakIndex];

    const degreesIntoNak = moon % NAK_LEN;
    const pada = Math.floor(degreesIntoNak / PADA_LEN) + 1;

    return { nakshatra, pada };
  }

  private getYogaData(date: Date) {
    const { sun, moon } = this.getLongitudes(date);
    const sum = (sun + moon) % 360;
    return this.YOGAS[Math.floor(sum / (360 / 27))];
  }

  private getKaranaData(date: Date) {
    const { sun, moon } = this.getLongitudes(date);
    const diff = (moon - sun + 360) % 360;
    return this.KARANAS[Math.floor(diff / 6) % this.KARANAS.length];
  }

  private getSunMoonEvents(date: Date, lat: number, lon: number) {
    const rs = this.astronomy.getRiseSet(date, lat, lon);
    return {
      sunrise: rs.rise || null,
      sunset: rs.set || null
    };
  }

  public calculate(date: Date, lat: number, lon: number): PanchangData {
    const tithiInfo = this.getTithiData(date);
    const nak = this.getNakshatraData(date);
    const yoga = this.getYogaData(date);
    const karana = this.getKaranaData(date);
    const events = this.getSunMoonEvents(date, lat, lon);

    const weekday = [
      "Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
    ][date.getDay()];

    const { sun, moon } = this.getLongitudes(date);
    const moonPhase =
      (moon - sun + 360) % 360 < 180
        ? "Waxing (Shukla)"
        : "Waning (Krishna)";

    return {
      tithi: tithiInfo.name,
      paksha: tithiInfo.paksha,
      nakshatra: nak.nakshatra,
      nakshatraPada: nak.pada,
      yoga,
      karana,
      weekday,
      sunrise: events.sunrise,
      sunset: events.sunset,
      moonPhase
    };
  }
}
