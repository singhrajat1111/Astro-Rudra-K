import { Router } from "express";
import { Panchang } from "../astro-engine/panchang/Panchang.js";

const router = Router();
const panchangEngine = new Panchang();

router.post("/", (req, res) => {
    try {
        const { date, lat, lon } = req.body;

        if (!date || lat === undefined || lon === undefined) {
            return res.status(400).json({
                error: "Required fields: date, lat, lon"
            });
        }

        const result = panchangEngine.calculate(
            new Date(date),
            Number(lat),
            Number(lon)
        );

        return res.json({ success: true, data: result });

    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
});

export default router;
