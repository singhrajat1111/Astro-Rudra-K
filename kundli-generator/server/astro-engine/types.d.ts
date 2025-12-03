declare module 'swisseph' {
    export const SE_SUN: number;
    export const SE_MOON: number;
    export const SE_MERCURY: number;
    export const SE_VENUS: number;
    export const SE_MARS: number;
    export const SE_JUPITER: number;
    export const SE_SATURN: number;
    export const SE_URANUS: number;
    export const SE_NEPTUNE: number;
    export const SE_PLUTO: number;
    export const SE_MEAN_NODE: number;
    export const SE_TRUE_NODE: number;
    export const SE_MEAN_APOG: number;
    export const SE_OSCU_APOG: number;
    export const SE_EARTH: number;
    export const SE_CHIRON: number;

    export const SEFLG_JPLEPH: number;
    export const SEFLG_SWIEPH: number;
    export const SEFLG_MOSEPH: number;
    export const SEFLG_HELCTR: number;
    export const SEFLG_TRUEPOS: number;
    export const SEFLG_J2000: number;
    export const SEFLG_NONUT: number;
    export const SEFLG_SPEED: number;
    export const SEFLG_NOGDEFL: number;
    export const SEFLG_NOABERR: number;
    export const SEFLG_EQUATORIAL: number;
    export const SEFLG_XYZ: number;
    export const SEFLG_RADIANS: number;
    export const SEFLG_BARYCTR: number;
    export const SEFLG_TOPOCTR: number;
    export const SEFLG_SIDEREAL: number;
    export const SEFLG_ICRS: number;

    export const SE_SIDM_LAHIRI: number;
    export const SE_SIDM_FAGAN_BRADLEY: number;
    export const SE_SIDM_RAMAN: number;

    export interface Position {
        longitude: number;
        latitude: number;
        distance: number;
        longitudeSpeed: number;
        latitudeSpeed: number;
        distanceSpeed: number;
        rflag: number;
        error?: string;
    }

    export interface Houses {
        house: number[];
        ascmc: number[];
        error?: string;
    }

    export function swe_set_ephe_path(path: string): void;
    export function swe_julday(year: number, month: number, day: number, hour: number, gregflag: number): number;
    export function swe_calc_ut(tjd_ut: number, ipl: number, iflag: number): Position;
    export function swe_houses(tjd_ut: number, geolat: number, geolon: number, hsys: string): Houses;
    export function swe_set_sid_mode(sid_mode: number, t0: number, t1: number): void;
    export function swe_get_ayanamsa_ut(tjd_ut: number): number;
    export function swe_rise_trans(tjd_ut: number, ipl: number, starname: string | null, epheflag: number, rsmi: number, geopos: number[], atpress: number, attemp: number): { transit: number; error?: string };

    export const SE_CALC_RISE: number;
    export const SE_CALC_SET: number;
    export const SE_BIT_DISC_CENTER: number;
    export const SE_BIT_NO_REFRACTION: number;
    export const SE_GREG_CAL: number;
}
