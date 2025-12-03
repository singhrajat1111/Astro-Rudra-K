import { Router } from "express";
import { Vimshottari } from "../astro-engine/dasha/Vimshottari.js";

const router = Router();
const dashaEngine = new Vimshottari();

router.post("/", (req, res) => {
    try {
        const { moonLongitude, date } = req.body;

        if (moonLongitude === undefined || !date) {
            return res.status(400).json({
                error: "Required: moonLongitude, date"
            });
        }

        const result = dashaEngine.calculate(
            Number(moonLongitude),
            new Date(date)
        );

        return res.json({ success: true, data: result });

    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
});

export default router;
