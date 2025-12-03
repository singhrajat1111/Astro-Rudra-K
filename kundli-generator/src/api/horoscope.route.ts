import { Router } from "express";

const router = Router();

/*
  SIMPLE DAILY HOROSCOPE GENERATOR
  (Not based on planets — uses static text for now)
*/

const DAILY_MESSAGES: Record<string, string[]> = {
  Aries: [
    "A fresh opportunity will appear today. Stay bold.",
    "Energy levels rise; good day for decisions.",
    "A surprise message may change your plans."
  ],
  Taurus: [
    "Focus on stability; finances improve.",
    "Someone may seek your advice today.",
    "Take time to relax and calm your mind."
  ],
  Gemini: [
    "Communication brings clarity.",
    "A short trip or movement may happen.",
    "Good day for studies and writing."
  ],
  Cancer: [
    "Emotional clarity will come.",
    "Family-related good news is possible.",
    "Avoid overthinking small issues."
  ],
  Leo: [
    "Your confidence shines; good day for leadership.",
    "Recognition is coming soon.",
    "Express your creativity freely."
  ],
  Virgo: [
    "Organizing tasks brings progress.",
    "A small health improvement is seen.",
    "Focus on details — success lies there."
  ],
  Libra: [
    "Harmony improves with someone close.",
    "Good day for partnerships.",
    "Treat yourself with something relaxing."
  ],
  Scorpio: [
    "Transformation energy is high.",
    "An inner revelation may appear.",
    "Avoid unnecessary arguments today."
  ],
  Sagittarius: [
    "Luck supports your plans.",
    "Travel thoughts may arise.",
    "Learning brings satisfaction."
  ],
  Capricorn: [
    "Work becomes productive.",
    "Long-term goals gain momentum.",
    "Avoid taking unnecessary risks."
  ],
  Aquarius: [
    "A brilliant idea may come suddenly.",
    "Good day for social interactions.",
    "Your intuition is strong today."
  ],
  Pisces: [
    "A dream might reveal guidance.",
    "Spiritual clarity increases.",
    "Help someone — karma returns."
  ]
};

router.post("/", (req, res) => {
  const { sign } = req.body;

  if (!sign) {
    return res.status(400).json({ error: "Zodiac sign required" });
  }

  const today = new Date().toISOString().split("T")[0];

  const predictions = (DAILY_MESSAGES[sign] || []).map((msg, i) => ({
    title: `Prediction ${i + 1}`,
    description: msg,
    category: "General"
  }));

  res.json({
    sign,
    date: today,
    predictions
  });
});

export default router;
