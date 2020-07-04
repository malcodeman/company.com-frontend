import faker from "faker";

context("Contact form", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("Fills the contact form", () => {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const email = faker.internet.email();
    const company = faker.company.companyName();
    const message = faker.lorem.sentences();

    cy.get("[data-cy=name]").type(name).should("have.value", name);
    cy.get("[data-cy=email]").type(email).should("have.value", email);
    cy.get("[data-cy=company]").type(company).should("have.value", company);
    cy.get("[data-cy=message]").type(message).should("have.value", message);
    cy.get("[data-cy=submit]").click();
    cy.get("[data-cy=name]").should("have.value", "");
    cy.get("[data-cy=email]").should("have.value", "");
    cy.get("[data-cy=company]").should("have.value", "");
    cy.get("[data-cy=message]").should("have.value", "");
  });
});
