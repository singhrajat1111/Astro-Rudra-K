import { useState } from "react";

export default function CitySearch({
  onSelect
}: {
  onSelect: (data: {
    lat: number;
    lon: number;
    place: string;
    timezone: number;
    dst: number;
  }) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  async function searchCities(q: string) {
    if (q.length < 3) {
      setResults([]);
      return;
    }

    const res = await fetch(
      `http://api.geonames.org/searchJSON?q=${q}&maxRows=10&username=singhrajat1111`
    );

    const data = await res.json();
    if (data.geonames) setResults(data.geonames);
  }

  async function handleSelect(city: any) {
    const placeName = `${city.name}, ${city.countryName}`;

    const tzRes = await fetch(
      `http://api.geonames.org/timezoneJSON?lat=${city.lat}&lng=${city.lng}&username=singhrajat1111`
    );

    const tz = await tzRes.json();

    onSelect({
      lat: parseFloat(city.lat),
      lon: parseFloat(city.lng),
      place: placeName,
      timezone: tz.gmtOffset,
      dst: tz.dstOffset || 0
    });

    setQuery(placeName);
    setResults([]);
  }

  return (
    <div className="relative w-full">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchCities(e.target.value);
        }}
        placeholder="Place of Birth (City)"
        className="w-full p-3 rounded-lg bg-white/20 text-white outline-none"
      />

      {results.length > 0 && (
        <ul className="absolute w-full bg-[#0b0b18] border border-white/10 rounded-xl mt-2 max-h-60 overflow-y-auto shadow-xl z-50">
          {results.map((c, i) => (
            <li
              key={i}
              onClick={() => handleSelect(c)}
              className="p-3 cursor-pointer hover:bg-white/10 border-b border-white/5"
            >
              {c.name}, {c.countryName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
