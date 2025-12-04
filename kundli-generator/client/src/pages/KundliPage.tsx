import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";

import PlanetTable from "../components/planets/PlanetTable";
import CitySearch from "../components/CitySearch";
import ChartToggle from "../components/charts/ChartToggle";
import NorthChart from "../components/charts/NorthChart";
import SouthChart from "../components/charts/SouthChart";
import { PlanetGlyphs } from "../components/glyphs/PlanetGlyphs";


interface KundliResponse {
  ascendant: { sign: string; degree: number };
  planets: Record<string, any>;
  houses: any[];
  nakshatras: Record<string, any>;
  panchang: any;
  dasha: any[];
  charts?: any;
  dosha: any;
  generatedAt: string;
}

function NakshatraCard({ planet, nak }: { planet: string; nak: any }) {
  if (!nak) return null;
  const n = nak.nakshatra || nak;

  return (
    <div className="bg-[#0b0b18] p-5 rounded-2xl border border-cyan-400/30 shadow-xl mb-4">
      <h3 className="text-xl font-bold text-cyan-300 mb-2 flex items-center gap-2">
        <span className={PlanetGlyphs[planet]?.color}>
          {PlanetGlyphs[planet]?.symbol}
        </span>
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

function PanchangCard({ p }: { p: any }) {
  if (!p) return null;

  return (
    <Card title="📅 Panchang">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p><strong>Tithi:</strong> {p.tithi}</p>
          <p><strong>Paksha:</strong> {p.paksha}</p>
          <p><strong>Nakshatra:</strong> {p.nakshatra} (Pada {p.nakshatraPada})</p>
          <p><strong>Yoga:</strong> {p.yoga}</p>
          <p><strong>Karana:</strong> {p.karana}</p>
        </div>

        <div>
          <p><strong>Weekday:</strong> {p.weekday}</p>
          <p><strong>Moon Phase:</strong> {p.moonPhase}</p>
          <p><strong>Sunrise:</strong> {p.sunrise ? new Date(p.sunrise).toLocaleTimeString() : "—"}</p>
          <p><strong>Sunset:</strong> {p.sunset ? new Date(p.sunset).toLocaleTimeString() : "—"}</p>
        </div>
      </div>
    </Card>
  );
}

function DashaCard({ items }: { items: any[] }) {
  if (!items || !items.length) return null;

  return (
    <Card title="🔶 Vimshottari Dasha">
      <div className="space-y-4">
        {items.map((d, i) => (
          <div
            key={i}
            className="bg-black/30 p-4 rounded-xl border border-white/10 shadow-md"
          >
            <p className="text-cyan-300 font-semibold">{d.lord}</p>
            <p><strong>Start:</strong> {new Date(d.start).toDateString()}</p>
            <p><strong>End:</strong> {new Date(d.end).toDateString()}</p>
            <p><strong>Duration:</strong> {d.durationYears} years</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function DoshaCard({ d }: { d: any }) {
  if (!d) return null;

  return (
    <Card title="🌀 Dosha Analysis">
      <div className="grid grid-cols-2 gap-4 text-sm">
        {Object.entries(d).map(([key, value]) => (
          <p key={key}>
            <strong className="capitalize">{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
            {value ? "Present" : "Not Present"}
          </p>
        ))}
      </div>
    </Card>
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

export default function KundliPage() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    lat: 0,
    lon: 0,
    place: "",
    timezone: 5.5,
    dst: 0
  });

  const [activeTab, setActiveTab] = useState<"details" | "charts">("details");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<KundliResponse | null>(null);
  const [error, setError] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleCitySelect(city: {
    lat: number;
    lon: number;
    place: string;
    timezone: number;
    dst: number;
  }) {
    setForm((prev) => ({
      ...prev,
      lat: city.lat,
      lon: city.lon,
      place: city.place,
      timezone: city.timezone,
      dst: city.dst
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await axios.post("http://localhost:5000/api/kundli", { ...form });
      setData(res.data.data);
    } catch {
      setError("❌ Failed to generate Kundli. Please check backend.");
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050510] text-white flex items-center justify-center text-2xl">
        Generating Kundli...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#050510] text-white p-6 flex flex-col items-center select-none">

      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,150,255,0.4)]">
        🔮 Kundli Generator
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-4 shadow-xl border border-white/20"
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

        <CitySearch onSelect={handleCitySelect} />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl text-lg font-semibold hover:opacity-90 transition-all tracking-wide mt-2"
        >
          Generate Kundli
        </button>
      </form>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {data && (
        <div className="w-full max-w-5xl mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-xl">

          <ChartToggle active={activeTab} onChange={setActiveTab} />

          {activeTab === "details" && (
            <div className="space-y-6 animate-fade-in">

              <h2 className="text-2xl font-bold text-cyan-300">
                🌟 Kundli Details
              </h2>

              <p className="text-gray-300">
                <strong>Ascendant:</strong>{" "}
                {data.ascendant.sign} ({data.ascendant.degree.toFixed(2)}°)
              </p>

              <PlanetTable planets={data.planets} />
              <HouseTable houses={data.houses} />

              <Card title="✨ Nakshatra Analysis">
                {Object.entries(data.nakshatras).map(([planet, nak]: any) => (
                  <NakshatraCard key={planet} planet={planet} nak={nak} />
                ))}
              </Card>

              <Card title="📅 Panchang">
                <pre className="bg-black/40 p-4 rounded-xl text-sm overflow-x-auto border border-white/10">
                  <PanchangCard p={data.panchang} />
                </pre>
              </Card>

              <Card title="🔶 Dasha">
                <pre className="bg-black/40 p-4 rounded-xl text-sm overflow-x-auto border border-white/10">
                  <DashaCard items={data.dasha} />
                </pre>
              </Card>

              <Card title="🌀 Dosha">
                <pre className="bg-black/40 p-4 rounded-xl text-sm overflow-x-auto border border-white/10">
                  <DoshaCard d={data.dosha} />
                </pre>
              </Card>
            </div>
          )}

          {activeTab === "charts" && (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">🧿 Vedic Charts</h2>

              <h3 className="text-xl text-cyan-200 mb-2">North Indian Chart</h3>
              <NorthChart houses={data.houses} planets={data.planets} />

              <h3 className="text-xl text-cyan-200 mt-8 mb-2">South Indian Chart</h3>
              <SouthChart houses={data.houses} planets={data.planets} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
