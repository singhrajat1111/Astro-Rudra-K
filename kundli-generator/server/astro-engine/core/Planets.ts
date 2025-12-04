import Astronomy from "astronomy-engine";
const { Body } = Astronomy;

export type ElementType = "fire" | "earth" | "air" | "water";

export interface PlanetInfo {
    key: Planet;
    name: string;
    body: any;
    ruler: ZodiacSign;
    exaltation: number;
    debilitation: number;
    nature: "benefic" | "malefic" | "neutral";
    element: ElementType;
    icon: string;
}

export interface PlanetPosition {
    longitude: number;
    latitude: number;
    distance: number;
    speed: number;
    isRetrograde: boolean;
}

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

export type ZodiacSign =
    | "Aries"
    | "Taurus"
    | "Gemini"
    | "Cancer"
    | "Leo"
    | "Virgo"
    | "Libra"
    | "Scorpio"
    | "Sagittarius"
    | "Capricorn"
    | "Aquarius"
    | "Pisces";


export const PLANETS: Record<Planet, PlanetInfo> = {
    Sun: {
        key: "Sun",
        name: "Surya",
        body: Body.Sun,
        ruler: "Leo",
        exaltation: 10 * 30 + 10,
        debilitation: 7 * 30 + 10,
        nature: "malefic",
        element: "fire",
        icon: "☉"
    },

    Moon: {
        key: "Moon",
        name: "Chandra",
        body: Body.Moon,
        ruler: "Cancer",
        exaltation: 1 * 30 + 3,
        debilitation: 7 * 30 + 3,
        nature: "benefic",
        element: "water",
        icon: "☾"
    },

    Mars: {
        key: "Mars",
        name: "Mangal",
        body: Body.Mars,
        ruler: "Aries",
        exaltation: 9 * 30 + 28,
        debilitation: 3 * 30 + 28,
        nature: "malefic",
        element: "fire",
        icon: "♂"
    },

    Mercury: {
        key: "Mercury",
        name: "Budh",
        body: Body.Mercury,
        ruler: "Gemini",
        exaltation: 5 * 30 + 15,
        debilitation: 11 * 30 + 15,
        nature: "neutral",
        element: "earth",
        icon: "☿"
    },

    Jupiter: {
        key: "Jupiter",
        name: "Guru",
        body: Body.Jupiter,
        ruler: "Sagittarius",
        exaltation: 3 * 30 + 5,
        debilitation: 9 * 30 + 5,
        nature: "benefic",
        element: "air",
        icon: "♃"
    },

    Venus: {
        key: "Venus",
        name: "Shukra",
        body: Body.Venus,
        ruler: "Libra",
        exaltation: 11 * 30 + 27,
        debilitation: 5 * 30 + 27,
        nature: "benefic",
        element: "water",
        icon: "♀"
    },

    Saturn: {
        key: "Saturn",
        name: "Shani",
        body: Body.Saturn,
        ruler: "Capricorn",
        exaltation: 6 * 30 + 20,
        debilitation: 0 * 30 + 20,
        nature: "malefic",
        element: "air",
        icon: "♄"
    },

    Rahu: {
        key: "Rahu",
        name: "Rahu (North Node)",
        body: Body.Sun,
        ruler: "Aquarius",
        exaltation: 1 * 30 + 20,
        debilitation: 7 * 30 + 20,
        nature: "malefic",
        element: "air",
        icon: "☊"
    },

    Ketu: {
        key: "Ketu",
        name: "Ketu (South Node)",
        body: Body.Sun,
        ruler: "Scorpio",
        exaltation: 7 * 30 + 20,
        debilitation: 1 * 30 + 20,
        nature: "malefic",
        element: "fire",
        icon: "☋"
    }
};
