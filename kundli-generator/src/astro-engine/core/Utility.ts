export class Utility {

    /** Normalize any angle to 0–360° */
    static normalizeDegree(deg: number): number {
        return ((deg % 360) + 360) % 360;
    }

    /** Normalize to -180 → +180 */
    static normalize180(deg: number): number {
        let r = this.normalizeDegree(deg);
        if (r > 180) r -= 360;
        return r;
    }

    /** Degrees → Radians */
    static degToRad(deg: number): number {
        return (deg * Math.PI) / 180;
    }

    /** Radians → Degrees */
    static radToDeg(rad: number): number {
        return (rad * 180) / Math.PI;
    }

    /** Extract zodiac index (0–11) from longitude */
    static zodiacIndex(longitude: number): number {
        const norm = this.normalizeDegree(longitude);
        return Math.floor(norm / 30);
    }

    /** Get zodiac sign name from longitude */
    static zodiacName(longitude: number): string {
        const ZODIAC = [
            "Aries", "Taurus", "Gemini", "Cancer",
            "Leo", "Virgo", "Libra", "Scorpio",
            "Sagittarius", "Capricorn", "Aquarius", "Pisces",
        ];

        return ZODIAC[this.zodiacIndex(longitude)];
    }

    /** Lahiri Ayanamsa (approx but accurate to ~1 arc-minute) */
    static ayanamsa(date: Date): number {
        const year =
            date.getUTCFullYear() +
            (date.getUTCMonth() + 1) / 12 +
            date.getUTCDate() / 365;

        // Lahiri Ayanamsa formula
        return (year - 285) * 50.29 / 3600; // degrees
    }

    /** Apply sidereal correction to longitude */
    static toSidereal(longitude: number, date: Date): number {
        const ay = this.ayanamsa(date);
        return this.normalizeDegree(longitude - ay);
    }

    /** Round number safely */
    static round(value: number, decimals = 2): number {
        return Number(value.toFixed(decimals));
    }

    /** Hours → Decimal degrees (15° per hour) */
    static hoursToDegrees(hours: number): number {
        return hours * 15;
    }

    /** Clamp value */
    static clamp(value: number, min: number, max: number): number {
        return Math.min(max, Math.max(min, value));
    }

    /** Format as H:M:S */
    static toHMS(hours: number): string {
        const h = Math.floor(hours);
        const m = Math.floor((hours - h) * 60);
        const s = Math.floor(((hours - h) * 60 - m) * 60);

        return `${h}h ${m}m ${s}s`;
    }

    /** Difference between two degrees 0–360 safe */
    static degreeDifference(a: number, b: number): number {
        let diff = this.normalizeDegree(a - b);
        if (diff > 180) diff -= 360;
        return Math.abs(diff);
    }

    /** Nakshatra index from longitude (0–26) */
    static nakshatraIndex(longitude: number): number {
        const norm = this.normalizeDegree(longitude);
        return Math.floor(norm / (360 / 27));
    }

    /** Pada (1–4) from longitude */
    static nakshatraPada(longitude: number): number {
        const norm = this.normalizeDegree(longitude);
        const nak = norm % (360 / 27);
        return Math.floor(nak / (360 / 108)) + 1;
    }
}
