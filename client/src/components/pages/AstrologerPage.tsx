import { useState } from "react";
import { Star } from "lucide-react";
import AstrologerCard from "../ui/AstrologerCard";
import BookingPage from "./BookingPage";

interface Astrologer {
  id: number;
  name: string;
  experience: string;
  rating: number;
  specialty: string[];
  image: string;
  skills: string[];
}

const astrologers: Astrologer[] = [
  {
    id: 1,
    name: "Rudra Katyal",
    experience: "2+ Years",
    rating: 4.9,
    specialty: ["Vedic Astrology", "Kundli Reading", "Gemstone Astrology"],
    image: "https://i.ibb.co/SR6n3Sd/astro1.jpg",
    skills: ["Oracle", "Healing", "Tarot Reading"],
  },
  {
    id: 2,
    name: "Ms. Sonakshi",
    experience: "2+ Years",
    rating: 4.8,
    specialty: ["Oracle", "Tarot", "Healing"],
    image: "https://i.ibb.co/HGZVtKw/astro2.jpg",
    skills: ["Oracle", "Healing", "Tarot Reading"],
  },
];

export default function Astrologers() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <h1
        className="text-4xl font-bold text-center mb-10 mt-10"
        style={{ marginTop: "70px" }}
      >
        Choose Your Astrologer
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {astrologers.map((astro) => (
          <div key={astro.id}>
            <AstrologerCard
              {...astro}
              onView={() => setSelectedId(astro.id)}
              onReach={() => alert("Initiate Chat / Call Feature")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
