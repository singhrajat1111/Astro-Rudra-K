import { Router } from "express";
import { Panchang } from "../astro-engine/panchang/Panchang.js";

const router = Router();
const panchang = new Panchang();

// Convert date + time + timezone + DST => actual JS Date (UTC)
function buildDate(body: any) {
  const { date, time, timezone, dst } = body;

  const iso = `${date}T${time}:00`;
  const local = new Date(iso);

  const offsetMin = (Number(timezone) + Number(dst)) * 60;
  return new Date(local.getTime() - offsetMin * 60000);
}

// Daily Panchang (today)
router.post("/daily", (req, res) => {
  try {
    const { lat, lon, timezone = 5.5, dst = 0 } = req.body;

    if (lat === undefined || lon === undefined) {
      return res.status(400).json({ success: false, error: "lat, lon required" });
    }

    const now = new Date();
    const utc = new Date(now.getTime() - (timezone + dst) * 3600000);

    const result = panchang.calculate(utc, Number(lat), Number(lon));

    return res.json({ success: true, data: result });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Panchang for selected date
router.post("/date", (req, res) => {
  try {
    const { date, time, lat, lon, timezone = 5.5, dst = 0 } = req.body;

    if (!date || !time || lat === undefined || lon === undefined) {
      return res.status(400).json({
        success: false,
        error: "date, time, lat, lon required"
      });
    }

    const actualDate = buildDate(req.body);

    const result = panchang.calculate(
      actualDate,
      Number(lat),
      Number(lon)
    );

    return res.json({ success: true, data: result });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
