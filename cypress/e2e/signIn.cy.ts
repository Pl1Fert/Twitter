describe("signIn test", () => {
    beforeEach(() => {
        cy.visit("/signIn");
    });

    it("signIn", () => {
        cy.get("button").should("be.disabled");

        cy.get("input[name='phoneOrEmail']")
            .type("test@gmail.com{enter}")
            .should("have.value", "test@gmail.com");

        cy.get("input[name='password']").type("test{enter}").should("have.value", "test");
        cy.get("button").should("not.be.disabled").click();

        cy.wait(2000);
    });

    it("validate email", () => {
        cy.get("button").should("be.disabled");

        cy.get("input[name='phoneOrEmail']")
            .type("testgmail.com")
            .should("have.value", "testgmail.com");

        cy.get("input[name='password']").focus();

        cy.contains("Email / Phone is invalid");

        cy.get("button").should("be.disabled");
    });
});
