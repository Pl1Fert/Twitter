import { isLiked } from ".";

describe("isValidDate test", () => {
    test("should return true", () => {
        const liked = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com", "test3@gmail.com"];
        const email = "test2@gmail.com";

        expect(isLiked(liked, email)).toBe(true);
    });

    test("should return false", () => {
        const liked = ["test@gmail.com", "test1@gmail.com", "test2@gmail.com", "test3@gmail.com"];
        const email = "t@gmail.com";

        expect(isLiked(liked, email)).toBe(false);
    });
});
