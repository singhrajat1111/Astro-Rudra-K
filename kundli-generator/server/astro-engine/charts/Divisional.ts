import { ZodiacSign, SIGNS } from "../core/Houses";

export interface DivisionalChartData {
    D1: Record<string, ZodiacSign>;
    D9: Record<string, ZodiacSign>;
    D10: Record<string, ZodiacSign>;
    D3: Record<string, ZodiacSign>;
    D7: Record<string, ZodiacSign>;
    allCharts: Record<string, Record<string, ZodiacSign>>;
}

export class Divisional {

    /** Convert absolute degree (0–360) to zodiac sign index (0–11) */
    private getSignIndex(longitude: number): number {
        return Math.floor(longitude / 30) % 12;
    }

    /** Base function: Convert longitude to sign in any divisional chart */
    private getVargaSign(
        longitude: number,
        varga: number
    ): ZodiacSign {

        longitude = (longitude + 360) % 360;

        const signIndex = Math.floor(longitude / 30);          // base sign
        const signDegree = longitude % 30;                     // 0–29.999
        const partSize = 30 / varga;                           // segment size
        const vargaIndex = Math.floor(signDegree / partSize);  // which part

        const finalIndex = (signIndex * varga + vargaIndex) % 12;

        return SIGNS[finalIndex];
    }

    /** Shortcut for each Varga */
    private computeD9(longitude: number): ZodiacSign {
        return this.getVargaSign(longitude, 9);
    }

    private computeD10(longitude: number): ZodiacSign {
        return this.getVargaSign(longitude, 10);
    }

    private computeD3(longitude: number): ZodiacSign {
        return this.getVargaSign(longitude, 3);
    }

    private computeD7(longitude: number): ZodiacSign {
        return this.getVargaSign(longitude, 7);
    }

    /** Compute multiple vargas */
    public calculate(planetPositions: Record<string, { longitude: number }>): DivisionalChartData {

        const D1: Record<string, ZodiacSign> = {};
        const D3: Record<string, ZodiacSign> = {};
        const D7: Record<string, ZodiacSign> = {};
        const D9: Record<string, ZodiacSign> = {};
        const D10: Record<string, ZodiacSign> = {};

        const allCharts: Record<string, Record<string, ZodiacSign>> = {
            D1: D1,
            D3: D3,
            D7: D7,
            D9: D9,
            D10: D10
        };

        for (const planet of Object.keys(planetPositions)) {
            const lon = planetPositions[planet].longitude;

            D1[planet] = SIGNS[this.getSignIndex(lon)];
            D3[planet] = this.computeD3(lon);
            D7[planet] = this.computeD7(lon);
            D9[planet] = this.computeD9(lon);
            D10[planet] = this.computeD10(lon);
        }

        return {
            D1, D3, D7, D9, D10, allCharts
        };
    }
}
