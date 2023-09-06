export const getYearNumbers = (): string[] => {
    const currentYear = new Date().getFullYear();
    const years: string[] = [];

    for (let i = 0; i <= 100; i += 1) {
        years.push((currentYear - i).toString());
    }

    return years;
};
