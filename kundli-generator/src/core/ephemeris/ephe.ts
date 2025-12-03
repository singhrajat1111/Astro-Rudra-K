export interface EphemerisStatus {
    initialized: boolean;
    mode: "frontend-astronomy";
    message: string;
}

export const Ephe = {
    /**
     * Dummy init function kept for compatibility.
     * Real Swiss Ephemeris initialization is removed.
     */
    init(): EphemerisStatus {
        return {
            initialized: true,
            mode: "frontend-astronomy",
            message:
                "Swiss Ephemeris is disabled in frontend. Using astronomy-engine only."
        };
    },

    /**
     * FRONTEND-SAFE note:
     * You cannot perform swe_calc_ut or Swiss ephemeris functions here.
     * Use AstronomyWrapper.getPlanetPosition() instead.
     */
    info: {
        supported: false,
        reason:
            "Swiss Ephemeris is a native C/C++ library and cannot run in browsers.",
        alternative: "Use AstronomyWrapper and astronomy-engine for all calculations."
    }
};

// Initialize automatically (kept for structural compatibility)
const status = Ephe.init();
console.info("[Ephe.ts]:", status.message);

export default Ephe;
