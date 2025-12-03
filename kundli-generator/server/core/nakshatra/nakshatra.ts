export const NAKSHATRAS = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra",
    "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula",
    "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

export interface NakshatraInfo {
    index: number;
    name: string;
    pada: number;
    degreesTraversed: number;
    degreesRemaining: number;
}

export const calculateNakshatra = (longitude: number): NakshatraInfo => {
    const NAK_LENGTH = 360 / 27; // 13°20'

    // Normalize longitude
    let long = longitude % 360;
    if (long < 0) long += 360;

    const nakIndex = Math.floor(long / NAK_LENGTH);
    const nakshatra = NAKSHATRAS[nakIndex];

    // Each pada = 3°20'
    const degreesInNak = long - nakIndex * NAK_LENGTH;
    const PADA_LENGTH = NAK_LENGTH / 4;
    const pada = Math.floor(degreesInNak / PADA_LENGTH) + 1;

    return {
        index: nakIndex + 1,
        name: nakshatra,
        pada,
        degreesTraversed: degreesInNak,
        degreesRemaining: NAK_LENGTH - degreesInNak
    };
};
