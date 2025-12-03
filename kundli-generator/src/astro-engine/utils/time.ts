export const dateToJulianDay = (date: Date): number => {
    // This logic is also in  AstronomyWrapper , but good to have as a pure utility if needed
    // For now, we delegate to the wrapper or implement a simple algorithm
    return (date.valueOf() / 86400000) - (date.getTimezoneOffset() / 1440) + 2440587.5;
};

export const decimalToTime = (decimal: number): { hours: number, minutes: number, seconds: number } => {
    const hrs = Math.floor(decimal);
    const minRaw = (decimal - hrs) * 60;
    const mins = Math.floor(minRaw);
    const secs = Math.round((minRaw - mins) * 60);
    return { hours: hrs, minutes: mins, seconds: secs };
};

export const timeToDecimal = (hours: number, minutes: number, seconds: number = 0): number => {
    return hours + (minutes / 60) + (seconds / 3600);
};
