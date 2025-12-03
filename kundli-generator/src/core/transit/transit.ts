import type { PlanetCalculated } from "../KundliEngine";
import { AstronomyWrapper } from "../astronomy/AstronomyWrapper";
import { PLANETS, Planet } from "../core/Planets";

export interface TransitEntry {
    planet: Planet;
    transitLongitude: number;
    natalLongitude: number;
}

export interface TransitResult {
    transitPlanets: Record<Planet, PlanetCalculated>;
    transits: TransitEntry[];
}

/**
 * Calculate planetary transits relative to natal positions.
 * 
 * @param birthPlanets - natal (birth chart) planets
 * @param date - current date for transit
 */
export const calculateTransit = (
    birthPlanets: Record<Planet, PlanetCalculated>,
    date: Date
): TransitResult => {

    const astronomy = AstronomyWrapper.getInstance();

    // Calculate transit positions using same engine as Kundli
    const transitPlanets = {} as Record<Planet, PlanetCalculated>;

    for (const planet of Object.keys(PLANETS) as Planet[]) {
        const pInfo = PLANETS[planet];

        // Rahu/Ketu handled manually by your engine
        if (planet === "Rahu" || planet === "Ketu") {
            const sun = astronomy.getPlanetPosition(date, "Sun");
            const rahuLong = (sun.longitude + 180) % 360;
            const ketuLong = sun.longitude;

            transitPlanets.Rahu = {
                longitude: rahuLong,
                latitude: 0,
                distance: 0,
                speed: 0,
                isRetrograde: true
            };

            transitPlanets.Ketu = {
                longitude: ketuLong,
                latitude: 0,
                distance: 0,
                speed: 0,
                isRetrograde: true
            };

            continue;
        }

        const pos = astronomy.getPlanetPosition(date, pInfo.body);
        transitPlanets[planet] = pos;
    }

    // Now compare natal vs transit
    const transits: TransitEntry[] = [];

    for (const planet of Object.keys(PLANETS) as Planet[]) {
        const natal = birthPlanets[planet];
        const current = transitPlanets[planet];
        if (!natal || !current) continue;

        transits.push({
            planet,
            transitLongitude: current.longitude,
            natalLongitude: natal.longitude,
        });
    }

    return { transitPlanets, transits };
};
