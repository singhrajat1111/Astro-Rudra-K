import { useState } from "react";
import DailyPanchang from "../components/panchang/DailyPanchang";
import DatePanchang from "../components/panchang/DatePanchang";
import PanchangTabs from "../components/panchang/PanchangTabs";

export default function PanchangPage() {
  const [tab, setTab] = useState<"daily" | "date">("daily");

  return (
    <div className="min-h-screen w-full bg-[#050510] text-white p-6 select-none flex flex-col items-center">
      
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,150,255,0.4)]">
        🕉️ Panchang
      </h1>

      <div className="w-full max-w-3xl">
        <PanchangTabs active={tab} onChange={setTab} />

        <div className="mt-6">
          {tab === "daily" && <DailyPanchang />}
          {tab === "date" && <DatePanchang />}
        </div>
      </div>
      
    </div>
  );
}
