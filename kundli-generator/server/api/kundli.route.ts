import { Router, Request, Response } from "express";
import { KundliEngine } from "../astro-engine/KundliEngine.js";

const router = Router();
const engine = new KundliEngine();

router.post("/", (req: Request, res: Response) => {
  try {
    const {
      name,
      date,
      time,
      lat,
      lon,
      place,
      timezone,
      dst = 0
    } = req.body;

    /** ---------------- VALIDATION ---------------- */
    if (!date || !time) {
      return res.status(400).json({
        success: false,
        error: "Missing fields: date and time are required."
      });
    }

    if (lat === undefined || lon === undefined) {
      return res.status(400).json({
        success: false,
        error: "Missing location: lat & lon required."
      });
    }

    if (typeof timezone !== "number") {
      return res.status(400).json({
        success: false,
        error: "Timezone must be a number."
      });
    }

    /** ---------------- LOCAL → UTC ---------------- */
    const localDT = new Date(`${date}T${time}`);

    if (isNaN(localDT.getTime())) {
      return res.status(400).json({
        success: false,
        error: "Invalid date/time format."
      });
    }

    const utcDT = new Date(
      localDT.getTime() -
      timezone * 3600 * 1000 -
      dst * 3600 * 1000
    );

    /** ---------------- ENGINE CALL ---------------- */
    const result = engine.generate({
      date: utcDT,
      lat: Number(lat),
      lon: Number(lon),
      place,
      timezone,
      dst
    });

    return res.json({
      success: true,
      data: result
    });

  } catch (err: any) {
    console.error("Kundli Route Error:", err);

    return res.status(500).json({
      success: false,
      error: "Internal Server Error: " + err.message
    });
  }
});

export default router;
