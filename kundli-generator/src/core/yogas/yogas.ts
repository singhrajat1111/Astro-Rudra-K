import type { PlanetCalculated } from "../../astro-engine/KundliEngine";

export interface YogaResult {
    name: string;
    type: string;
    description: string;
    strength: string;
}

export const getSignLord = (signIndex: number): string => {
    const lords = [
        "Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury",
        "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"
    ];
    return lords[signIndex];
};

export const getSign = (longitude: number): number => {
    return Math.floor(longitude / 30);
};

/**
 * planets: Record<Planet, PlanetCalculated>
 * ascDegree: number (actual ascendant degree)
 */
export const calculateYogas = (
    planets: Record<string, PlanetCalculated>,
    ascDegree: number
): YogaResult[] => {

    const yogas: YogaResult[] = [];
    if (!planets) return yogas;

    const ascSign = getSign(ascDegree);

    // ---- Get planets by sign ----
    const planetsBySign: Record<number, string[]> = {};
    for (const [name, p] of Object.entries(planets)) {
        const sign = getSign(p.longitude);
        if (!planetsBySign[sign]) planetsBySign[sign] = [];
        planetsBySign[sign].push(name);
    }

    // ---- 1. Gaja Kesari Yoga ----
    if (planets.Jupiter && planets.Moon) {
        const j = getSign(planets.Jupiter.longitude);
        const m = getSign(planets.Moon.longitude);
        const diff = Math.abs(j - m);
        if ([0, 3, 6, 9].includes(diff)) {
            yogas.push({
                name: "Gaja Kesari Yoga",
                type: "Raj Yoga",
                description: "Jupiter and Moon in mutual kendras.",
                strength: "Strong"
            });
        }
    }

    // ---- 2. Chandra Mangala Yoga ----
    if (planets.Moon && planets.Mars) {
        const m = getSign(planets.Moon.longitude);
        const ma = getSign(planets.Mars.longitude);
        if (m === ma) {
            yogas.push({
                name: "Chandra Mangala Yoga",
                type: "Dhana Yoga",
                description: "Moon and Mars conjunction.",
                strength: "Medium"
            });
        }
    }

    // ---- 3. Budha Aditya Yoga ----
    if (planets.Sun && planets.Mercury) {
        const s = getSign(planets.Sun.longitude);
        const me = getSign(planets.Mercury.longitude);
        if (s === me) {
            yogas.push({
                name: "Budha Aditya Yoga",
                type: "Raj Yoga",
                description: "Sun and Mercury together.",
                strength: "Medium"
            });
        }
    }

    // ---- 4. Hamsa Yoga ----
    if (planets.Jupiter) {
        const j = getSign(planets.Jupiter.longitude);
        const diff = (j - ascSign + 12) % 12;
        if ([0, 3, 6, 9].includes(diff) && [8, 11].includes(j)) {
            yogas.push({
                name: "Hamsa Yoga",
                type: "Raj Yoga",
                description: "Jupiter in kendra in own/exaltation sign.",
                strength: "Very Strong"
            });
        }
    }

    // ---- 5. Ruchaka Yoga ----
    if (planets.Mars) {
        const ma = getSign(planets.Mars.longitude);
        const diff = (ma - ascSign + 12) % 12;
        if ([0, 3, 6, 9].includes(diff) && [0, 7, 9].includes(ma)) {
            yogas.push({
                name: "Ruchaka Yoga",
                type: "Raj Yoga",
                description: "Mars in kendra in own sign/exaltation.",
                strength: "Very Strong"
            });
        }
    }

    // ---- 6. Bhadra Yoga ----
    if (planets.Mercury) {
        const me = getSign(planets.Mercury.longitude);
        const diff = (me - ascSign + 12) % 12;
        if ([0, 3, 6, 9].includes(diff) && [2, 5].includes(me)) {
            yogas.push({
                name: "Bhadra Yoga",
                type: "Raj Yoga",
                description: "Mercury in kendra in own sign.",
                strength: "Very Strong"
            });
        }
    }

    // ---- 7. Malavya Yoga ----
    if (planets.Venus) {
        const v = getSign(planets.Venus.longitude);
        const diff = (v - ascSign + 12) % 12;
        if ([0, 3, 6, 9].includes(diff) && [1, 6, 11].includes(v)) {
            yogas.push({
                name: "Malavya Yoga",
                type: "Raj Yoga",
                description: "Venus in kendra in own/exaltation sign.",
                strength: "Very Strong"
            });
        }
    }

    // ---- 8. Shasha Yoga ----
    if (planets.Saturn) {
        const s = getSign(planets.Saturn.longitude);
        const diff = (s - ascSign + 12) % 12;
        if ([0, 3, 6, 9].includes(diff) && [6, 9, 10].includes(s)) {
            yogas.push({
                name: "Shasha Yoga",
                type: "Raj Yoga",
                description: "Saturn in kendra in own/exaltation sign.",
                strength: "Very Strong"
            });
        }
    }

    // ---- 9. Neecha Bhanga Raja Yoga ----
    const debilitations: Record<string, number> = {
        Sun: 6,
        Moon: 7,
        Mars: 3,
        Mercury: 11,
        Jupiter: 9,
        Venus: 5,
        Saturn: 0
    };

    for (const [name, p] of Object.entries(planets)) {
        const sign = getSign(p.longitude);
        if (debilitations[name] === sign) {
            const lord = getSignLord(sign);
            if (planets[lord]) {
                const lordSign = getSign(planets[lord].longitude);
                const diff = (lordSign - ascSign + 12) % 12;
                if ([0, 3, 6, 9].includes(diff)) {
                    yogas.push({
                        name: "Neecha Bhanga Raja Yoga",
                        type: "Raj Yoga",
                        description: `${name} debilitation cancelled.`,
                        strength: "Strong"
                    });
                }
            }
        }
    }

    return yogas;
};
