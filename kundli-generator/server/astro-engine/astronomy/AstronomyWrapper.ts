import Astronomy from "astronomy-engine";

export class AstronomyWrapper {
    private static instance: AstronomyWrapper;

    private constructor() { }

    public static getInstance(): AstronomyWrapper {
        if (!AstronomyWrapper.instance) {
            AstronomyWrapper.instance = new AstronomyWrapper();
        }
        return AstronomyWrapper.instance;
    }

    /** Convert JS date → Julian UT */
    public getJulianDay(date: Date): number {
        return Astronomy.MakeTime(date).ut;
    }

    /** Lahiri Ayanamsa — Simple V1 Approx */
    private getLahiriAyanamsa(date: Date): number {
        const y =
            date.getUTCFullYear() +
            date.getUTCMonth() / 12 +
            date.getUTCDate() / 365;

        return ((y - 285) * 50.29) / 3600; // degrees
    }

    /** Sidereal Planet Position (Lahiri) */
    public getPlanetPosition(date: Date, bodyName: any) {
        const time = Astronomy.MakeTime(date);

        // Geocentric vector
        const geo = Astronomy.GeoVector(bodyName, time, true);
        const ecl = Astronomy.Ecliptic(geo);

        // Apply ayanamsa
        const ay = this.getLahiriAyanamsa(date);
        let sidereal = ecl.elon - ay;
        if (sidereal < 0) sidereal += 360;

        // Retrograde check (1 hour forward)
        const next = Astronomy.MakeTime(new Date(date.getTime() + 3600000));
        const geoNext = Astronomy.GeoVector(bodyName, next, true);
        const eclNext = Astronomy.Ecliptic(geoNext);

        let speed = eclNext.elon - ecl.elon;
        if (speed > 180) speed -= 360;
        if (speed < -180) speed += 360;

        return {
            longitude: sidereal,
            latitude: ecl.elat,
            distance: geo.Length(),
            speed,
            isRetrograde: speed < 0
        };
    }

    /** Ascendant / Lagna (Sidereal) */
    public getAscendant(date: Date, lat: number, lon: number): number {
        const time = Astronomy.MakeTime(date);
        const gst = Astronomy.SiderealTime(time);
        const lst = (gst + lon / 15 + 24) % 24;

        const eps = (23.4392911 * Math.PI) / 180;
        const ramc = (lst * 15 * Math.PI) / 180;
        const φ = (lat * Math.PI) / 180;

        const num = Math.cos(ramc);
        const den =
            -Math.sin(ramc) * Math.cos(eps) -
            Math.tan(φ) * Math.sin(eps);

        let asc = (Math.atan2(num, den) * 180) / Math.PI;
        if (asc < 0) asc += 360;

        // Ayanamsa
        const ay = this.getLahiriAyanamsa(date);
        asc -= ay;
        if (asc < 0) asc += 360;

        return asc % 360;
    }

    /** Sunrise / Sunset */
    public getRiseSet(date: Date, lat: number, lon: number) {
        const obs = new Astronomy.Observer(lat, lon, 0);

        const rise = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, +1, date, 1);
        const set = Astronomy.SearchRiseSet(Astronomy.Body.Sun, obs, -1, date, 1);

        return {
            rise: rise?.date || null,
            set: set?.date || null
        };
    }
}
