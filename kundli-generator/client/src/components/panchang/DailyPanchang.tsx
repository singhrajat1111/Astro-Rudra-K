import axios from "axios";
import { useEffect, useState } from "react";
import CitySearch from "../CitySearch";
import { PanchangCard } from "./PanchangCard";

export default function DailyPanchang() {
  const today = new Date().toISOString().split("T")[0];

  const [location, setLocation] = useState({
    lat: 28.6139,
    lon: 77.2090,
    timezone: 5.5,
    dst: 0,
    place: "New Delhi"
  });

  const [data, setData] = useState<any>(null);

  async function fetchPanchang() {
    const res = await axios.post("http://localhost:5000/api/panchang", {
      date: today,
      lat: location.lat,
      lon: location.lon,
      timezone: location.timezone,
      dst: location.dst
    });

    setData(res.data.data);
  }

  useEffect(() => {
    fetchPanchang();
  }, [location]);

  return (
    <div className="space-y-4">
      <CitySearch onSelect={setLocation} />

      {!data ? (
        <p className="text-cyan-300">Loading Panchang…</p>
      ) : (
        <PanchangCard data={data} date={today} place={location.place} />
      )}
    </div>
  );
}
