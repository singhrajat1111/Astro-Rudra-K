const { calculateNakshatra, NAKSHATRAS } = require('../nakshatra/nakshatra');

const DASHA_YEARS = {
    Ketu: 7, Venus: 20, Sun: 6, Moon: 10, Mars: 7, Rahu: 18, Jupiter: 16, Saturn: 19, Mercury: 17
};

const DASHA_ORDER = ['Ketu', 'Venus', 'Sun', 'Moon', 'Mars', 'Rahu', 'Jupiter', 'Saturn', 'Mercury'];

const getNakshatraLord = (nakName) => {
    const nakIndex = NAKSHATRAS.indexOf(nakName);
    // Order repeats: 1(Ketu), 2(Ven), ...
    // Ashwini (0) -> Ketu (0)
    const lordIndex = nakIndex % 9;
    return DASHA_ORDER[lordIndex];
};

const addYears = (date, years) => {
    const fullYears = Math.floor(years);
    const fraction = years - fullYears;
    date.setFullYear(date.getFullYear() + fullYears);
    date.setTime(date.getTime() + (fraction * 365.25 * 24 * 60 * 60 * 1000));
};

const calculateDasha = (moonLongitude, birthDate) => {
    const nak = calculateNakshatra(moonLongitude);
    const nakLord = getNakshatraLord(nak.name);
    const totalYears = DASHA_YEARS[nakLord];

    // Balance of Dasha
    const balanceYears = (nak.degreesRemaining / (360 / 27)) * totalYears;

    const dashas = [];
    let currentDate = new Date(birthDate);

    // First Dasha (Balance)
    let endDate = new Date(currentDate);
    addYears(endDate, balanceYears);
    dashas.push({ planet: nakLord, start: new Date(currentDate), end: new Date(endDate) });
    currentDate = new Date(endDate);

    // Subsequent Dashas
    let startIndex = DASHA_ORDER.indexOf(nakLord);
    for (let i = 1; i < 9; i++) {
        let idx = (startIndex + i) % 9;
        let planet = DASHA_ORDER[idx];
        let years = DASHA_YEARS[planet];

        let end = new Date(currentDate);
        addYears(end, years);
        dashas.push({ planet: planet, start: new Date(currentDate), end: new Date(end) });
        currentDate = new Date(end);
    }

    return dashas;
};

module.exports = { calculateDasha };
