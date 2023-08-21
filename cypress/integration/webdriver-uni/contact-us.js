/// <reference types="cypress" />

describe("Test Contaact Us From via WebdriverUni", () =>  {
    it ("Shoulb be able to submit a successful submission via constact us form", () => {
    cy.visit ("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("joe");
    cy.get('[name="last_name"]').type("Hermano");
    cy.get('[name="email"]').type("hermano_joe@email.com");
    cy.get('textarea.feedback-input').type("My first test alone...:)");
    cy.get('[type="submit"]').click();
});

it ("Shoulb not be able to submit a successful submission via constact us form as all fields are required", () => {
    cy.visit ("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("joe");
    cy.get('[name="last_name"]').type("Hermano");
    cy.get('textarea.feedback-input').type("My first test alone...:)");
    cy.get('[type="submit"]').click();
    });
})
