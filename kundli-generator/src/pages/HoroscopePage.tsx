import React, { useState } from "react";
import Layout from "../components/Layout";

/* -------------------------------------------------
   Types
-------------------------------------------------- */

interface HoroscopePrediction {
    title: string;
    description: string;
    category: string;
}

interface HoroscopeAPIResponse {
    sign: string;
    date: string;
    predictions: HoroscopePrediction[];
}

/* -------------------------------------------------
   Component
-------------------------------------------------- */

const HoroscopePage: React.FC = () => {
    const [sign, setSign] = useState<string>("Aries");
    const [result, setResult] = useState<HoroscopeAPIResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const SIGNS = [
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
        "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/horoscope", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sign })
            });

            const data: HoroscopeAPIResponse = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Horoscope API Error:", error);
        }

        setLoading(false);
    };

    /* -------------------------------------------------
       UI
    -------------------------------------------------- */

    return (
        <Layout>
            <div className="max-w-4xl mx-auto p-6">

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
                    🔮 Daily Horoscope
                </h1>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <div className="col-span-2">
                        <label className="text-sm text-slate-300 mb-1 block">
                            Select Zodiac Sign
                        </label>

                        <select
                            value={sign}
                            onChange={(e) => setSign(e.target.value)}
                            className="w-full bg-slate-800/70 text-white p-3 rounded-xl outline-none border border-slate-700 hover:border-purple-400 transition"
                        >
                            {SIGNS.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-end">
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl text-white font-semibold hover:opacity-90 transition"
                        >
                            {loading ? "Loading..." : "Get Horoscope"}
                        </button>
                    </div>
                </form>

                {/* Results */}
                {result && (
                    <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-xl">
                        <h2 className="text-3xl font-bold text-blue-300 mb-4">
                            ✨ {result.sign} — {result.date}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {result.predictions.map((prediction, index) => (
                                <div
                                    key={index}
                                    className="p-5 bg-slate-900/60 rounded-xl border border-slate-700 hover:border-purple-500 transition shadow-md"
                                >
                                    <h3 className="text-xl text-purple-300 font-semibold">
                                        {prediction.title}
                                    </h3>

                                    <p className="text-slate-300 mt-2 leading-relaxed">
                                        {prediction.description}
                                    </p>

                                    <span className="inline-block mt-3 text-xs px-3 py-1 bg-purple-700/40 text-purple-200 rounded-full border border-purple-500/40">
                                        {prediction.category}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default HoroscopePage;
