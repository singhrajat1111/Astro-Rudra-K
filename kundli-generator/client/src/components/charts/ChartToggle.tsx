export default function ChartToggle({
  active,
  onChange
}: {
  active: "details" | "charts";
  onChange: (v: "details" | "charts") => void;
}) {
  return (
    <div className="flex gap-4 mt-6 mb-4">
      <button
        onClick={() => onChange("details")}
        className={`px-5 py-2 rounded-xl text-lg font-semibold transition-all ${
          active === "details"
            ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            : "bg-white/10 text-white"
        }`}
      >
        Details
      </button>

      <button
        onClick={() => onChange("charts")}
        className={`px-5 py-2 rounded-xl text-lg font-semibold transition-all ${
          active === "charts"
            ? "bg-cyan-500 text-black shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            : "bg-white/10 text-white"
        }`}
      >
        Charts
      </button>
    </div>
  );
}
