export const dmsToDecimal = (degrees: number, minutes: number, seconds: number, direction: 'N' | 'S' | 'E' | 'W'): number => {
    let decimal = degrees + (minutes / 60) + (seconds / 3600);
    if (direction === 'S' || direction === 'W') {
        decimal *= -1;
    }
    return decimal;
};

export const decimalToDms = (decimal: number): { degrees: number, minutes: number, seconds: number, sign: number } => {
    const sign = decimal < 0 ? -1 : 1;
    const absDec = Math.abs(decimal);
    const degrees = Math.floor(absDec);
    const minRaw = (absDec - degrees) * 60;
    const minutes = Math.floor(minRaw);
    const seconds = Math.round((minRaw - minutes) * 60);
    return { degrees, minutes, seconds, sign };
};
