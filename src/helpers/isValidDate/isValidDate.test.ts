import { isValidDate } from ".";

describe("isValidDate test", () => {
    test("should return true", () => {
        const year = "2023";
        const month = "February";
        const day = "25";

        expect(isValidDate(year, month, day)).toBe(true);
    });

    test("should return false", () => {
        const year = "2023";
        const month = "01";
        const day = "32";

        expect(isValidDate(year, month, day)).toBe(false);
    });
});
