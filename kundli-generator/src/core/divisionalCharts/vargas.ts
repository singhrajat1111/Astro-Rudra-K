const normalize = (deg) => {
    let d = deg % 360;
    if (d < 0) d += 360;
    return d;
};

// D9 Navamsa
const calculateD9 = (long) => {
    const signIndex = Math.floor(long / 30);
    const degInSign = long % 30;
    const navamsaIndex = Math.floor(degInSign / (30 / 9)); // 0-8

    let startSignIndex;
    const signNum = signIndex + 1;

    if ([1, 4, 7, 10].includes(signNum)) { // Movable
        startSignIndex = signIndex;
    } else if ([2, 5, 8, 11].includes(signNum)) { // Fixed
        startSignIndex = (signIndex + 8) % 12; // 9th from sign
    } else { // Dual
        startSignIndex = (signIndex + 4) % 12; // 5th from sign
    }

    const d9SignIndex = (startSignIndex + navamsaIndex) % 12;
    const d9DegInSign = (degInSign % (30 / 9)) * 9;

    return (d9SignIndex * 30) + d9DegInSign;
};

// D10 Dasamsa
const calculateD10 = (long) => {
    const signIndex = Math.floor(long / 30);
    const degInSign = long % 30;
    const partIndex = Math.floor(degInSign / (30 / 10)); // 0-9

    let startSignIndex;
    if ((signIndex + 1) % 2 !== 0) { // Odd
        startSignIndex = signIndex;
    } else { // Even
        startSignIndex = (signIndex + 8) % 12; // 9th from sign
    }

    const d10SignIndex = (startSignIndex + partIndex) % 12;
    const d10DegInSign = (degInSign % (30 / 10)) * 10;

    return (d10SignIndex * 30) + d10DegInSign;
};

// D7 Saptamsa
const calculateD7 = (long) => {
    const signIndex = Math.floor(long / 30);
    const degInSign = long % 30;
    const partIndex = Math.floor(degInSign / (30 / 7)); // 0-6

    let startSignIndex;
    if ((signIndex + 1) % 2 !== 0) { // Odd
        startSignIndex = signIndex;
    } else { // Even
        startSignIndex = (signIndex + 6) % 12; // 7th from sign
    }

    const d7SignIndex = (startSignIndex + partIndex) % 12;
    const d7DegInSign = (degInSign % (30 / 7)) * 7;

    return (d7SignIndex * 30) + d7DegInSign;
};

// D60 Shashtiamsa
const calculateD60 = (long) => {
    const signIndex = Math.floor(long / 30);
    const degInSign = long % 30;
    const partIndex = Math.floor(degInSign / 0.5); // 0-59

    // "In all signs, proceed from the sign itself"
    const d60SignIndex = (signIndex + partIndex) % 12;
    const d60DegInSign = (degInSign % 0.5) * 60;

    return (d60SignIndex * 30) + d60DegInSign;
};

module.exports = { calculateD9, calculateD10, calculateD7, calculateD60 };
