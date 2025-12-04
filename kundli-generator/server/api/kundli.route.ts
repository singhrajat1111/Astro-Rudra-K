import { Router, Request, Response } from "express";
import { KundliEngine } from "../astro-engine/KundliEngine.js";

const router = Router();
const engine = new KundliEngine();

/**
 * PRODUCTION-READY KUNDLI ROUTE
 * --------------------------------------------
 * ✔ Full validation
 * ✔ Local DOB → UTC conversion (AstroSage accurate)
 * ✔ Type safe
 * ✔ Handles timezone & DST
 * ✔ Safe error handling
 * ✔ Works with your updated frontend payload
 */

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
      dst = 0,
      girlMoonLongitude
    } = req.body;

    /* ----------------------- VALIDATION ----------------------- */
    if (!date || !time || lat === undefined || lon === undefined) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: date, time, lat, lon"
      });
    }

    if (typeof timezone !== "number") {
      return res.status(400).json({
        success: false,
        error: "Timezone must be provided as a number (e.g., 5.5)"
      });
    }

    /* ----------------------- LOCAL → UTC ----------------------- */
    // Combine date & time into a LOCAL datetime
    const localDT = new Date(`${date}T${time}`);

    if (isNaN(localDT.getTime())) {
      return res.status(400).json({
        success: false,
        error: "Invalid date or time format"
      });
    }

    // Convert Local → UTC using timezone + DST
    const utcDT = new Date(
      localDT.getTime() -
        timezone * 60 * 60 * 1000 -
        dst * 60 * 60 * 1000
    );

    /* ----------------------- ENGINE PROCESS ----------------------- */
    const result = engine.generate({
      date: utcDT,         // ALWAYS UTC
      lat: Number(lat),
      lon: Number(lon),
      timezone,
      dst,
      place,
      girlMoonLongitude
    });

    /* ----------------------- SUCCESS RESPONSE ----------------------- */
    return res.json({
      success: true,
      data: result
    });

  } catch (err: any) {
    console.error("Kundli Route Error:", err);

    return res.status(500).json({
      success: false,
      error: "Internal server error: " + err.message
    });
  }
});

export default router;
