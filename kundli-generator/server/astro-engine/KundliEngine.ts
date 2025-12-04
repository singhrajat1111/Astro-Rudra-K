import { AstronomyWrapper } from "./astronomy/AstronomyWrapper.js";
import { PLANETS, Planet, PlanetInfo } from "./core/Planets.js";
import { Houses } from "./core/Houses.js";
import { getNakshatra } from "./core/Nakshatra.js";
import { Panchang } from "./panchang/Panchang.js";
import { Vimshottari } from "./dasha/Vimshottari.js";
import { Divisional } from "./charts/Divisional.js";
import { Dosha } from "./dosha/Dosha.js";
import { Matching, MatchingResult } from "./matching/Matching.js";


export interface KundliRequest {
  date: Date;           // MUST BE UTC
  lat: number;
  lon: number;
  timezone: number;     // NEW — required for correct panchang & ascendant
  dst: number;          // NEW — daylight saving offset
  place?: string;       // NEW — optional label for charts / UI
  girlMoonLongitude?: number;
}

export interface PlanetCalculated {
    longitude: number;
    latitude?: number;
    distance?: number;
    isRetrograde: boolean;
    sign: string;
}

export interface KundliResponse {
    ascendant: { sign: string; degree: number };
    planets: Record<Planet, PlanetCalculated>;
    houses: any;
    nakshatras: Record<Planet, any>;
    panchang: any;
    dasha: any;
    charts: any;
    dosha: any;
    matching?: MatchingResult;
    generatedAt: string;
}

/* ----------------------------------------------
   PLANET CALCULATOR WRAPPER
---------------------------------------------- */

class PlanetsCalculator {
    private astronomy = AstronomyWrapper.getInstance();

    /** Returns all planet positions including Rahu/Ketu */
    public calculateAll(date: Date): Record<Planet, PlanetCalculated> {
        const result = {} as Record<Planet, PlanetCalculated>;

        for (const planet of Object.keys(PLANETS) as Planet[]) {
            const meta: PlanetInfo = PLANETS[planet];

            // --- Rahu & Ketu manually computed ---
            if (planet === "Rahu" || planet === "Ketu") {
                const nodes = this.getLunarNodes(date);
                result.Rahu = nodes.rahu;
                result.Ketu = nodes.ketu;
                continue;
            }

            // Normal planets (astronomy-engine)
            const data = this.astronomy.getPlanetPosition(date, meta.body);

            result[planet] = {
                longitude: data.longitude,
                latitude: data.latitude || 0,
                distance: data.distance || 0,
                isRetrograde: data.isRetrograde,
                sign: this.getSignFromLongitude(data.longitude)
            };
        }

        return result;
    }

    /** Calculate Rahu/Ketu from Sun */
    private getLunarNodes(date: Date) {
        const sun = this.astronomy.getPlanetPosition(date, PLANETS.Sun.body);

        const rahuLongitude = (sun.longitude + 180) % 360;
        const ketuLongitude = sun.longitude;

        return {
            rahu: {
                longitude: rahuLongitude,
                isRetrograde: true,
                sign: this.getSignFromLongitude(rahuLongitude)
            },
            ketu: {
                longitude: ketuLongitude,
                isRetrograde: true,
                sign: this.getSignFromLongitude(ketuLongitude)
            }
        };
    }

    private getSignFromLongitude(long: number): string {
        const SIGNS = [
            "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
            "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
        ];
        return SIGNS[Math.floor(long / 30)];
    }
}

/* ----------------------------------------------
   MAIN KUNDLI ENGINE
---------------------------------------------- */

export class KundliEngine {
    getMatching(arg0: number, arg1: number) {
        throw new Error("Method not implemented.");
    }
    private astronomy = AstronomyWrapper.getInstance();
    private planets = new PlanetsCalculator();
    private houses = new Houses();
    private panchang = new Panchang();
    private dashaEngine = new Vimshottari();
    private divisional = new Divisional();
    private doshaEngine = new Dosha();
    private matchingEngine = new Matching();

    /** Master method: produces full Kundli JSON */
    public generate(req: KundliRequest): KundliResponse {
        const { date, lat, lon, timezone, dst, place } = req;

        /* -----------------------------
           1 — Ascendant
        ------------------------------ */
        const ascDegree = this.astronomy.getAscendant(date, lat, lon);
        const ascSign = this.getSignFromLongitude(ascDegree);

        /* -----------------------------
           2 — Planets
        ------------------------------ */
        const planets = this.planets.calculateAll(date);

        /* -----------------------------
           3 — Houses (Bhav Madhya)
        ------------------------------ */
        const houses = this.houses.generateHouses(ascDegree);

        /* -----------------------------
           4 — Nakshatras
        ------------------------------ */
        const nakshatras = {} as Record<Planet, any>;
        for (const p of Object.keys(planets) as Planet[]) {
            nakshatras[p] = getNakshatra(planets[p].longitude);
        }

        /* -----------------------------
           5 — Panchang
        ------------------------------ */
        const panchang = this.panchang.calculate(date, lat, lon);

        /* -----------------------------
           6 — Vimshottari Dasha
        ------------------------------ */
        const dasha = this.dashaEngine.calculate(planets.Moon.longitude, date);

        /* -----------------------------
           7 — Divisional Charts (Navamsa etc.)
        ------------------------------ */
        const charts = this.divisional.calculate(planets);

        /* -----------------------------
           8 — Dosha (Mangal, Kaal Sarp etc.)
        ------------------------------ */
        const dosha = this.doshaEngine.calculate(planets, ascDegree);

        /* -----------------------------
           9 — Matching (Optional)
        ------------------------------ */
        let matching: MatchingResult | undefined = undefined;
        if (req.girlMoonLongitude !== undefined) {
            matching = this.matchingEngine.calculate(
                planets.Moon.longitude,
                req.girlMoonLongitude
            );
        }

        /* -----------------------------
           Final Response
        ------------------------------ */
        return {
            ascendant: {
                sign: ascSign,
                degree: ascDegree % 30
            },
            planets,
            houses,
            nakshatras,
            panchang,
            dasha,
            charts,
            dosha,
            matching,
            generatedAt: new Date().toISOString()
        };
    }

    private getSignFromLongitude(long: number): string {
        const SIGNS = [
            "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
            "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
        ];
        return SIGNS[Math.floor(long / 30)];
    }
}
