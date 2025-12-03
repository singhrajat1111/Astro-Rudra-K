import { Router } from "express";
import { KundliEngine } from "../astro-engine/KundliEngine.js";

const router = Router();
const engine = new KundliEngine();

router.post("/", (req, res) => {
    try {
        const { date, lat, lon, girlMoonLongitude } = req.body;

        if (!date || lat === undefined || lon === undefined) {
            return res.status(400).json({
                error: "Required fields: date, lat, lon"
            });
        }

        const result = engine.generate({
            date: new Date(date),
            lat: Number(lat),
            lon: Number(lon),
            girlMoonLongitude
        });

        return res.json({ success: true, data: result });

    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
});

export default router;
