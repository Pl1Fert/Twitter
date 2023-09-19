import { IUser } from "@/interfaces";
import { userActions } from "@/store/slices/userSlice";

describe("profile test", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render profile page", () => {
        const user: IUser = {
            name: "Rusel Alexey",
            phone: "+375297502132",
            email: "alexeyrusel@gmail.com",
            id: "Um5ToU0Zm2c0zheOEsSCDwlLYhf1",
            token: "ya29.a0AfB_byBO__4h00qfBvGyYhP9QN6ihwbieRFzSfjC17fiU7Q3vGl68ETlQTyw_WBxt4UnmWVVJEJk1qiqplFKfayat8NJvJCY251jH6QF4SMrGt11QJGeRhs7LWk5f2Fm_31Vy4QiuT-mvl4ytxEukdEW9tCs02Us4fcaCgYKATcSARISFQGOcNnC1zIw350ulrM98knML8e9Gg0170",
            birthDate: "25/February/2003",
            description: "hello!",
        };

        cy.window().its("store").invoke("dispatch", userActions.setUser(user));
        cy.wait(1);
        cy.visit(`/profile/${user.id}`);

        cy.contains(user.email as string);
        cy.contains(user.name as string);
        cy.contains(user.description as string);
    });

    it("should open modal", () => {
        const user: IUser = {
            name: "Rusel Alexey",
            phone: "+375297502132",
            email: "alexeyrusel@gmail.com",
            id: "Um5ToU0Zm2c0zheOEsSCDwlLYhf1",
            token: "ya29.a0AfB_byBO__4h00qfBvGyYhP9QN6ihwbieRFzSfjC17fiU7Q3vGl68ETlQTyw_WBxt4UnmWVVJEJk1qiqplFKfayat8NJvJCY251jH6QF4SMrGt11QJGeRhs7LWk5f2Fm_31Vy4QiuT-mvl4ytxEukdEW9tCs02Us4fcaCgYKATcSARISFQGOcNnC1zIw350ulrM98knML8e9Gg0170",
            birthDate: "25/February/2003",
            description: "hello!",
        };

        cy.window().its("store").invoke("dispatch", userActions.setUser(user));
        cy.wait(1);
        cy.visit(`/profile/${user.id}`);

        cy.contains("Edit Profile").click();

        cy.contains(user.name as string);
        cy.contains(user.email as string);
        cy.contains(user.phone as string);
        cy.contains(user.birthDate as string);
        cy.contains(user.description as string);

        cy.contains(user.description as string)
            .clear()
            .type("Test")
            .should("have.value", "Test");

        cy.contains("Save").should("not.be.disabled").click();
    });
});
