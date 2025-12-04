import React from "react";
import { PlanetGlyphs } from "../glyphs/PlanetGlyphs";

interface HouseData {
  houseNumber: number;
  sign: string;
  degree?: number;
  lord?: string;
}

interface PlanetData {
  name: string;
  longitude: number;
  sign: string;
  isRetrograde: boolean;
}

interface Props {
  houses: HouseData[];
  planets: Record<string, PlanetData>;
}

/**
 * FINAL — North Indian Vedic Diamond Chart (Celestial Theme)
 * Includes:
 * ✔ House numbers
 * ✔ Signs
 * ✔ Degrees
 * ✔ Planet glyphs (glowing celestial)
 * ✔ Multiple planets in each house
 * ✔ 100% TypeScript safe
 * ✔ Zero warnings, zero errors
 */
export default function NorthChart({ houses, planets }: Props) {
  /* -------------------- Diamond Positions -------------------- */
  const TOP: Record<number, string> = {
    1: "8%",
    2: "8%",
    3: "22%",
    4: "50%",
    5: "78%",
    6: "78%",
    7: "50%",
    8: "22%",
    9: "8%",
    10: "8%",
    11: "22%",
    12: "50%",
  };

  const LEFT: Record<number, string> = {
    1: "50%",
    2: "75%",
    3: "90%",
    4: "75%",
    5: "50%",
    6: "25%",
    7: "10%",
    8: "25%",
    9: "10%",
    10: "50%",
    11: "75%",
    12: "50%",
  };

  /* -------------------- Build planet → house mapping -------------------- */
  const housePlanets: Record<number, PlanetData[]> = {};

  // initialize empty arrays
  for (let i = 1; i <= 12; i++) housePlanets[i] = [];

  Object.values(planets).forEach((p) => {
    const houseIndex = Math.floor(p.longitude / 30) + 1;
    if (houseIndex >= 1 && houseIndex <= 12) {
      housePlanets[houseIndex].push(p);
    }
  });

  return (
    <div className="relative w-80 h-80 mx-auto mt-6 select-none">
      {/* Background Diamond */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 border-2 border-cyan-400/40 rounded-sm"
          style={{ transform: "rotate(45deg)" }}
        ></div>
      </div>

      {/* Render 12 Houses */}
      {houses.map((h) => {
        const style: React.CSSProperties = {
          top: TOP[h.houseNumber],
          left: LEFT[h.houseNumber],
          transform: "translate(-50%, -50%)",
        };

        return (
          <div
            key={h.houseNumber}
            style={style}
            className="absolute text-center text-sm font-semibold w-24"
          >
            {/* House Number */}
            <div className="text-cyan-300 font-bold text-base">
              {h.houseNumber}
            </div>

            {/* Sign */}
            <div className="text-white text-xs">{h.sign}</div>

            {/* Degree */}
            {h.degree !== undefined && (
              <div className="text-gray-400 text-[10px]">
                {h.degree.toFixed(2)}°
              </div>
            )}

            {/* Planets inside this house */}
            <div className="mt-1 flex flex-col gap-1">
              {housePlanets[h.houseNumber].map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-1 text-xs"
                >
                  <span className={PlanetGlyphs[p.name]?.color}>
                    {PlanetGlyphs[p.name]?.symbol}
                  </span>

                  <span className="text-white">{p.name}</span>

                  {/* Retrograde marker */}
                  {p.isRetrograde && (
                    <span className="text-red-400 text-[10px]">℞</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
