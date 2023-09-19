import { IUser } from "@/interfaces";
import { themeActions } from "@/store/slices/themeSlice";
import { userActions } from "@/store/slices/userSlice";

describe("theme test", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("theme should be false", () => {
        cy.window()
            .its("store")
            .invoke("getState")
            .its("theme")
            .its("isDarkTheme")
            .should("be.equal", false);
    });

    it("theme should change", () => {
        cy.window().its("store").invoke("dispatch", themeActions.toggleTheme());

        cy.window()
            .its("store")
            .invoke("getState")
            .its("theme")
            .its("isDarkTheme")
            .should("be.equal", true);
    });

    it("theme should change onclick", () => {
        const user: IUser = {
            name: "Rusel Alexey",
            phone: "+375297502132",
            email: "alexeyrusel@gmail.com",
            id: "Um5ToU0Zm2c0zheOEsSCDwlLYhf1",
            token: "ya29.a0AfB_byBO__4h00qfBvGyYhP9QN6ihwbieRFzSfjC17fiU7Q3vGl68ETlQTyw_WBxt4UnmWVVJEJk1qiqplFKfayat8NJvJCY251jH6QF4SMrGt11QJGeRhs7LWk5f2Fm_31Vy4QiuT-mvl4ytxEukdEW9tCs02Us4fcaCgYKATcSARISFQGOcNnC1zIw350ulrM98knML8e9Gg0170",
            birthDate: "25/February/2003",
            description: "Hello!",
        };

        cy.window().its("store").invoke("dispatch", userActions.setUser(user));
        cy.wait(1);
        cy.visit("/feed");

        cy.get("input[type='radio']").eq(1).click();

        cy.window()
            .its("store")
            .invoke("getState")
            .its("theme")
            .its("isDarkTheme")
            .should("be.equal", true);
    });
});
