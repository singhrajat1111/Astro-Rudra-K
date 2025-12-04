import { Router, Request, Response } from "express";
import { Panchang } from "../astro-engine/panchang/Panchang.js";
import { AstronomyWrapper } from "../astro-engine/astronomy/AstronomyWrapper.js";

const router = Router();
const panchangEngine = new Panchang();
const astronomy = AstronomyWrapper.getInstance();

router.post("/", (req: Request, res: Response) => {
  try {
    const { date, lat, lon, timezone, dst = 0 } = req.body;

    if (!date || lat === undefined || lon === undefined) {
      return res.status(400).json({
        success: false,
        error: "Required fields: date, lat, lon"
      });
    }

    // Convert local date → UTC
    const localDate = new Date(date);
    const utcDate = new Date(
      localDate.getTime() -
        timezone * 60 * 60 * 1000 -
        dst * 60 * 60 * 1000
    );

    const result = panchangEngine.calculate(utcDate, lat, lon);

    return res.json({ success: true, data: result });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

export default router;
