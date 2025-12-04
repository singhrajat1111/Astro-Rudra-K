import { AstronomyWrapper } from "../astronomy/AstronomyWrapper";
import { getNakshatra } from "../core/Nakshatra";
import { PLANETS } from "../core/Planets";

export interface PanchangData {
    tithi: string;
    tithiNumber: number;
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

    /** Weekdays in Vedic system */
    private WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    /** 30 Tithis */
    private TITHIS = [
        "Pratipada",
        "Dwitiya",
        "Tritiya",
        "Chaturthi",
        "Panchami",
        "Shashthi",
        "Saptami",
        "Ashtami",
        "Navami",
        "Dashami",
        "Ekadashi",
        "Dwadashi",
        "Trayodashi",
        "Chaturdashi",
        "Purnima / Amavasya"
    ];

    /** 27 Yogas */
    private YOGAS = [
        "Vishkumbha", "Preeti", "Ayushman", "Saubhagya", "Shobhana",
        "Atiganda", "Sukarma", "Dhriti", "Shoola", "Ganda",
        "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
        "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
        "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
        "Indra", "Vaidhriti"
    ];

    /** 11 Karanas repeating cycle */
    private KARANAS = [
        "Bava", "Balava", "Kaulava", "Taitila", "Garaja",
        "Vanija", "Vishti", "Shakuni", "Chatushpada", "Naga",
    ];

    /**
     * MAIN FUNCTION
     * Generates full Panchang dataset
     */
    public calculate(date: Date, lat: number, lon: number): PanchangData {
        // Solar and lunar sidereal longitudes
        const sun = this.astronomy.getPlanetPosition(date, PLANETS.Sun.body);
        const moon = this.astronomy.getPlanetPosition(date, PLANETS.Moon.body);

        // 1. TITHI
        const moonSunDiff = (moon.longitude - sun.longitude + 360) % 360;
        const tithiNum = Math.floor(moonSunDiff / 12) + 1;

        const paksha = tithiNum <= 15 ? "Shukla" : "Krishna";

        const tithiIndex = ((tithiNum - 1) % 15);
        const tithi = this.TITHIS[tithiIndex];

        // 2. NAKSHATRA + PADA
        const nak = getNakshatra(moon.longitude);

        // 3. YOGA
        const totalLong = (sun.longitude + moon.longitude) % 360;
        const yogaIndex = Math.floor(totalLong / (360 / 27));
        const yoga = this.YOGAS[yogaIndex];

        // 4. KARANA (half-tithis)
        const karanaIndex = Math.floor((moonSunDiff % 360) / 6);
        const karana = this.KARANAS[karanaIndex % this.KARANAS.length];

        // 5. Weekday (Vara)
        const weekday = this.WEEKDAYS[date.getDay()];

        // 6. Sunrise / Sunset
        const riseSet = this.astronomy.getRiseSet(date, lat, lon);

        // 7. Moon Phase
        const phase =
            moonSunDiff < 180 ? "Waxing (Shukla)" : "Waning (Krishna)";

        return {
            tithi,
            tithiNumber: tithiNum,
            paksha,
            nakshatra: nak.nakshatra.name,
            nakshatraPada: nak.pada,
            yoga,
            karana,
            weekday,
            sunrise: riseSet.rise,
            sunset: riseSet.set,
            moonPhase: phase
        };
    }
}
