import { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../components/Layout";

/* -----------------------------------------
   Types
----------------------------------------- */

interface TransitResultItem {
  planet: string;
  natalLongitude: number;
  transitLongitude: number;
}

interface TransitApiResponse {
  transits: TransitResultItem[];
}

interface FormDataType {
  birthDate: string;
  birthTime: string;
  birthTimezone: number;
  currentDate: string;
  currentTime: string;
  currentTimezone: number;
}

/* -----------------------------------------
   Component
----------------------------------------- */

export default function TransitPage() {
  const [formData, setFormData] = useState<FormDataType>({
    birthDate: "2023-01-01",
    birthTime: "12:00",
    birthTimezone: 5.5,
    currentDate: new Date().toISOString().split("T")[0],
    currentTime: "12:00",
    currentTimezone: 5.5,
  });

  const [result, setResult] = useState<TransitApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  /* ----------------- Input Handler ----------------- */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name.includes("Timezone") ? Number(value) : value,
    }));
  };

  /* ----------------- Submit Handler ----------------- */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://localhost:5000/api/transit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: TransitApiResponse = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Transit API Error:", error);
    }

    setLoading(false);
  };

  /* -----------------------------------------
     Render
  ----------------------------------------- */

  return (
    <Layout>
      <div className="flex flex-col items-center text-white">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          🪐 Transit Analysis
        </h1>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl space-y-6"
        >
          {/* Birth Details */}
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">
              👶 Birth Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="inputStyle"
              />

              <input
                type="time"
                name="birthTime"
                value={formData.birthTime}
                onChange={handleChange}
                className="inputStyle"
              />

              <input
                type="number"
                name="birthTimezone"
                step="0.5"
                value={formData.birthTimezone}
                onChange={handleChange}
                className="inputStyle"
                placeholder="Timezone"
              />
            </div>
          </div>

          {/* Current Transit Details */}
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              🌌 Current Transit Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="date"
                name="currentDate"
                value={formData.currentDate}
                onChange={handleChange}
                className="inputStyle"
              />

              <input
                type="time"
                name="currentTime"
                value={formData.currentTime}
                onChange={handleChange}
                className="inputStyle"
              />

              <input
                type="number"
                name="currentTimezone"
                step="0.5"
                value={formData.currentTimezone}
                onChange={handleChange}
                className="inputStyle"
                placeholder="Timezone"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl text-lg font-semibold hover:opacity-90"
          >
            {loading ? "Calculating..." : "Calculate Transits"}
          </button>
        </form>

        {/* ================= RESULTS ================= */}
        {result && (
          <div className="w-full max-w-5xl mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">
              🌠 Transit Positions
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400">
                    <th className="p-2">Planet</th>
                    <th className="p-2">Natal</th>
                    <th className="p-2">Transit</th>
                    <th className="p-2">Difference</th>
                  </tr>
                </thead>

                <tbody>
                  {result.transits.map((t, i) => (
                    <tr
                      key={i}
                      className="border-b border-slate-800 hover:bg-slate-800/30"
                    >
                      <td className="p-2 font-medium text-blue-300">{t.planet}</td>

                      <td className="p-2">
                        {t.natalLongitude?.toFixed(2)}°
                      </td>

                      <td className="p-2">
                        {t.transitLongitude?.toFixed(2)}°
                      </td>

                      <td className="p-2 text-yellow-300">
                        {Math.abs(t.transitLongitude - t.natalLongitude).toFixed(2)}°
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Tailwind CSS shared input class */}
      <style>{`
        .inputStyle {
          @apply w-full p-3 rounded-lg bg-white/20 text-white outline-none placeholder-gray-300 border border-white/10;
        }
      `}</style>
    </Layout>
  );
}
