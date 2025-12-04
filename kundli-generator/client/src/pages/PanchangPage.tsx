import { useState } from "react";
import PanchangTabs from "../components/panchang/PanchangTabs";
import DailyPanchang from "../components/panchang/DailyPanchang";
import DatePanchang from "../components/panchang/DatePanchang";

export default function PanchangPage() {
  const [tab, setTab] = useState<"daily" | "date">("daily");

  return (
    <div className="min-h-screen bg-[#050510] text-white p-6 select-none">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
        🌞 Panchang
      </h1>

      <PanchangTabs active={tab} onChange={setTab} />

      {tab === "daily" && <DailyPanchang />}
      {tab === "date" && <DatePanchang />}
    </div>
  );
}
