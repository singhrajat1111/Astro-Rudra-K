import * as Astronomy from "astronomy-engine";

/** ----------------------------------------------
 *  VEDIC PLANET ENUM
 *  Used throughout the KundliEngine
 * ---------------------------------------------- */
export type Planet =
  | "Sun"
  | "Moon"
  | "Mars"
  | "Mercury"
  | "Jupiter"
  | "Venus"
  | "Saturn"
  | "Rahu"
  | "Ketu";

/** ----------------------------------------------
 *  PLANET → ASTRONOMY-ENGINE BODY MAP
 *  Rahu/Ketu handled manually inside KundliEngine
 * ---------------------------------------------- */
export interface PlanetInfo {
  body: Astronomy.Body | null;  // Rahu/Ketu will be null
  key: Planet;
}

export const PLANETS: Record<Planet, PlanetInfo> = {
  Sun:     { key: "Sun",     body: Astronomy.Body.Sun },
  Moon:    { key: "Moon",    body: Astronomy.Body.Moon },
  Mars:    { key: "Mars",    body: Astronomy.Body.Mars },
  Mercury: { key: "Mercury", body: Astronomy.Body.Mercury },
  Jupiter: { key: "Jupiter", body: Astronomy.Body.Jupiter },
  Venus:   { key: "Venus",   body: Astronomy.Body.Venus },
  Saturn:  { key: "Saturn",  body: Astronomy.Body.Saturn },

  // Rahu & Ketu → No astronomy-engine body
  Rahu:    { key: "Rahu",    body: null },
  Ketu:    { key: "Ketu",    body: null }
};

/** ----------------------------------------------
 *  ZODIAC SIGN TYPE
 * ---------------------------------------------- */
export type ZodiacSign =
  | "Aries" | "Taurus" | "Gemini" | "Cancer" | "Leo" | "Virgo"
  | "Libra" | "Scorpio" | "Sagittarius" | "Capricorn" | "Aquarius" | "Pisces";

/** ----------------------------------------------
 *  PlanetPosition (returned by AstronomyWrapper)
 * ---------------------------------------------- */
export interface PlanetPosition {
  longitude: number;
  latitude?: number;
  distance?: number;
  isRetrograde: boolean;
}
