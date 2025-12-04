interface Props {
  active: "daily" | "date";
  onChange: (tab: "daily" | "date") => void;
}

export default function PanchangTabs({ active, onChange }: Props) {
  return (
    <div className="flex items-center justify-center gap-4 bg-white/10 p-2 rounded-xl border border-white/20 backdrop-blur-xl">

      {/* Daily Panchang */}
      <button
        onClick={() => onChange("daily")}
        className={`px-5 py-2 rounded-lg font-semibold transition-all
          ${active === "daily"
            ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
            : "bg-white/10 text-gray-300 hover:bg-white/20"
          }
        `}
      >
        Daily
      </button>

      {/* Date-based Panchang */}
      <button
        onClick={() => onChange("date")}
        className={`px-5 py-2 rounded-lg font-semibold transition-all
          ${active === "date"
            ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg"
            : "bg-white/10 text-gray-300 hover:bg-white/20"
          }
        `}
      >
        By Date
      </button>
    </div>
  );
}
