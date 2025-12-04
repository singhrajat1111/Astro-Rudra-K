export const NAKSHATRAS = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra",
    "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula",
    "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

/* ----------------------------------------------
   TYPES
---------------------------------------------- */

export interface NakshatraInfo {
    index: number;             // 1–27
    name: string;              // Nakshatra name
    pada: number;              // 1–4
    degreesTraversed: number;  // 0 – 13°20'
    degreesRemaining: number;  // remaining degrees in nakshatra
}

/* ----------------------------------------------
   MAIN FUNCTION
---------------------------------------------- */

export const calculateNakshatra = (longitude: number): NakshatraInfo => {
    const TOTAL_NAK = 27;
    const NAK_LENGTH = 360 / TOTAL_NAK;   // 13°20' = 13.333333°
    const PADA_LENGTH = NAK_LENGTH / 4;   // 3°20' = 3.333333°

    // Normalize longitude 0–360
    let long = longitude % 360;
    if (long < 0) long += 360;

    // Find Nakshatra index
    const nakIndex = Math.floor(long / NAK_LENGTH);
    const name = NAKSHATRAS[nakIndex];

    // Degrees inside that Nakshatra
    const degreesInNak = long - nakIndex * NAK_LENGTH;

    // Pada calculation
    const pada = Math.floor(degreesInNak / PADA_LENGTH) + 1;

    return {
        index: nakIndex + 1,
        name,
        pada,
        degreesTraversed: degreesInNak,
        degreesRemaining: NAK_LENGTH - degreesInNak
    };
};
