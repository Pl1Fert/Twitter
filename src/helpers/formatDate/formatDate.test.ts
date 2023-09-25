import { formatDate } from ".";

describe("Format date test", () => {
    test("should format date", () => {
        const year = "2023";
        const month = "01";
        const day = "25";

        const date = formatDate(year, month, day);
        const expectedDate = `${day}/${month}/${year}`;

        expect(date).toBe(expectedDate);
    });
});
