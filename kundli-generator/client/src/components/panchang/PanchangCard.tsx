export function PanchangCard({
  data,
  date,
  place
}: {
  data: any;
  date: string;
  place: string;
}) {
  return (
    <div className="bg-[#0b0b18] p-6 rounded-2xl border border-white/10 shadow-xl space-y-3">
      <h2 className="text-2xl font-bold text-cyan-300">
        📅 Panchang for {place} — {date}
      </h2>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
        <p><strong>Tithi:</strong> {data.tithi} ({data.paksha})</p>
        <p><strong>Nakshatra:</strong> {data.nakshatra} (Pada {data.nakshatraPada})</p>
        <p><strong>Yoga:</strong> {data.yoga}</p>
        <p><strong>Karana:</strong> {data.karana}</p>
        <p><strong>Sunrise:</strong> {data.sunrise}</p>
        <p><strong>Sunset:</strong> {data.sunset}</p>
        <p><strong>Moon Phase:</strong> {data.moonPhase}</p>
        <p><strong>Weekday:</strong> {data.weekday}</p>
      </div>
    </div>
  );
}
