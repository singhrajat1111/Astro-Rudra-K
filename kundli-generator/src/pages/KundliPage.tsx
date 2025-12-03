import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";

interface KundliRequest {
  name: string;
  date: string;
  time: string;
  lat: number;
  lon: number;
}

interface KundliResponse {
  ascendant: {
    sign: string;
    degree: number;
  };
  planets: Record<string, any>;
  houses: any[];
  nakshatras: Record<string, any>;
  panchang: Record<string, any>;
  dasha: any[];
  charts?: any;
  dosha: any;
  matching?: any;
  generatedAt: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

/* ------------------------------
   NAKSHATRA CARD (Backend Only)
------------------------------ */
function NakshatraCard({ planet, nak }: { planet: string; nak: any }) {
  if (!nak) return null;

  const n = nak.nakshatra || nak; // auto-support "nakshatra:{..}" or flat

  return (
    <div className="bg-[#0b0b18] p-5 rounded-2xl border border-cyan-400/30 shadow-xl mb-4">
      <h3 className="text-xl font-bold text-cyan-300 mb-2">
        {planet} — {n.name} (Pada {nak.pada})
      </h3>

      <p><strong>Ruler:</strong> {n.ruler}</p>
      <p><strong>Deity:</strong> {n.deity}</p>
      <p><strong>Symbol:</strong> {n.symbol}</p>
      <p><strong>Nature:</strong> {n.nature}</p>

      <div className="mt-3 text-sm text-gray-400">
        <p><strong>Index:</strong> {n.index}</p>
        <p>
          <strong>Degrees Remaining:</strong>{" "}
          {(n.endDegree - n.startDegree).toFixed(2)}°
        </p>
      </div>
    </div>
  );
}

/* ------------------------------ */
function DataSection({ title, data }: { title: string; data: any }) {
  const isEmpty =
    !data || (typeof data === "object" && Object.keys(data).length === 0);

  return (
    <section>
      <h3 className="text-xl font-semibold mb-2 capitalize text-cyan-300">
        {title}
      </h3>
      <pre className="bg-black/40 p-4 rounded-xl overflow-x-auto text-sm border border-white/10">
        {isEmpty
          ? "⚠️ No detailed data available."
          : JSON.stringify(data, null, 2)}
      </pre>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#0b0b18] p-5 rounded-2xl border border-white/10 shadow-xl mb-6">
      <h3 className="text-lg font-bold text-cyan-300 mb-3">{title}</h3>
      {children}
    </div>
  );
}

function PlanetTable({ planets }: { planets: Record<string, any> }) {
  if (!planets) return null;

  return (
    <Card title="🪐 Planet Positions">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 text-cyan-300">
            <th className="py-1 text-left">Planet</th>
            <th className="text-left">Sign</th>
            <th className="text-left">Degree</th>
            <th className="text-left">Retro?</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(planets).map(([name, p]: any) => (
            <tr key={name} className="border-b border-white/5">
              <td className="py-1 font-medium">{name}</td>
              <td>{p.sign}</td>
              <td>{p.longitude?.toFixed(2)}°</td>
              <td>{p.isRetrograde ? "✔" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

function HouseTable({ houses }: { houses: any[] }) {
  if (!houses) return null;

  return (
    <Card title="🏠 House Details">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-cyan-300 border-b border-white/10">
            <th className="py-1 text-left">House</th>
            <th className="text-left">Sign</th>
            <th className="text-left">Degree</th>
            <th className="text-left">Lord</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <tr key={h.houseNumber} className="border-b border-white/5">
              <td className="py-1">{h.houseNumber}</td>
              <td>{h.sign}</td>
              <td>{h.degree?.toFixed(2)}°</td>
              <td>{h.lord}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

/* -----------------------------------------
   MAIN KUNDLI PAGE
----------------------------------------- */
export default function KundliPage() {
  const [form, setForm] = useState<KundliRequest>({
    name: "",
    date: "",
    time: "",
    lat: 0,
    lon: 0,
  });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<KundliResponse | null>(null);
  const [error, setError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "lat" || name === "lon" ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);

    try {
      const payload = {
        date: new Date(`${form.date}T${form.time}`),
        lat: form.lat,
        lon: form.lon,
      };

      const res = await axios.post<ApiResponse<KundliResponse>>(
        "http://localhost:5000/api/kundli",
        payload
      );

      setData(res.data.data);
    } catch (err) {
      console.error("Kundli API Error:", err);
      setError("❌ Failed to generate Kundli. Please check backend server.");
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen w-full bg-[#050510] text-white flex items-center justify-center text-2xl font-semibold">
        Generating Kundli...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#050510] text-white p-6 flex flex-col items-center select-none">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,150,255,0.4)]">
        🔮 Kundli Generator
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4 shadow-xl border border-white/20 animate-fade-in"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name (Optional)"
          className="w-full p-3 rounded-lg bg-white/20 text-white outline-none"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white/20 outline-none"
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white/20 outline-none"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="lat"
            value={form.lat}
            onChange={handleChange}
            placeholder="Latitude"
            className="p-3 rounded-lg bg-white/20 outline-none"
          />

          <input
            type="number"
            name="lon"
            value={form.lon}
            onChange={handleChange}
            placeholder="Longitude"
            className="p-3 rounded-lg bg-white/20 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl text-lg font-semibold hover:opacity-90 transition-all tracking-wide"
        >
          Generate Kundli
        </button>
      </form>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {/* RESULT */}
      {data && (
        <div className="w-full max-w-4xl mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl space-y-6 animate-fade-in">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">
            🌟 Kundli Generated Successfully
          </h2>

          <p className="text-gray-300 mb-4">
            Ascendant:
            <strong className="text-white"> {data.ascendant.sign}</strong> (
            {data.ascendant.degree.toFixed(2)}°)
          </p>

          <PlanetTable planets={data.planets} />
          <HouseTable houses={data.houses} />

          {/* NAKSHATRAS */}
          <Card title="✨ Nakshatra Analysis">
            {Object.entries(data.nakshatras).map(([planet, nak]: any) => (
              <NakshatraCard key={planet} planet={planet} nak={nak} />
            ))}
          </Card>

          <DataSection title="📅 Panchang" data={data.panchang} />
          <DataSection title="🔶 Dasha" data={data.dasha} />
          <DataSection title="🌀 Dosha" data={data.dosha} />
        </div>
      )}
    </div>
  );
}
