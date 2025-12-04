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

export default function SouthChart({
  houses,
  planets,
  size = 320,
}: {
  houses: House[];
  planets: Record<string, Planet> | any;
  size?: number;
}) {
  // South Indian chart is a simple grid 3x4. Map house -> grid positions (row/col percent)
  const gridPos: Record<number, { top: string; left: string }> = {
    1: { top: "10%", left: "10%" },
    2: { top: "10%", left: "40%" },
    3: { top: "10%", left: "70%" },
    4: { top: "35%", left: "10%" },
    5: { top: "35%", left: "40%" },
    6: { top: "35%", left: "70%" },
    7: { top: "60%", left: "10%" },
    8: { top: "60%", left: "40%" },
    9: { top: "60%", left: "70%" },
    10: { top: "85%", left: "10%" },
    11: { top: "85%", left: "40%" },
    12: { top: "85%", left: "70%" },
  };

  // Build planets by house as in NorthChart
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
      aria-label="South Indian chart"
    >
      {/* Outer rounded frame */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          border: "1px solid rgba(255,255,255,0.04)",
          background:
            "linear-gradient(180deg, rgba(2,6,18,0.6), rgba(1,3,10,0.4))",
          boxShadow: "0 6px 30px rgba(0,0,0,0.6)",
        }}
      />

      {/* Houses cells */}
      {houses.map((h) => {
        const pos = gridPos[h.houseNumber] || { top: "50%", left: "50%" };
        return (
          <div
            key={h.houseNumber}
            className="absolute text-left"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
              width: "28%",
              maxWidth: 120,
            }}
            role="group"
            aria-label={`House ${h.houseNumber}`}
          >
            <div
              className="p-3 rounded-lg"
              style={{
                background: "rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.03)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="text-cyan-300 font-semibold">{h.houseNumber}</div>
                <div className="text-xs text-white/80">{h.sign}</div>
              </div>

              <div className="mt-2 flex flex-wrap gap-1">
                {(planetsByHouse[h.houseNumber] || []).map((pname) => {
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
