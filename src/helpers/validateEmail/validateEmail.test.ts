import { validateEmail } from ".";

describe("validateEmail test", () => {
    test("should return true", () => {
        const phone = "test@gmail.com";

        expect(validateEmail(phone)).toBe(true);
    });

    test("should return false", () => {
        const phone = "testgmail.com";

        expect(validateEmail(phone)).toBe(false);
    });
});
