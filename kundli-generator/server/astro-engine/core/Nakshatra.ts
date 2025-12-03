export interface NakshatraInfo {
    index: number;        // 1–27
    name: string;         // English name
    sanskrit: string;     // Devanagari/Sanskrit
    ruler: string;        // Planetary lord
    symbol: string;
    deity: string;
    nature: string;       // Deva / Manushya / Rakshasa
    startDegree: number;  // 0–360 (absolute)
    endDegree: number;    // 0–360 (absolute)
}

export interface NakshatraResult {
    nakshatra: NakshatraInfo;
    index: number;        // 1–27
    pada: number;         // 1–4
    padaDegree: number;   // degree inside pada
}

// 13°20' = 13.3333°
export const NAKSHATRA_SPAN = 360 / 27;    // 13.333333°
export const PADA_SPAN = NAKSHATRA_SPAN / 4;  // 3.333333°

export const NAKSHATRAS: NakshatraInfo[] = [
    { index: 1, name: "Ashwini", sanskrit: "अश्विनी", ruler: "Ketu", symbol: "Horse Head", deity: "Ashwini Kumars", nature: "Deva", startDegree: 0, endDegree: 13.3333 },
    { index: 2, name: "Bharani", sanskrit: "भरणी", ruler: "Venus", symbol: "Yoni", deity: "Yama", nature: "Manushya", startDegree: 13.3333, endDegree: 26.6666 },
    { index: 3, name: "Krittika", sanskrit: "कृत्तिका", ruler: "Sun", symbol: "Knife", deity: "Agni", nature: "Rakshasa", startDegree: 26.6666, endDegree: 40 },
    { index: 4, name: "Rohini", sanskrit: "रोहिणी", ruler: "Moon", symbol: "Cart", deity: "Brahma", nature: "Manushya", startDegree: 40, endDegree: 53.3333 },
    { index: 5, name: "Mrigashira", sanskrit: "मृगशीर्षा", ruler: "Mars", symbol: "Deer", deity: "Soma", nature: "Deva", startDegree: 53.3333, endDegree: 66.6666 },
    { index: 6, name: "Ardra", sanskrit: "आर्द्रा", ruler: "Rahu", symbol: "Tear Drop", deity: "Rudra", nature: "Manushya", startDegree: 66.6666, endDegree: 80 },
    { index: 7, name: "Punarvasu", sanskrit: "पुनर्वसु", ruler: "Jupiter", symbol: "Quiver", deity: "Aditi", nature: "Deva", startDegree: 80, endDegree: 93.3333 },
    { index: 8, name: "Pushya", sanskrit: "पुष्य", ruler: "Saturn", symbol: "Flower", deity: "Brihaspati", nature: "Deva", startDegree: 93.3333, endDegree: 106.6666 },
    { index: 9, name: "Ashlesha", sanskrit: "आश्लेषा", ruler: "Mercury", symbol: "Serpent", deity: "Nagas", nature: "Rakshasa", startDegree: 106.6666, endDegree: 120 },
    { index: 10, name: "Magha", sanskrit: "मघा", ruler: "Ketu", symbol: "Throne", deity: "Pitris", nature: "Rakshasa", startDegree: 120, endDegree: 133.3333 },
    { index: 11, name: "Purva Phalguni", sanskrit: "पूर्व फल्गुनी", ruler: "Venus", symbol: "Bed", deity: "Bhaga", nature: "Manushya", startDegree: 133.3333, endDegree: 146.6666 },
    { index: 12, name: "Uttara Phalguni", sanskrit: "उत्तर फल्गुनी", ruler: "Sun", symbol: "Cot", deity: "Aryaman", nature: "Manushya", startDegree: 146.6666, endDegree: 160 },
    { index: 13, name: "Hasta", sanskrit: "हस्त", ruler: "Moon", symbol: "Hand", deity: "Savitar", nature: "Manushya", startDegree: 160, endDegree: 173.3333 },
    { index: 14, name: "Chitra", sanskrit: "चित्रा", ruler: "Mars", symbol: "Pearl", deity: "Tvashtar", nature: "Rakshasa", startDegree: 173.3333, endDegree: 186.6666 },
    { index: 15, name: "Swati", sanskrit: "स्वाती", ruler: "Rahu", symbol: "Coral", deity: "Vayu", nature: "Deva", startDegree: 186.6666, endDegree: 200 },
    { index: 16, name: "Vishakha", sanskrit: "विशाखा", ruler: "Jupiter", symbol: "Tree Arch", deity: "Indra-Agni", nature: "Rakshasa", startDegree: 200, endDegree: 213.3333 },
    { index: 17, name: "Anuradha", sanskrit: "अनुराधा", ruler: "Saturn", symbol: "Lotus", deity: "Mitra", nature: "Deva", startDegree: 213.3333, endDegree: 226.6666 },
    { index: 18, name: "Jyeshtha", sanskrit: "ज्येष्ठा", ruler: "Mercury", symbol: "Ear Ring", deity: "Indra", nature: "Rakshasa", startDegree: 226.6666, endDegree: 240 },
    { index: 19, name: "Mula", sanskrit: "मूला", ruler: "Ketu", symbol: "Roots", deity: "Nirriti", nature: "Rakshasa", startDegree: 240, endDegree: 253.3333 },
    { index: 20, name: "Purva Ashadha", sanskrit: "पूर्वाषाढ़ा", ruler: "Venus", symbol: "Fan", deity: "Apas", nature: "Manushya", startDegree: 253.3333, endDegree: 266.6666 },
    { index: 21, name: "Uttara Ashadha", sanskrit: "उत्तराषाढ़ा", ruler: "Sun", symbol: "Elephant Tusk", deity: "Vishwadevas", nature: "Manushya", startDegree: 266.6666, endDegree: 280 },
    { index: 22, name: "Shravana", sanskrit: "श्रवण", ruler: "Moon", symbol: "Ear", deity: "Vishnu", nature: "Deva", startDegree: 280, endDegree: 293.3333 },
    { index: 23, name: "Dhanishta", sanskrit: "धनिष्ठा", ruler: "Mars", symbol: "Drum", deity: "Vasus", nature: "Rakshasa", startDegree: 293.3333, endDegree: 306.6666 },
    { index: 24, name: "Shatabhisha", sanskrit: "शतभिषक", ruler: "Rahu", symbol: "Empty Circle", deity: "Varuna", nature: "Rakshasa", startDegree: 306.6666, endDegree: 320 },
    { index: 25, name: "Purva Bhadrapada", sanskrit: "पूर्वभाद्रपदा", ruler: "Jupiter", symbol: "Sword", deity: "Aja Ekapada", nature: "Manushya", startDegree: 320, endDegree: 333.3333 },
    { index: 26, name: "Uttara Bhadrapada", sanskrit: "उत्तरभाद्रपदा", ruler: "Saturn", symbol: "Twins", deity: "Ahir Budhnya", nature: "Manushya", startDegree: 333.3333, endDegree: 346.6666 },
    { index: 27, name: "Revati", sanskrit: "रेवती", ruler: "Mercury", symbol: "Fish", deity: "Pushan", nature: "Deva", startDegree: 346.6666, endDegree: 360 }
];

/**
 * Convert a sidereal longitude to Nakshatra + Pada.
 */
export function getNakshatra(longitude: number): NakshatraResult {
    longitude = (longitude + 360) % 360;

    for (const n of NAKSHATRAS) {
        if (longitude >= n.startDegree && longitude < n.endDegree) {
            const degreeIntoNak = longitude - n.startDegree;
            const pada = Math.floor(degreeIntoNak / PADA_SPAN) + 1;
            const padaDegree = degreeIntoNak % PADA_SPAN;

            return {
                nakshatra: n,
                index: n.index,
                pada,
                padaDegree
            };
        }
    }

    // Fallback (should not happen)
    return {
        nakshatra: NAKSHATRAS[26],
        index: 27,
        pada: 4,
        padaDegree: 0
    };
}
