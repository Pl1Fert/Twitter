import { IProfileEditFields, IUser } from "@/interfaces";

import { isSomethingChanged } from ".";

describe("isValidDate test", () => {
    test("should return false", () => {
        const user: IUser = {
            name: "user",
            email: "user@example.com",
            phone: "123",
            token: "123",
            id: "234",
            birthDate: "01/01/2023",
            description: "a",
        };

        const data: IProfileEditFields = {
            name: "user1",
            email: "user@example.com",
            phone: "1234",
            birthDate: "01/01/2023",
            description: "a",
        };

        expect(isSomethingChanged(data, user)).toBe(false);
    });

    test("should return true", () => {
        const user: IUser = {
            name: "user",
            email: "user@example.com",
            phone: "123",
            token: "123",
            id: "234",
            birthDate: "01/01/2023",
            description: "a",
        };

        const data: IProfileEditFields = {
            name: "user",
            email: "user@example.com",
            phone: "123",
            birthDate: "01/01/2023",
            description: "a",
        };

        expect(isSomethingChanged(data, user)).toBe(true);
    });
});
