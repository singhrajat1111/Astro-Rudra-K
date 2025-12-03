import { House } from "../core/Houses";


export interface DoshaResult {
    mangalDosha: boolean;
    mangalReason: string | null;

    kaalSarp: boolean;
    kaalSarpType: string | null;

    pitruDosha: boolean;
    pitruReason: string | null;

    nadiDosha: boolean;

    kemdrumDosha: boolean;
    shakataYoga: boolean;

    grahanDosha: boolean;

    shaniAffliction: boolean;

    summary: string[];
}

export class Dosha {
    /** Check Mangal Dosha based on Mars placement */
    private calculateMangal(houses: House[], planets: any): { flag: boolean, reason: string | null } {
        const marsHouse = planets["Mars"].house;

        const mangalHouses = [1, 2, 4, 7, 8, 12];
        const isDosha = mangalHouses.includes(marsHouse);

        return {
            flag: isDosha,
            reason: isDosha ? `Mars placed in house ${marsHouse} causes Mangal Dosha.` : null
        };
    }

    /** Kaal Sarp: All planets between Rahu & Ketu */
    private calculateKaalSarp(planets: any): { flag: boolean, type: string | null } {
        const rahu = planets["Rahu"].degree;
        const ketu = (rahu + 180) % 360;

        let betweenCount = 0;

        for (const p of Object.keys(planets)) {
            if (p === "Rahu" || p === "Ketu") continue;

            const deg = planets[p].degree;

            if (
                (rahu < ketu && deg > rahu && deg < ketu) ||
                (rahu > ketu && (deg > rahu || deg < ketu))
            ) {
                betweenCount++;
            }
        }

        const allInside = betweenCount === 7;

        let type = null;
        if (allInside) {
            type = "Generic Kaal Sarp";
        }

        return {
            flag: allInside,
            type
        };
    }

    /** Pitru Dosha: Sun/Rahu in 9th, or afflicted Sun */
    private calculatePitru(houses: House[], planets: any): { flag: boolean, reason: string | null } {
        const sunHouse = planets["Sun"].house;
        const rahuHouse = planets["Rahu"].house;

        let flag = false;
        let reason = null;

        if (sunHouse === 9) {
            flag = true;
            reason = "Sun placed in the 9th house indicates Pitru Dosha.";
        }

        if (rahuHouse === 9) {
            flag = true;
            reason = "Rahu in 9th house gives Pitru Dosha.";
        }

        return { flag, reason };
    }

    /** Nadi Dosha: requires matchmaking — placeholder */
    private calculateNadi(): boolean {
        return false; // handled in Matching module
    }

    /** Kemadruma: Moon isolated */
    private calculateKemadruma(planets: any): boolean {
        const moonHouse = planets["Moon"].house;

        const left = moonHouse - 1 === 0 ? 12 : moonHouse - 1;
        const right = moonHouse + 1 === 13 ? 1 : moonHouse + 1;

        const housesWithPlanets = Object.values(planets).map((p: any) => p.house);

        return !(housesWithPlanets.includes(left) || housesWithPlanets.includes(right));
    }

    /** Shakata Yoga: Moon in 6th/8th from Jupiter */
    private calculateShakata(planets: any): boolean {
        const moonHouse = planets["Moon"].house;
        const jupiterHouse = planets["Jupiter"].house;

        const diff = Math.abs(moonHouse - jupiterHouse);
        return diff === 6 || diff === 8;
    }

    /** Grahan Dosha: Sun/Moon with Rahu/Ketu */
    private calculateGrahan(planets: any): boolean {
        const moonKetu = planets["Moon"].house === planets["Ketu"].house;
        const moonRahu = planets["Moon"].house === planets["Rahu"].house;
        const sunKetu = planets["Sun"].house === planets["Ketu"].house;
        const sunRahu = planets["Sun"].house === planets["Rahu"].house;

        return moonKetu || moonRahu || sunKetu || sunRahu;
    }

    /** Shani affliction check */
    private calculateShani(planets: any): boolean {
        const shaniHouse = planets["Saturn"].house;
        const moonHouse = planets["Moon"].house;

        return Math.abs(shaniHouse - moonHouse) === 2;
    }

    /** MAIN ENTRY — Calculate all doshas */
    public calculate(planets: any, ascendantHouse: number): DoshaResult {
        const houses = Object.values(planets);

        const mangal = this.calculateMangal(houses as any, planets);
        const kaalSarp = this.calculateKaalSarp(planets);
        const pitru = this.calculatePitru(houses as any, planets);
        const nadi = this.calculateNadi();
        const kem = this.calculateKemadruma(planets);
        const shakata = this.calculateShakata(planets);
        const grahan = this.calculateGrahan(planets);
        const shaniAff = this.calculateShani(planets);

        const summary: string[] = [];

        if (mangal.flag) summary.push("Mangal Dosha detected.");
        if (kaalSarp.flag) summary.push("Kaal Sarp Dosha detected.");
        if (pitru.flag) summary.push("Pitru Dosha present.");
        if (nadi) summary.push("Nadi Dosha (matchmaking).");
        if (kem) summary.push("Kemadruma Dosha present.");
        if (shakata) summary.push("Shakata Yoga detected.");
        if (grahan) summary.push("Grahan Dosha due to Rahu/Ketu conjunction.");
        if (shaniAff) summary.push("Moon under Shani influence.");

        return {
            mangalDosha: mangal.flag,
            mangalReason: mangal.reason,

            kaalSarp: kaalSarp.flag,
            kaalSarpType: kaalSarp.type,

            pitruDosha: pitru.flag,
            pitruReason: pitru.reason,

            nadiDosha: nadi,

            kemdrumDosha: kem,
            shakataYoga: shakata,

            grahanDosha: grahan,

            shaniAffliction: shaniAff,

            summary
        };
    }
}
