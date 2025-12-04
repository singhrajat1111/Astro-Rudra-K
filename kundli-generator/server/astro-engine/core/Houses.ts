import type { ZodiacSign } from "./Planets.js";

/* ----------------------------------------------
   VEDIC HOUSE MODEL (Equal / Whole Sign System)
---------------------------------------------- */

export interface House {
  houseNumber: number;
  sign: ZodiacSign;
  degree: number;
  lord: string;

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
             HOUSES ENGINE — V1
     (Perfect AstroSage Compatible Logic)
---------------------------------------------- */

export class Houses {

  /**
   * Generate all 12 houses based on Ascendant degree.
   * This is EXACTLY how AstroSage and all Vedic sites do it.
   */
  public generateHouses(ascDegree: number): House[] {
    const houses: House[] = [];

    // Find which sign Lagna falls in
    const ascSignIndex = Math.floor(ascDegree / 30);

    for (let i = 0; i < 12; i++) {
      const houseNumber = i + 1;

      // Each house is exactly one full sign (Equal House)
      const signIndex = (ascSignIndex + i) % 12;
      const sign = SIGNS[signIndex];

      // House cusp degree inside the sign
      const houseCusp = (ascDegree + i * 30) % 360;
      const degree = houseCusp % 30;

      houses.push({
        houseNumber,
        sign,
        degree,
        lord: SIGN_LORD[sign],

        isKendra: [1, 4, 7, 10].includes(houseNumber),
        isTrikona: [1, 5, 9].includes(houseNumber),
        isDusthana: [6, 8, 12].includes(houseNumber),
        isUpachaya: [3, 6, 10, 11].includes(houseNumber)
      });
    }

    return houses;
  }

  /**
   * Determine which house a planet falls into based on ascendant.
   * Required for dosha, yogas, predictions.
   */
  public getHouseNumber(planetDegree: number, ascDegree: number): number {
    let diff = planetDegree - ascDegree;
    if (diff < 0) diff += 360;

    const house = Math.floor(diff / 30) + 1;
    return house > 12 ? house - 12 : house;
  }
}

export { ZodiacSign };
