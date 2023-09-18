import { MONTH_NAMES } from "@/constants";

export const isValidDate = (year: string, month: string, day: string): boolean => {
    if (MONTH_NAMES.findIndex((item) => item === month) === -1) {
        return false;
    }

    const monthIndex = MONTH_NAMES.findIndex((item) => item === month);
    const newDate = new Date(parseInt(year, 10), monthIndex, parseInt(day, 10));

    return Boolean(+newDate) && newDate.getDate() === parseInt(day, 10);
};
