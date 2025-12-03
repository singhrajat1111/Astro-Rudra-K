import { AstroEngine } from "./src/astro-engine/index";

const engine = new AstroEngine();

const req = {
    date: new Date("1998-05-11T14:30:00"),
    lat: 28.6139,
    lon: 77.2090,
};

try {
    const kundli = engine.generateKundli(req);
    console.log("KUNDLI GENERATED SUCCESSFULLY:\n");
    console.log(JSON.stringify(kundli, null, 2));
} catch (err) {
    console.error("ENGINE ERROR:\n", err);
}
