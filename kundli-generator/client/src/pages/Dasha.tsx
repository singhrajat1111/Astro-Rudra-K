import React, { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../components/Layout";

/* ---------------------------------------------
   Types
---------------------------------------------- */

interface DashaItem {
  name: string;
  start: string;
  end: string;
  lord: string;
  planet: string;
}

interface DashaResponse {
  dashas: DashaItem[];
}

/* ---------------------------------------------
   Component
---------------------------------------------- */

const Dasha: React.FC = () => {
  const [formData, setFormData] = useState({
    date: "2023-01-01",
    time: "12:00",
    timezone: 5.5,
  });

  const [result, setResult] = useState<DashaResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /* ---------------------------------------------
     Handlers
  ---------------------------------------------- */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "timezone" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/dasha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: DashaResponse = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching dasha:", error);
    }

    setLoading(false);
  };

  /* ---------------------------------------------
     UI
  ---------------------------------------------- */

  return (
    <Layout>
      <div className="flex flex-col items-center text-white">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          🕉 Vimshottari Dasha
        </h1>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl 
                     grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {/* Date */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Birth Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="inputStyle"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Birth Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="inputStyle"
            />
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Timezone
            </label>
            <input
              type="number"
              name="timezone"
              step="0.5"
              value={formData.timezone}
              onChange={handleChange}
              className="inputStyle"
            />
          </div>

          {/* Submit */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-indigo-500 to-blue-600 rounded-xl 
                         text-lg font-semibold hover:opacity-90"
            >
              {loading ? "Calculating..." : "Calculate Dasha"}
            </button>
          </div>
        </form>

        {/* ================= RESULTS ================= */}
        {result && (
          <div className="w-full max-w-4xl mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-300">
              🌙 Mahadasha Periods
            </h2>

            <div className="space-y-4">
              {result.dashas.map((dasha, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-purple-400/40 
                             transition-all shadow-md"
                >
                  <div className="flex justify-between items-center">
                    {/* Planet Name */}
                    <div>
                      <span className="text-xl font-semibold text-blue-300">
                        {dasha.planet}
                      </span>
                      <span className="text-sm text-slate-400 ml-3">
                        Mahadasha
                      </span>
                    </div>

                    {/* Date Range */}
                    <div className="text-right text-sm">
                      <div className="text-slate-300">
                        {new Date(dasha.start).toLocaleDateString()}
                      </div>
                      <div className="text-slate-500">to</div>
                      <div className="text-slate-300">
                        {new Date(dasha.end).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tailwind InputStyle */}
      <style>{`
        .inputStyle {
          @apply w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300
                 outline-none border border-white/10;
        }
      `}</style>
    </Layout>
  );
};

export default Dasha;
