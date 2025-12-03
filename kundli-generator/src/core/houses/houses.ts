import { AstroTime } from "astronomy-engine";
import { Houses } from "../../astro-engine/core/Houses";

export const calculateHouses = (jd: number, lat: number, lon: number, hsys: string = 'P') => {
    const date = new AstroTime(jd).date;
    const housesEngine = new Houses();
    const result = housesEngine.calculate(date, lat, lon);

    const cusps = Array.from({ length: 12 }, (_, i) => (result.ascendant + i * 30) % 360);

    return {
        cusps: cusps,
        ascendant: result.ascendant,
        mc: 0,
        armc: 0,
        vertex: 0,
    };
};
