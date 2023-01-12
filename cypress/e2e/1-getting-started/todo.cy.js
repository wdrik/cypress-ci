/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("first test", () => {
    cy.contains("Get started").should("exist");
  });
});
