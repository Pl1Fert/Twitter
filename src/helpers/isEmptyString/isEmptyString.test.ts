import { isEmptyString } from ".";

describe("IsEmptyString test", () => {
    test("should return false", () => {
        const year = "2023";

        expect(isEmptyString(year)).toBe(false);
    });

    test("should return true", () => {
        const year = "";

        expect(isEmptyString(year)).toBe(true);
    });
});
