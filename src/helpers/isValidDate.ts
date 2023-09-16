import { MONTH_NAMES } from "@/constants";

export const isValidDate = (year: string, month: string, day: string): boolean => {
    const newDate = new Date(
        parseInt(year, 10),
        MONTH_NAMES.findIndex((item) => item === month),
        parseInt(day, 10)
    );

    return Boolean(+newDate) && newDate.getDate() === parseInt(day, 10);
};
