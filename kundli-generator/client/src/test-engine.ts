import { KundliEngine } from './astro-engine/index';

const engine = new KundliEngine();

// Sample Data: 1st Jan 2000, 12:00 PM, New Delhi
const date = new Date('2000-01-01T12:00:00Z');
const lat = 28.6139;
const lon = 77.2090;

console.log("Generating Kundli for:", date.toISOString(), "Lat:", lat, "Lon:", lon);

try {
    const result = engine.generate({
        date,
        lat,
        lon
    });

    console.log("\n--- Planetary Positions (Sidereal) ---");
    for (const [name, p] of Object.entries(result.planets)) {
        const planet = p as { longitude: number; isRetrograde: boolean };
        console.log(`${name}: ${planet.longitude.toFixed(2)}° ${planet.isRetrograde ? '[R]' : ''}`);
    }

    console.log("\n--- House Cusps ---");
    result.houses.forEach((house: any) => {
        console.log(`House ${house.houseNumber}: ${house.degree.toFixed(2)}°`);
    });

    console.log("\n--- Ascendant ---");
    // Use result.ascendant as it is explicitly typed in KundliResponse
    console.log(`Ascendant: ${result.ascendant.degree.toFixed(2)}° (${result.ascendant.sign})`);

    console.log("\n--- Panchang ---");
    console.log("Tithi:", result.panchang.tithi.name);
    console.log("Nakshatra:", result.panchang.nakshatra.name);
    console.log("Yoga:", result.panchang.yoga.name);
    console.log("Karana:", result.panchang.karana.name);

    console.log("\n--- Dosha Analysis ---");
    console.log("Mangal Dosha:", result.dosha.mangalDosha.description);
    console.log("Kaal Sarp:", result.dosha.kaalSarpDosha.type);
    console.log("Sade Sati:", result.dosha.sadeSati.phase);

    console.log("\n--- Vimshottari Dasha (Current) ---");
    const currentDasha = result.dasha.find((d: any) => d.start <= date && d.end >= date);
    if (currentDasha) {
        console.log(`Current Maha Dasha: ${currentDasha.planet} (Ends: ${currentDasha.end.toISOString()})`);
    }

} catch (error) {
    console.error("Error generating Kundli:", error);
}
