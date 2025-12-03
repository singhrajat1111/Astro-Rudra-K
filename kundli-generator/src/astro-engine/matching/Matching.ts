import { getNakshatra, NakshatraResult } from "../core/Nakshatra";
import { ZodiacSign } from "../core/Planets";

export interface MatchingResult {
    totalScore: number;
    maxScore: number;
    percentage: number;

    varnaScore: number;
    vashyaScore: number;
    taraScore: number;
    yoniScore: number;
    maitriScore: number;
    ganaScore: number;
    bhakootScore: number;
    nadiScore: number;

    mangalMatching: boolean;
    notes: string[];
}

export class Matching {

    /** ------------ VARNA MAP (1 POINT) ------------ */
    private VARNA_MAP: Record<ZodiacSign, number> = {
        Aries: 1, Leo: 1, Sagittarius: 1,
        Taurus: 2, Virgo: 2, Capricorn: 2,
        Gemini: 3, Libra: 3, Aquarius: 3,
        Cancer: 0, Scorpio: 0, Pisces: 0
    };

    /** ------------ VASHYA GROUPS (2 POINTS) ------------ */
    private VASHYA_GROUPS: Record<string, ZodiacSign[]> = {
        Quadruped: ["Aries", "Taurus", "Leo"],
        Human: ["Gemini", "Virgo", "Libra", "Aquarius"],
        Water: ["Cancer", "Scorpio", "Pisces"],
        Wild: ["Sagittarius"],
        Insect: ["Capricorn"]
    };

    /** ------------ YONI (4 POINTS) ------------ */
    private YONI_MAP: Record<ZodiacSign, string> = {
        Aries: "Horse", Taurus: "Cow", Gemini: "Goat",
        Cancer: "Cat", Leo: "Rat", Virgo: "Elephant",
        Libra: "Wolf", Scorpio: "Serpent", Sagittarius: "Monkey",
        Capricorn: "Panther", Aquarius: "Buffalo", Pisces: "Fish"
    };

    /** ------------ GANA (6 POINTS) ------------ */
    private GANA_MAP: Record<string, "Deva" | "Manushya" | "Rakshasa"> = {
        Ashwini: "Deva", Bharani: "Manushya", Krittika: "Rakshasa",
        Rohini: "Manushya", Mrigashira: "Deva", Ardra: "Manushya",
        Punarvasu: "Deva", Pushya: "Deva", Ashlesha: "Rakshasa",
        Magha: "Rakshasa", PurvaPhalguni: "Manushya", UttaraPhalguni: "Manushya",
        Hasta: "Deva", Chitra: "Rakshasa", Swati: "Deva",
        Vishakha: "Rakshasa", Anuradha: "Deva", Jyeshtha: "Rakshasa",
        Mula: "Rakshasa", PurvaAshadha: "Manushya", UttaraAshadha: "Manushya",
        Shravana: "Deva", Dhanishta: "Rakshasa", Shatabhisha: "Rakshasa",
        PurvaBhadrapada: "Manushya", UttaraBhadrapada: "Manushya", Revati: "Deva"
    };

    /** ------------ NADI GROUPS (8 POINTS) ------------ */
    private NADI: Record<"Deva" | "Manushya" | "Rakshasa", string[]> = {
        Deva: [
            "Ashwini", "Mrigashira", "Punarvasu", "Pushya", "Hasta",
            "Swati", "Anuradha", "Shravana", "Revati"
        ],
        Manushya: [
            "Bharani", "Krittika", "Rohini", "Uttara Phalguni",
            "Purva Phalguni", "Purva Ashadha", "Uttara Ashadha", "Dhanishta"
        ],
        Rakshasa: [
            "Magha", "Chitra", "Vishakha", "Jyeshtha", "Mula",
            "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada"
        ]
    };

    /** Determine Nadi group */
    private getNadiGroup(nak: string): "Deva" | "Manushya" | "Rakshasa" {
        const keys: Array<"Deva" | "Manushya" | "Rakshasa"> = ["Deva", "Manushya", "Rakshasa"];

        for (const key of keys) {
            if (this.NADI[key].includes(nak)) return key;
        }

        return "Manushya"; // fallback
    }

