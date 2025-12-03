import { Router } from "express";
import { Matching } from "../astro-engine/matching/Matching.js";

const router = Router();
const matchEngine = new Matching();

router.post("/", (req, res) => {
    try {
        const { boyMoonLong, girlMoonLong } = req.body;

        if (boyMoonLong === undefined || girlMoonLong === undefined) {
            return res.status(400).json({
                error: "Both moon longitudes required"
            });
        }

        const result = matchEngine.calculate(
            Number(boyMoonLong),
            Number(girlMoonLong)
        );

        return res.json({ success: true, data: result });

    } catch (err: any) {
        return res.status(500).json({ error: err.message });
    }
});

export default router;
