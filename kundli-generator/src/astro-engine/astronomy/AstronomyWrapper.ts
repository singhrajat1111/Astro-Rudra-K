 import * as Astronomy from "astronomy-engine";

const MakeTime = Astronomy.MakeTime;
const GeoVector = Astronomy.GeoVector;
const Ecliptic = Astronomy.Ecliptic;
const SiderealTime = Astronomy.SiderealTime;
const Body = Astronomy.Body;
const Observer = Astronomy.Observer;
const SearchRiseSet = Astronomy.SearchRiseSet;

/**
 * Wrapper around astronomy-engine to support
 * Vedic astrology computations using sidereal (Lahiri) zodiac.
 */
export class AstronomyWrapper {
    private static instance: AstronomyWrapper;

    private constructor() { }

    public static getInstance(): AstronomyWrapper {
        if (!AstronomyWrapper.instance) {
            AstronomyWrapper.instance = new AstronomyWrapper();
        }
        return AstronomyWrapper.instance;
    }

    /** Convert JS Date → Julian Day */
    public getJulianDay(date: Date): number {
        return MakeTime(date).ut;
    }

    /**
     * Approx Lahiri Ayanamsa calculation.
     * Later modules (Ayanamsa.ts) will refine this.
     */
    private getLahiriAyanamsa(date: Date): number {
        const year =
            date.getUTCFullYear() +
            date.getUTCMonth() / 12 +
            date.getUTCDate() / 365;

        // Lahiri approx formula
        return (year - 285) * 50.29 / 3600; // in degrees
    }

    /**
     * Get sidereal (Lahiri) planetary positions.
     */
    public getPlanetPosition(
        date: Date,
        bodyName: any
    ) {
        const body = bodyName;
        const time = MakeTime(date);

        // 1. Geocentric vector (true position)
        const geo = GeoVector(body, time, true);

        // 2. Convert to ecliptic coordinates
        const ecl = Ecliptic(geo);

        // 3. Apply Lahiri Ayanamsa
        let ayanamsa = this.getLahiriAyanamsa(date);
        let siderealLong = ecl.elon - ayanamsa;
        if (siderealLong < 0) siderealLong += 360;

        // 4. Retrograde check (compare 1 hr later)
        const next = MakeTime(new Date(date.getTime() + 3600000));
        const geoNext = GeoVector(body, next, true);
        const eclNext = Ecliptic(geoNext);

        let speed = eclNext.elon - ecl.elon;
        if (speed > 180) speed -= 360;
        if (speed < -180) speed += 360;

        const isRetro = speed < 0;

        return {
            longitude: siderealLong,
            latitude: ecl.elat,
            distance: geo.Length(),
            speed,
            isRetrograde: isRetro
        };
    }

    /**
     * Calculate Ascendant (Lagna)
     */
    public getAscendant(date: Date, lat: number, lon: number): number {
        const time = MakeTime(date);
        const gst = SiderealTime(time); // GMST (hours)
        const lst = (gst + lon / 15) % 24; // Local ST

        const eps = 23.4392911 * (Math.PI / 180); // obliquity rad
        const latRad = lat * (Math.PI / 180);
        const ramc = lst * 15 * (Math.PI / 180);

        const num = Math.cos(ramc);
        const den =
            -Math.sin(ramc) * Math.cos(eps) -
            Math.tan(latRad) * Math.sin(eps);

        let asc = Math.atan2(num, den) * (180 / Math.PI);
        if (asc < 0) asc += 360;

        // Apply Ayanamsa (sidereal ascendant)
        const ay = this.getLahiriAyanamsa(date);
        asc -= ay;
        if (asc < 0) asc += 360;

        return asc % 360;
    }

    /**
     * Sunrise / Sunset
     */
    public getRiseSet(date: Date, lat: number, lon: number) {
        const obs = new Observer(lat, lon, 0);

        const rise = SearchRiseSet(Body.Sun, obs, +1, date, 1);
        const set = SearchRiseSet(Body.Sun, obs, -1, date, 1);

        return {
            rise: rise?.date || null,
            set: set?.date || null
        };
    }
}
