import { Ayanamsa } from "../core/Ayanamsa";
import { ZodiacSign } from "../core/Planets";

export interface DashaPeriod {
    lord: string;
    start: Date;
    end: Date;
    durationYears: number;
}

const DASHA_SEQUENCE = [
    "Ketu",
    "Venus",
    "Sun",
    "Moon",
    "Mars",
    "Rahu",
    "Jupiter",
    "Saturn",
    "Mercury"
];

const DASHA_YEARS: Record<string, number> = {
    Ketu: 7,
    Venus: 20,
    Sun: 6,
    Moon: 10,
    Mars: 7,
    Rahu: 18,
    Jupiter: 16,
    Saturn: 19,
    Mercury: 17
};

export class Vimshottari {
    /**
     * Get the starting Dasha lord based on the Moon's sidereal longitude.
     * Each Nakshatra = 13°20' = 13.333°.
     */
    private getMoonDashaLord(moonLongitude: number): string {
        const nakshatraIndex = Math.floor(moonLongitude / (360 / 27));
        return DASHA_SEQUENCE[nakshatraIndex % 9];
    }

    /**
     * How much of the Moon's Nakshatra has passed.
     */
    private getNakshatraProgress(moonLongitude: number): number {
        const NAK_SPAN = 360 / 27;
        return (moonLongitude % NAK_SPAN) / NAK_SPAN;
    }

    /**
     * Compute Vimshottari Dasha timeline from birth date.
     */
    public calculate(moonLongitude: number, birthDate: Date): DashaPeriod[] {
        const results: DashaPeriod[] = [];

        // Determine starting Dasha lord
        let currentLord = this.getMoonDashaLord(moonLongitude);

        // How much Dasha is already elapsed?
        const progress = this.getNakshatraProgress(moonLongitude);

        const totalYears = DASHA_YEARS[currentLord];
        const elapsedYears = progress * totalYears;
        const remainingYears = totalYears - elapsedYears;

        // First Dasha (birth Dasha)
        let start = new Date(birthDate);
        let end = new Date(birthDate);
        end.setFullYear(end.getFullYear() + remainingYears);

        results.push({
            lord: currentLord,
            start,
            end,
            durationYears: remainingYears
        });

        // Index in sequence
        let index = DASHA_SEQUENCE.indexOf(currentLord);

        // Generate full 120-year sequence
        let currentStart = end;

        for (let i = 1; i < 30; i++) {
            index = (index + 1) % 9;
            const lord = DASHA_SEQUENCE[index];
            const years = DASHA_YEARS[lord];

            const dStart = new Date(currentStart);
            const dEnd = new Date(currentStart);
            dEnd.setFullYear(dEnd.getFullYear() + years);

            results.push({
                lord,
                start: dStart,
                end: dEnd,
                durationYears: years
            });

            currentStart = dEnd;
        }

        return results;
    }
}
