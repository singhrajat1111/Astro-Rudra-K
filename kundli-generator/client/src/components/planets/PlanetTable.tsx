import React from "react";
import { PlanetGlyphs } from "../glyphs/PlanetGlyphs";

interface PlanetData {
  name: string;
  longitude: number;
  sign: string;
  isRetrograde: boolean;
}

export default function PlanetTable({
  planets,
}: {
  planets: Record<string, PlanetData>;
}) {
  if (!planets) return null;

  const formatDegree = (deg: number) => {
    const d = Math.floor(deg);
    const m = Math.floor((deg - d) * 60);
    return `${d}° ${m}′`;
  };

  return (
    <div className="bg-[#0b0b18] p-6 rounded-2xl border border-white/10 shadow-xl mb-6">
      <h3 className="text-xl font-bold text-cyan-300 mb-4">🪐 Planetary Details</h3>

      <table className="w-full text-sm">
        <thead className="text-cyan-300 border-b border-white/10">
          <tr>
            <th className="py-2 text-left">Planet</th>
            <th className="text-left">Glyph</th>
            <th className="text-left">Sign</th>
            <th className="text-left">Longitude</th>
            <th className="text-left">Retro?</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(planets).map(([key, p]) => {
            const glyph = PlanetGlyphs[p.name];

            return (
              <tr key={key} className="border-b border-white/5">
                {/* Planet Name */}
                <td className="py-2 font-semibold text-white">{p.name}</td>

                {/* Glyph */}
                <td className="text-lg">
                  <span className={glyph?.color}>{glyph?.symbol}</span>
                </td>

                {/* Sign Badge */}
                <td>
                  <span className="px-2 py-[2px] rounded-md text-xs text-black bg-cyan-300 font-bold">
                    {p.sign}
                  </span>
                </td>

                {/* Degrees */}
                <td className="text-gray-300">
                  {formatDegree(p.longitude)}
                </td>

                {/* Retrograde */}
                <td>
                  {p.isRetrograde ? (
                    <span className="text-red-400 font-bold text-lg">℞</span>
                  ) : (
                    <span className="text-green-400 text-sm">✔</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
