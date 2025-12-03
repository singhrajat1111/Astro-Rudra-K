import { useState } from "react";
import axios from "axios";

/* -------------------------------------------------
   Types
-------------------------------------------------- */

interface MatchResponse {
  totalScore: number;
  maxScore: number;
  percentage: number;

  varnaScore: number;
  vashyaScore: number;
  taraScore: number;
  yoniScore: number;
  maitriScore: number;
  ganaScore: number;
  bhakootScore: number;
  nadiScore: number;

  mangalMatching: boolean;
  notes: string[];
}

interface KundliRequest {
  date: string;
  time: string;
  lat: number;
  lon: number;
}

/* -------------------------------------------------
   Page
-------------------------------------------------- */

export default function MatchingPage() {
  const [boy, setBoy] = useState<KundliRequest>({
    date: "",
    time: "",
    lat: 0,
    lon: 0,
  });

  const [girl, setGirl] = useState<KundliRequest>({
    date: "",
    time: "",
    lat: 0,
    lon: 0,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<MatchResponse | null>(null);
  const [error, setError] = useState<string>("");

  /* -------------------------------------------------
     Helpers
  -------------------------------------------------- */

  const updateForm =
    (setter: React.Dispatch<React.SetStateAction<KundliRequest>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.name === "lat" || e.target.name === "lon"
            ? Number(e.target.value)
            : e.target.value,
      }));
    };

  /* -------------------------------------------------
     Submit
  -------------------------------------------------- */

  const generateMatching = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const boyPayload = {
        date: new Date(`${boy.date}T${boy.time}`),
        lat: Number(boy.lat),
        lon: Number(boy.lon),
      };

      const girlPayload = {
        date: new Date(`${girl.date}T${girl.time}`),
        lat: Number(girl.lat),
        lon: Number(girl.lon),
      };

      const boyRes = await axios.post("http://localhost:5000/api/kundli", boyPayload);
      const girlRes = await axios.post("http://localhost:5000/api/kundli", girlPayload);

      const boyMoon = boyRes.data.planets.Moon.longitude;
      const girlMoon = girlRes.data.planets.Moon.longitude;

      const matchRes = await axios.post("http://localhost:5000/api/match", {
        boyMoonLongitude: boyMoon,
        girlMoonLongitude: girlMoon,
      });

      setResult(matchRes.data);
    } catch (err) {
      console.error(err);
      setError("Matching failed. Check backend connection.");
    }

    setLoading(false);
  };

  /* -------------------------------------------------
     UI
  -------------------------------------------------- */

  return (
    <div className="min-h-screen w-full bg-[#0a0a1a] text-white px-6 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text mb-8">
        💞 Kundli Matching — 36 Gun Milan
      </h1>

      {/* =====================================
                MATCHING FORM
      ======================================= */}
      <form
        onSubmit={generateMatching}
        className="w-full max-w-4xl p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 space-y-10"
      >
        {/* BOY SECTION */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">👦 Boy Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                value={boy.date}
                onChange={updateForm(setBoy)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Time</label>
              <input
                type="time"
                name="time"
                value={boy.time}
                onChange={updateForm(setBoy)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Latitude</label>
              <input
                type="number"
                step="0.0001"
                name="lat"
                value={boy.lat}
                onChange={updateForm(setBoy)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Longitude</label>
              <input
                type="number"
                step="0.0001"
                name="lon"
                value={boy.lon}
                onChange={updateForm(setBoy)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* GIRL SECTION */}
        <div>
          <h2 className="text-2xl font-semibold text-pink-300 mb-4">👧 Girl Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300">Date</label>
              <input
                type="date"
                name="date"
                value={girl.date}
                onChange={updateForm(setGirl)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Time</label>
              <input
                type="time"
                name="time"
                value={girl.time}
                onChange={updateForm(setGirl)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Latitude</label>
              <input
                type="number"
                step="0.0001"
                name="lat"
                value={girl.lat}
                onChange={updateForm(setGirl)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Longitude</label>
              <input
                type="number"
                step="0.0001"
                name="lon"
                value={girl.lon}
                onChange={updateForm(setGirl)}
                className="w-full p-3 rounded-lg bg-white/20 outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-pink-600 to-red-600 rounded-xl text-lg font-bold hover:opacity-90"
        >
          {loading ? "Matching..." : "Match Kundli"}
        </button>
      </form>

      {/* =====================================
                ERROR
      ======================================= */}
      {error && <p className="text-red-400 mt-4">{error}</p>}

      {/* =====================================
                RESULT
      ======================================= */}
      {result && (
        <div className="w-full max-w-3xl mt-10 p-6 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-pink-300">💖 Match Score</h2>

          <div className="text-2xl mb-3 font-semibold">
            Score: <span className="text-yellow-300">{result.totalScore} / 36</span>
          </div>

          <p className="text-gray-300 text-lg mb-6">
            Compatibility: {result.percentage.toFixed(2)}%
          </p>

          {/* SCORES GRID */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>Varna: {result.varnaScore}</div>
            <div>Vashya: {result.vashyaScore}</div>
            <div>Tara: {result.taraScore}</div>
            <div>Yoni: {result.yoniScore}</div>
            <div>Maitri: {result.maitriScore}</div>
            <div>Gana: {result.ganaScore}</div>
            <div>Bhakoot: {result.bhakootScore}</div>
            <div>Nadi: {result.nadiScore}</div>
          </div>

          {/* NOTES */}
          <h3 className="text-xl mt-6 mb-2 text-blue-300">Notes</h3>
          <ul className="list-disc ml-6 text-gray-300">
            {result.notes.map((n, idx) => (
              <li key={idx}>{n}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
