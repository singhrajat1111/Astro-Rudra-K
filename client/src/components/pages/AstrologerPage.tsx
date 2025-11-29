import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  skill: string;
}

const astrologers: Astrologer[] = [
  {
    id: 1,
    name: "Rudra Katyal",
    experience: "2+ Years",
    rating: 4.9,
    specialty: ["Vedic Astrology", "Kundli Reading", "Gemstone Astrology"],
    image: "https://i.ibb.co/SR6n3Sd/astro1.jpg",
    skill: "empty"
  },
  {
    id: 2,
    name: "Ms. Sonakshi",
    experience: "2+ Years",
    rating: 4.8,
    specialty: ["Oracle", "Tarot", "Healing"],
    image: "https://i.ibb.co/HGZVtKw/astro2.jpg",
    skill: "Oracle, Healing, Tarot Reading"
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
      <h1 className="text-4xl font-bold text-center mb-10 mt-10" style  = {{marginTop : "70px"}}>
        Choose Your Astrologer
      </h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {astrologers.map((astro, i) => (
          <AstrologerCard
            key={i}
            {...astro}
            onView={() => onNavigate("booking")}   
            onReach={() => alert("Initiate Chat / Call Feature")}
          />
        ))}
      </div>
    </div>
  );
}
