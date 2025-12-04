import { useEffect, useState } from "react";
import axios from "axios";
import PanchangCard from "./PanchangCard";
interface PanchangData {
  tithi: any;
  nakshatra: any;
  yoga: any;
  karana: any;
  weekday: string;
  sunrise: { iso: string | null; local: string | null };
  sunset: { iso: string | null; local: string | null };
}

export default function DailyPanchang() {
  const [data, setData] = useState<PanchangData | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchTodayPanchang() {
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/panchang/daily", {
        lat: 28.6139,       // Default: Delhi (AstroSage style)
        lon: 77.2090,
        timezone: 5.5,
        dst: 0
      });

      setData(res.data.data);
    } catch (err) {
      console.error("Panchang Error:", err);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchTodayPanchang();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-xl text-cyan-300 mt-10">
        Loading Panchang...
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="space-y-5">

      <PanchangCard title="📅 Weekday">
        {data.weekday}
      </PanchangCard>

      <PanchangCard title="🌙 Tithi">
        <div className="text-lg">{data.tithi.name} ({data.tithi.paksha})</div>
        <div className="text-sm text-gray-300 mt-1">
          Start: {data.tithi.startLocal} <br />
          End: {data.tithi.endLocal}
        </div>
      </PanchangCard>

      <PanchangCard title="✨ Nakshatra">
        <div className="text-lg">{data.nakshatra.name} (Pada {data.nakshatra.pada})</div>
        <div className="text-sm text-gray-300 mt-1">
          Start: {data.nakshatra.startLocal} <br />
          End: {data.nakshatra.endLocal}
        </div>
      </PanchangCard>

      <PanchangCard title="🌀 Yoga">
        <div className="text-lg">{data.yoga.name}</div>
        <div className="text-sm text-gray-300 mt-1">
          Start: {data.yoga.startLocal} <br />
          End: {data.yoga.endLocal}
        </div>
      </PanchangCard>

      <PanchangCard title="⚡ Karana">
        <div className="text-lg">{data.karana.name}</div>
        <div className="text-sm text-gray-300 mt-1">
          Start: {data.karana.startLocal} <br />
          End: {data.karana.endLocal}
        </div>
      </PanchangCard>

      <div className="grid grid-cols-2 gap-4">
        <PanchangCard title="🌅 Sunrise">
          {data.sunrise.local || "—"}
        </PanchangCard>

        <PanchangCard title="🌆 Sunset">
          {data.sunset.local || "—"}
        </PanchangCard>
      </div>
      
    </div>
  );
}
