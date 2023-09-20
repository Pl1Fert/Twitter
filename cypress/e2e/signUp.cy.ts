describe("signUp test", () => {
    beforeEach(() => {
        cy.visit("/signUp");
    });

    it("validate email", () => {
        cy.get("button").should("be.disabled");

        cy.get("input[name='email']")
            .type("testgmail.com{enter}")
            .should("have.value", "testgmail.com");

        cy.get("input[name='password']").focus();

        cy.contains("Email is invalid");

        cy.get("button").should("be.disabled");
    });

    it("validate phone", () => {
        cy.get("button").should("be.disabled");

        cy.get("input[name='phone']")
            .type("testgmail.com{enter}")
            .should("have.value", "testgmail.com");

        cy.get("input[name='password']").focus();

        cy.contains("Phone is invalid");

        cy.get("button").should("be.disabled");
    });

    it("signUp", () => {
        cy.get("button").should("be.disabled");

        cy.get("input[name='name']").type("Alexey{enter}").should("have.value", "Alexey");

        cy.get("input[name='email']")
            .type("test@gmail.com{enter}")
            .should("have.value", "test@gmail.com");

        cy.get("input[name='phone']")
            .type("+375291234567{enter}")
            .should("have.value", "+375291234567");

        cy.get("input[name='password']").type("test{enter}").should("have.value", "test");

        cy.get("select[name='month']").select("February").should("have.value", "February");
        cy.get("select[name='year']").select("2003").should("have.value", "2003");
        cy.get("select[name='day']").select("25").should("have.value", "25");

        cy.get("button").should("not.be.disabled").click();

        cy.wait(2000);
    });
});
