import type { ZodiacSign } from "./Planets.js";
import { AstronomyWrapper } from "../astronomy/AstronomyWrapper.js";

/* ----------------------------------------------
   INTERFACES
---------------------------------------------- */

export interface House {
    houseNumber: number;          // 1–12
    sign: ZodiacSign;             // Aries–Pisces
    degree: number;               // 0–29.999°
    lord: string;                 // Planet name
    isKendra: boolean;
    isTrikona: boolean;
    isDusthana: boolean;
    isUpachaya: boolean;
}

/* ----------------------------------------------
   CONSTANTS
---------------------------------------------- */

export const SIGNS: ZodiacSign[] = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const SIGN_LORD: Record<ZodiacSign, string> = {
    Aries: "Mars",
    Taurus: "Venus",
    Gemini: "Mercury",
    Cancer: "Moon",
    Leo: "Sun",
    Virgo: "Mercury",
    Libra: "Venus",
    Scorpio: "Mars",
    Sagittarius: "Jupiter",
    Capricorn: "Saturn",
    Aquarius: "Saturn",
    Pisces: "Jupiter"
};

/* ----------------------------------------------
   HOUSE SYSTEM ENGINE
---------------------------------------------- */

export class Houses {

    /**
     * MAIN FUNCTION:
     * Converts (date, lat, lon) → ascendant → all 12 houses
     * Fully compatible with KundliEngine.generate()
     */
    public calculate(date: Date, lat: number, lon: number) {
        const astronomy = AstronomyWrapper.getInstance();

        // 1. Calculate Ascendant (Sidereal)
        const ascDegree = astronomy.getAscendant(date, lat, lon);

        // 2. Generate all 12 houses
        const houses = this.generateHouses(ascDegree);

        return {
            ascendant: ascDegree,
            ascendantSign: Math.floor(ascDegree / 30),
            houses
        };
    }

    /**
     * Generate full house data from ascendant degree (0–360).
     * Uses Equal House system (classic Vedic).
     */
    public generateHouses(ascDegree: number): House[] {
        const houses: House[] = [];

        const ascSignIndex = Math.floor(ascDegree / 30);

        // Generate all 12 houses
        for (let i = 0; i < 12; i++) {
            const houseNumber = i + 1;

            // Compute sign index (0–11)
            const signIndex = (ascSignIndex + i) % 12;
            const sign = SIGNS[signIndex];

            // House cusp in absolute degrees
            const houseCusp = (ascDegree + i * 30) % 360;

            const degree = houseCusp % 30;
            const lord = SIGN_LORD[sign];

            houses.push({
                houseNumber,
                sign,
                degree,
                lord,

                isKendra: [1, 4, 7, 10].includes(houseNumber),
                isTrikona: [1, 5, 9].includes(houseNumber),
                isDusthana: [6, 8, 12].includes(houseNumber),
                isUpachaya: [3, 6, 10, 11].includes(houseNumber)
            });
        }

        return houses;
    }

    /**
     * Determine which house a planet falls into.
     */
    public getHouseNumber(planetDegree: number, ascDegree: number): number {
        let diff = planetDegree - ascDegree;
        if (diff < 0) diff += 360;
        return Math.floor(diff / 30) + 1;
    }
}

export { ZodiacSign };
