/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("first test", () => {
    cy.contains("Get started").should("exist");
  });
});