    /**
     * =========================
     *      MAIN ENGINE
     * =========================
     */
    public calculate(boyMoonLong: number, girlMoonLong: number): MatchingResult {

        const notes: string[] = [];

        /** Get Nakshatra details */
        const boyNak = getNakshatra(boyMoonLong);
        const girlNak = getNakshatra(girlMoonLong);

        /** Get zodiac signs from longitude */
        const boySign = this.getSignFromLongitude(boyMoonLong);
        const girlSign = this.getSignFromLongitude(girlMoonLong);

        /** 1–8 Koota scores */
        const varnaScore = this.getVarnaScore(boySign, girlSign);
        const vashyaScore = this.getVashyaScore(boySign, girlSign);
        const taraScore = this.getTaraScore(boyNak.nakshatra.index, girlNak.nakshatra.index);
        const yoniScore = this.getYoniScore(boySign, girlSign);
        const maitriScore = this.getGrahaMaitriScore(boySign, girlSign);
        const ganaScore = this.getGanaScore(boyNak.nakshatra.name, girlNak.nakshatra.name);
        const bhakootScore = this.getBhakootScore(boySign, girlSign);
        const nadiScore = this.getNadiScore(boyNak.nakshatra.name, girlNak.nakshatra.name);

        const total =
            varnaScore + vashyaScore + taraScore + yoniScore +
            maitriScore + ganaScore + bhakootScore + nadiScore;

        notes.push(`Varna: ${varnaScore}`);
        notes.push(`Vashya: ${vashyaScore}`);
        notes.push(`Tara: ${taraScore}`);
        notes.push(`Yoni: ${yoniScore}`);
        notes.push(`Gana: ${ganaScore}`);
        notes.push(`Bhakoot: ${bhakootScore}`);
        notes.push(`Nadi: ${nadiScore}`);

        return {
            totalScore: total,
            maxScore: 36,
            percentage: (total / 36) * 100,

            varnaScore,
            vashyaScore,
            taraScore,
            yoniScore,
            maitriScore,
            ganaScore,
            bhakootScore,
            nadiScore,

            mangalMatching: true,

            notes
        };
    }

    /** Convert longitude → zodiac sign */
    private getSignFromLongitude(long: number): ZodiacSign {
        const signs: ZodiacSign[] = [
            "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
            "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
        ];
        return signs[Math.floor((long % 360) / 30)];
    }

    /** ========== KOOTA RULES ========== */

    private getVarnaScore(boy: ZodiacSign, girl: ZodiacSign): number {
        return this.VARNA_MAP[boy] >= this.VARNA_MAP[girl] ? 1 : 0;
    }

    private getVashyaScore(boy: ZodiacSign, girl: ZodiacSign): number {
        const g1 = this.groupOf(boy);
        const g2 = this.groupOf(girl);
        return g1 === g2 ? 2 : 1;
    }

    private groupOf(sign: ZodiacSign): string | null {
        return Object.keys(this.VASHYA_GROUPS).find(group =>
            this.VASHYA_GROUPS[group].includes(sign)
        ) || null;
    }

    private getTaraScore(boyIndex: number, girlIndex: number): number {
        const diff = Math.abs(boyIndex - girlIndex);
        return diff % 9 === 0 ? 3 : 2;
    }

    private getYoniScore(boy: ZodiacSign, girl: ZodiacSign): number {
        return this.YONI_MAP[boy] === this.YONI_MAP[girl] ? 4 : 2;
    }

    private getGrahaMaitriScore(boy: ZodiacSign, girl: ZodiacSign): number {
        const RULER: Record<ZodiacSign, string> = {
            Aries: "Mars", Taurus: "Venus", Gemini: "Mercury", Cancer: "Moon",
            Leo: "Sun", Virgo: "Mercury", Libra: "Venus", Scorpio: "Mars",
            Sagittarius: "Jupiter", Capricorn: "Saturn", Aquarius: "Saturn", Pisces: "Jupiter"
        };
        return RULER[boy] === RULER[girl] ? 5 : 3;
    }

    private getGanaScore(boy: string, girl: string): number {
        return this.GANA_MAP[boy] === this.GANA_MAP[girl] ? 6 : 3;
    }

    private getBhakootScore(boy: ZodiacSign, girl: ZodiacSign): number {
        const b = this.signIndex(boy);
        const g = this.signIndex(girl);
        const diff = Math.abs(b - g);
        return diff === 6 || diff === 8 ? 0 : 7;
    }

    private signIndex(sign: ZodiacSign): number {
        return [
            "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
            "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
        ].indexOf(sign) + 1;
    }

    private getNadiScore(boyNak: string, girlNak: string): number {
        const boy = this.getNadiGroup(boyNak);
        const girl = this.getNadiGroup(girlNak);
        return boy === girl ? 0 : 8;
    }
}
