import * as Astronomy from "astronomy-engine";
import { AstronomyWrapper } from "../../astro-engine/astronomy/AstronomyWrapper";

// @ts-ignore
const Body = Astronomy.Body || Astronomy.default?.Body;
// @ts-ignore
const AstroTime = Astronomy.AstroTime || Astronomy.default?.AstroTime;

const PLANETS_MAP: Record<string, AstroBody> = {
    Sun: Body.Sun,
    Moon: Body.Moon,
    Mars: Body.Mars,
    Mercury: Body.Mercury,
    Jupiter: Body.Jupiter,
    Venus: Body.Venus,
    Saturn: Body.Saturn,
    Uranus: Body.Uranus,
    Neptune: Body.Neptune,
    Pluto: Body.Pluto
};

export const calculatePlanets = (jd: number) => {
    const positions: any = {};
    const date = new AstroTime(jd).date;
    const astronomy = AstronomyWrapper.getInstance();

    for (const [name, body] of Object.entries(PLANETS_MAP)) {
        const pos = astronomy.getPlanetPosition(date, body);
        positions[name] = {
            id: name,
            name: name,
            longitude: pos.longitude,
            latitude: pos.latitude,
            distance: pos.distance,
            speed: pos.speed,
            isRetrograde: pos.isRetrograde
        };
    }

    // Rahu/Ketu placeholder
    // TODO: Implement Rahu/Ketu calculation using astronomy-engine or other method
    // For now, returning 0/180 to prevent crash, as astronomy-engine doesn't support Nodes directly in Body enum
    positions['Rahu'] = {
        id: 'Rahu',
        name: 'Rahu',
        longitude: 0,
        latitude: 0,
        distance: 0,
        speed: 0,
        isRetrograde: true
    };
    positions['Ketu'] = {
        id: 'Ketu',
        name: 'Ketu',
        longitude: 180,
        latitude: 0,
        distance: 0,
        speed: 0,
        isRetrograde: true
    };

    return positions;
};
