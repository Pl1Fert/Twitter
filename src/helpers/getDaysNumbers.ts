export const getDaysNumbers = (): string[] => {
    const days: string[] = [];

    for (let i = 1; i <= 31; i += 1) {
        days.push(i.toString());
    }

    return days;
};
