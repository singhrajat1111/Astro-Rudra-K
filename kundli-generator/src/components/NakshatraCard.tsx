export default function NakshatraCard({ planet, info }: any) {
  if (!info || !info.nakshatra) return null;

  const n = info.nakshatra;

  return (
    <div className="bg-[#0d0d16] border border-[#1f2a38] p-5 rounded-xl mb-6 shadow-lg">
      <h3 className="text-xl font-semibold text-cyan-300 mb-2">
        {planet} Nakshatra — (Pada {info.pada})
      </h3>

      <p><strong>Name:</strong> {n.name} ({n.sanskrit})</p>
      <p><strong>Ruler:</strong> {n.ruler}</p>
      <p><strong>Deity:</strong> {n.deity}</p>
      <p><strong>Symbol:</strong> {n.symbol}</p>
      <p><strong>Nature:</strong> {n.nature}</p>

      <p className="mt-3 text-sm text-gray-400">
        Index: {n.index}  
        <br />
        Degrees Remaining: {n.endDegree - n.startDegree}°
      </p>
    </div>
  );
}
