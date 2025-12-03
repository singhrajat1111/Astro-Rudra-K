import * as Astronomy from "astronomy-engine";

// @ts-ignore
const Observer = Astronomy.Observer || Astronomy.default?.Observer;
// @ts-ignore
const SearchRiseSet = Astronomy.SearchRiseSet || Astronomy.default?.SearchRiseSet;
// @ts-ignore
const Body = Astronomy.Body || Astronomy.default?.Body;
// @ts-ignore
const SunPosition = Astronomy.SunPosition || Astronomy.default?.SunPosition;
// @ts-ignore
const EclipticGeoMoon = Astronomy.EclipticGeoMoon || Astronomy.default?.EclipticGeoMoon;

export interface PanchangResult {
    date: Date;
    tithi: { index: number; name: string };
    nakshatra: { index: number; name: string; pada: number };
    yoga: { index: number; name: string };
    karana: { index: number; name: string };
    vara: string;
    sunrise: string;
    sunset: string;
    rahuKaal: { start: string; end: string };
    gulikaKaal: { start: string; end: string };
    yamaganda: { start: string; end: string };
    abhijit: { start: string; end: string };
}

// ---------------------- CONSTANT ARRAYS ----------------------

const TITHI_NAMES = [
    "", "Pratipada", "Dvitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima / Amavasya",
    "Pratipada (Krishna)", "Dvitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Amavasya"
];

const NAKSHATRA_NAMES = [
    "", "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
    "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha",
    "Uttara Ashadha", "Shravana", "Dhanishtha", "Shatabhisha", "Purva Bhadrapada",
    "Uttara Bhadrapada", "Revati"
];

const YOGA_NAMES = [
    "", "Vishkumbha", "Preeti", "Ayushman", "Saubhagya", "Shobhana",
    "Atiganda", "Sukarma", "Dhriti", "Shoola", "Ganda",
    "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra",
    "Siddhi", "Vyatipata", "Variyan", "Parigha", "Shiva",
    "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma",
    "Indra", "Vaidhriti"
];

const KARANA_NAMES = [
    "", "Bava", "Balava", "Kaulava", "Taitila", "Garaja",
    "Vanija", "Vishti (Bhadra)", "Shakuni", "Chatushpada", "Naga", "Kimstughna"
];

const VARA_LORDS = [
    "Sunday - Sun", "Monday - Moon", "Tuesday - Mars", "Wednesday - Mercury",
    "Thursday - Jupiter", "Friday - Venus", "Saturday - Saturn"
];

const formatTime = (d?: Date | null): string =>
    d ? d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "NA";

// ------------------------------------------------------------
//                    MAIN PANCHANG ENGINE
// ------------------------------------------------------------

export const calculatePanchang = (date: Date, lat: number, lon: number): PanchangResult => {
    const observer = { latitude: lat, longitude: lon, height: 0 };

    // ----------- ✔ SUN & MOON longitudes (correct way) ----------
    const sunLon = SunPosition(date).elon;
    const moonLon = EclipticGeoMoon(date).lon;

    // ---------------------- ✔ TITHI ----------------------
    let diff = moonLon - sunLon;
    if (diff < 0) diff += 360;
    const tithiIndex = Math.floor(diff / 12) + 1;

    // ------------------ ✔ NAKSHATRA ----------------------
    const nakIndex = Math.floor(moonLon / (360 / 27)) + 1;
    const pada = Math.floor(((moonLon % (360 / 27)) / (360 / 108))) + 1;

    // ------------------- ✔ YOGA --------------------------
    const yogaIndex = Math.floor(((sunLon + moonLon) % 360) / (360 / 27)) + 1;

    // ------------------ ✔ KARANA -------------------------
    const karanaIndex = Math.floor(diff / 6) + 1;

    // ------------------ ✔ VARA ---------------------------
    const vara = VARA_LORDS[date.getDay()];

    // ---------------- ✔ SUNRISE / SUNSET -------------------
    const sunrise = SearchRiseSet(Body.Sun, observer, +1, date, 1)?.date || null;
    const sunset = SearchRiseSet(Body.Sun, observer, -1, date, 1)?.date || null;

    // ---------------- ✔ RAHU KAAL -------------------------
    const sunriseM = sunrise ? sunrise.getHours() * 60 + sunrise.getMinutes() : 360;
    const sunsetM = sunset ? sunset.getHours() * 60 + sunset.getMinutes() : 1080;
    const dayLength = (sunsetM - sunriseM) / 8;

    const rahuOrder = [7, 1, 6, 4, 5, 3, 2];
    const rahuStart = sunriseM + rahuOrder[date.getDay()] * dayLength;
    const rahuEnd = rahuStart + dayLength;

    // ---------------- ✔ ABHIJIT MUHURTA ---------------------
    const midDay = (sunriseM + sunsetM) / 2;
    const abhijitStart = midDay - 24;
    const abhijitEnd = midDay + 24;

    return {
        date,
        tithi: { index: tithiIndex, name: TITHI_NAMES[tithiIndex] },
        nakshatra: { index: nakIndex, name: NAKSHATRA_NAMES[nakIndex], pada },
        yoga: { index: yogaIndex, name: YOGA_NAMES[yogaIndex] },
        karana: { index: karanaIndex, name: KARANA_NAMES[karanaIndex] },
        vara,
        sunrise: formatTime(sunrise),
        sunset: formatTime(sunset),
        rahuKaal: {
            start: formatTime(new Date(date.setHours(0, rahuStart))),
            end: formatTime(new Date(date.setHours(0, rahuEnd)))
        },
        gulikaKaal: { start: "Coming Soon", end: "Coming Soon" },
        yamaganda: { start: "Coming Soon", end: "Coming Soon" },
        abhijit: {
            start: formatTime(new Date(date.setHours(0, abhijitStart))),
            end: formatTime(new Date(date.setHours(0, abhijitEnd)))
        }
    };
};
