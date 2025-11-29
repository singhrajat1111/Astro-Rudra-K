import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Astrologer {
  id: number;
  name: string;
  experience: string;
  rating: number;
  specialty: string[];
  image: string;
}

const astrologers: Astrologer[] = [
  {
    id: 1,
    name: "Rudra Katyal",
    experience: "2+ Years",
    rating: 4.9,
    specialty: ["Vedic Astrology", "Kundli Reading", "Gemstone Astrology"],
    image: "https://i.ibb.co/SR6n3Sd/astro1.jpg",
  },
  {
    id: 2,
    name: "Ms. Sonakshi",
    experience: "2+ Years",
    rating: 4.8,
    specialty: ["Oracle", "Tarot", "Healing"],
    image: "https://i.ibb.co/HGZVtKw/astro2.jpg",
  },
//   {
//     id: 3,
//     name: "Isha Verma",
//     experience: "3+ Years",
//     rating: 4.7,
//     specialty: ["Tarot Reading", "Love Guidance", "Horoscope Analysis"],
//     image: "https://i.ibb.co/yWp7Ny8/astro3.jpg",
//   },
];

export default function Astrologers() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        Choose Your Astrologer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {astrologers.map((astro) => (
          <Card
            key={astro.id}
            onClick={() => setSelectedId(astro.id)}
            className={`p-4 cursor-pointer rounded-2xl transition border 
              ${
                selectedId === astro.id
                  ? "border-purple-500 shadow-purple-700 shadow-md"
                  : "border-gray-700"
              } bg-[#0d0d0d] hover:shadow-lg hover:shadow-purple-900/30`}
          >
            <div className="flex flex-col items-center">
              <img
                src={astro.image}
                alt={astro.name}
                className="w-32 h-32 rounded-full object-cover border-2 border-purple-600"
              />

              <h2 className="mt-4 text-2xl font-semibold">{astro.name}</h2>

              <p className="text-sm text-gray-400 mt-1">{astro.experience}</p>

              <div className="flex items-center gap-1 mt-2">
                <Star size={18} className="text-yellow-400" />
                <span>{astro.rating}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {astro.specialty.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-purple-700/30 border border-purple-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                className={`mt-4 w-full ${
                  selectedId === astro.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {selectedId === astro.id ? "Selected" : "Select Astrologer"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
