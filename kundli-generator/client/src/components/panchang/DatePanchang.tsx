import axios from "axios";
import { useState } from "react";
import CitySearch from "../CitySearch";
import { PanchangCard } from "./PanchangCard";

export default function DatePanchang() {
  const [form, setForm] = useState({
    date: "",
    location: {
      lat: 28.6139,
      lon: 77.2090,
      timezone: 5.5,
      dst: 0,
      place: "New Delhi"
    }
  });

  const [data, setData] = useState<any>(null);

  async function fetchPanchang() {
    const res = await axios.post("http://localhost:5000/api/panchang", {
      date: form.date,
      lat: form.location.lat,
      lon: form.location.lon,
      timezone: form.location.timezone,
      dst: form.location.dst
    });

    setData(res.data.data);
  }

  return (
    <div className="space-y-4">
      <input
        type="date"
        value={form.date}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, date: e.target.value }))
        }
        className="p-3 rounded-lg bg-white/20 text-white outline-none"
      />

      <CitySearch
        onSelect={(loc) => setForm((prev) => ({ ...prev, location: loc }))}
      />

      <button
        onClick={fetchPanchang}
        className="px-5 py-2 bg-cyan-500 text-black rounded-lg font-semibold"
      >
        Get Panchang
      </button>

      {data && (
        <PanchangCard
          data={data}
          date={form.date}
          place={form.location.place}
        />
      )}
    </div>
  );
}
