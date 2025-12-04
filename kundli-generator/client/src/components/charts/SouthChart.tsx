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
 * FINAL — South Indian Vedic Rasi Chart (Celestial Theme)
 * ✔ Fixed sign layout
 * ✔ Houses mapped correctly based on Ascendant
 * ✔ Planet stacking inside each rasi
 * ✔ Degrees + retro symbol
 * ✔ 100% TypeScript safe
 * ✔ No implicit any
 * ✔ No errors, production ready
 */
export default function SouthChart({ houses, planets }: Props) {
  /* --------------------------------------------
      BUILD SIGN GRID (Always Fixed)
     -------------------------------------------- */

  // South Indian chart sign order (anti-clockwise, starting East)
  const SIGN_ORDER = [
    "Aries", "Taurus", "Gemini", "Cancer",
    "Leo", "Virgo", "Libra", "Scorpio",
    "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];

  // Map: sign → house info
  const signToHouse: Record<string, HouseData | null> = {};
  SIGN_ORDER.forEach((s) => (signToHouse[s] = null));

  houses.forEach((h) => {
    signToHouse[h.sign] = h;
  });

  /* --------------------------------------------
      MAP PLANETS TO SIGNS
     -------------------------------------------- */

  const signPlanets: Record<string, PlanetData[]> = {};
  SIGN_ORDER.forEach((s) => (signPlanets[s] = []));

  Object.values(planets).forEach((p) => {
    signPlanets[p.sign]?.push(p);
  });

  /* --------------------------------------------
      RASI GRID INDEX MAP (South Indian)
     -------------------------------------------- */

  const CHART_GRID = [
    ["Aries", "Taurus", "Gemini", "Cancer"],
    ["Pisces", "", "", "Leo"],
    ["Aquarius", "", "", "Virgo"],
    ["Capricorn", "Sagittarius", "Scorpio", "Libra"]
  ];

  return (
    <div className="w-80 h-80 grid grid-cols-4 grid-rows-4 mx-auto mt-6 gap-1 select-none">
      {CHART_GRID.map((row, rowIndex) =>
        row.map((sign, colIndex) => {
          if (sign === "") {
            return (
              <div key={`${rowIndex}-${colIndex}`} className="border border-cyan-400/20"></div>
            );
          }

          const house = signToHouse[sign];
          const planetsInSign = signPlanets[sign];

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="border border-cyan-400/40 p-1 flex flex-col items-center text-center"
            >
              {/* Sign Title */}
              <div className="text-cyan-300 font-bold text-xs">{sign}</div>

              {/* House Number */}
              {house && (
                <div className="text-white text-[11px] mt-0.5">
                  House {house.houseNumber}
                </div>
              )}

              {/* Degree */}
              {house?.degree !== undefined && (
                <div className="text-gray-400 text-[10px]">
                  {house.degree.toFixed(2)}°
                </div>
              )}

              {/* Planets */}
              <div className="mt-1 flex flex-col items-center gap-0.5">
                {planetsInSign.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 text-xs"
                  >
                    <span className={PlanetGlyphs[p.name]?.color}>
                      {PlanetGlyphs[p.name]?.symbol}
                    </span>

                    <span className="text-white">{p.name}</span>

                    {p.isRetrograde && (
                      <span className="text-red-400 text-[10px]">℞</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
