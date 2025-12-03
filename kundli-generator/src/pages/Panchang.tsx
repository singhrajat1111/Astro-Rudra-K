import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../components/Layout";

/* ------------------------------------------------
   Types
--------------------------------------------------- */

interface PanchangData {
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  sunrise: string;
  sunset: string;
}

interface PanchangApiResponse {
  panchang: PanchangData;
}

interface FormDataType {
  date: string;
  time: string;
  lat: number;
  lon: number;
  timezone: number;
}

/* ------------------------------------------------
   Component
--------------------------------------------------- */

export default function Panchang() {
  const [formData, setFormData] = useState<FormDataType>({
    date: new Date().toISOString().split("T")[0],
    time: "12:00",
    lat: 28.6139,
    lon: 77.2090,
    timezone: 5.5,
  });

  const [result, setResult] = useState<PanchangApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /* ------------------------------------------------
       Handlers
  --------------------------------------------------- */

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "lat" || name === "lon" || name === "timezone"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/panchang", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: PanchangApiResponse = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Panchang API error:", error);
    }

    setLoading(false);
  }

  /* ------------------------------------------------
       UI
  --------------------------------------------------- */

  return (
    <Layout>
      <div className="max-w-5xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text text-center">
          📅 Panchang Calculator
        </h1>

        {/* ==================== FORM ====================== */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/20
                     grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* Date */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10"
            />
          </div>

          {/* Latitude */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Latitude</label>
            <input
              type="number"
              name="lat"
              step="0.0001"
              value={formData.lat}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10"
            />
          </div>

          {/* Longitude */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Longitude</label>
            <input
              type="number"
              name="lon"
              step="0.0001"
              value={formData.lon}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10"
            />
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Timezone</label>
            <input
              type="number"
              name="timezone"
              step="0.5"
              value={formData.timezone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 text-white outline-none border border-white/10"
            />
          </div>

          {/* Submit button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl 
                         text-lg font-semibold hover:opacity-90"
            >
              {loading ? "Calculating..." : "Get Panchang"}
            </button>
          </div>
        </form>

        {/* ==================== RESULT ====================== */}
        {result && (
          <div className="mt-10 bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/20 shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-purple-300 mb-4 text-center">
              🌙 Panchang Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(result.panchang).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-blue-400/40 
                             transition-all shadow-md"
                >
                  <div className="text-sm text-slate-400 capitalize">{key}</div>
                  <div className="text-2xl font-semibold text-blue-300 mt-1">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
