import React from "react";
import { PlanetGlyphs } from "../glyphs/PlanetGlyphs";

type House = {
  houseNumber: number;
  sign: string;
  degree: number;
  lord?: string;
};

type Planet = {
  name: string;
  longitude: number;
  sign?: string;
  isRetrograde?: boolean;
};

export default function NorthChart({
  houses,
  planets,
  size = 320,
}: {
  houses: House[];
  planets: Record<string, Planet> | any;
  size?: number;
}) {
  // Position map for North Indian chart (percent values)
  // These were chosen to match the visual diamond north chart layout.
  const posTop: Record<number, string> = {
    1: "10%",
    2: "10%",
    3: "25%",
    4: "50%",
    5: "75%",
    6: "75%",
    7: "50%",
    8: "25%",
    9: "10%",
    10: "10%",
    11: "25%",
    12: "50%",
  };

  const posLeft: Record<number, string> = {
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

  // Build quick lookup of planets by house number if your backend provides planet.houseNumber
  // Otherwise fallback: try to compute by comparing planet.longitude and house ascendant if available.
  // For V1 we expect backend to either return planet.houseNumber or houseNumbers in houses.
  const planetsByHouse: Record<number, string[]> = {};
  Object.keys(planets || {}).forEach((k) => {
    const p = planets[k];
    const hnum = (p.houseNumber ?? p.house) as number | undefined;
    if (hnum && Number.isFinite(hnum)) {
      planetsByHouse[hnum] = planetsByHouse[hnum] || [];
      planetsByHouse[hnum].push(k);
    }
  });

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size, minWidth: 240 }}
      aria-label="North Indian chart"
    >
      {/* Outer diamond frame */}
      <div
        className="absolute inset-0 border-2 rounded-md"
        style={{
          transform: "rotate(45deg)",
          borderColor: "rgba(34,211,238,0.15)",
          boxShadow: "0 6px 30px rgba(0,0,0,0.6)",
        }}
      />

      {/* House cells */}
      {houses.map((h) => {
        const top = posTop[h.houseNumber] || "50%";
        const left = posLeft[h.houseNumber] || "50%";

        return (
          <div
            key={h.houseNumber}
            className="absolute text-center select-none"
            style={{
              top,
              left,
              transform: "translate(-50%, -50%)",
              width: "28%",
              maxWidth: 120,
            }}
            aria-hidden={false}
            role="group"
            aria-label={`House ${h.houseNumber}`}
          >
            <div
              className="p-2 rounded-lg"
              style={{
                background: "linear-gradient(180deg, rgba(4,6,23,0.6), rgba(2,6,18,0.4))",
                border: "1px solid rgba(255,255,255,0.04)",
                minHeight: 40,
              }}
            >
              <div className="text-cyan-300 font-semibold">{h.houseNumber}</div>
              <div className="text-xs text-white/80">{h.sign}</div>

              {/* Planets for this house */}
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {(planetsByHouse[h.houseNumber] || []).map((pname) => {
                  const p = planets[pname];
                  const glyph = PlanetGlyphs[pname];
                  return (
                    <div
                      key={pname}
                      className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.03)",
                      }}
                    >
                      <span className={glyph?.color} aria-hidden>
                        {glyph?.symbol}
                      </span>
                      <span className="text-white/90">{pname}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
