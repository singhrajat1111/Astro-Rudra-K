export default function PanchangTabs({
  active,
  onChange
}: {
  active: "daily" | "date";
  onChange: (tab: "daily" | "date") => void;
}) {
  return (
    <div className="flex gap-4 mb-6 bg-white/10 px-4 py-2 rounded-xl border border-white/20 backdrop-blur">
      <button
        onClick={() => onChange("daily")}
        className={`px-4 py-2 rounded-lg font-semibold ${
          active === "daily"
            ? "bg-cyan-500 text-black"
            : "text-cyan-300 hover:text-white"
        }`}
      >
        Today’s Panchang
      </button>

      <button
        onClick={() => onChange("date")}
        className={`px-4 py-2 rounded-lg font-semibold ${
          active === "date"
            ? "bg-cyan-500 text-black"
            : "text-cyan-300 hover:text-white"
        }`}
      >
        Panchang by Date
      </button>
    </div>
  );
}
