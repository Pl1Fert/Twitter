import { validatePhone } from ".";

describe("validatePhone test", () => {
    test("should return true", () => {
        const phone = "+375291234567";

        expect(validatePhone(phone)).toBe(true);
    });

    test("should return false", () => {
        const phone = "+375291a34567";

        expect(validatePhone(phone)).toBe(false);
    });
});
