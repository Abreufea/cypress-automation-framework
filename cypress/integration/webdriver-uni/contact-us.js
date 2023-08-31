/// <reference types="cypress" />

describe("Test Contaact Us From via WebdriverUni", () =>  {
    it ("Shoulb be able to submit a successful submission via constact us form", () => {
  cy.visit ("https://webdriveruniversity.com/Contact-Us/contactus.html");
  cy.document().should('have.property', 'charset').and('eq','UTF-8');
  cy.title().should('include', 'WebDriver | Contact Us');
     cy.get('[name="first_name"]').type("joe");
     cy.get('[name="last_name"]').type("Hermano");
     cy.get('[name="email"]').type("hermano_joe@email.com");
     cy.get('textarea.feedback-input').type("My first test alone...:)");
     cy.get('[type="submit"]').click();
     cy.get('h1').should('have.text', 'Thank You for your Message!')    
});
it ("Shoulb not be able to submit a successful submission via constact us form as all fields are required", () => {
      //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.visit("http://www.webdriveruniversity.com")
      cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    cy.get('[name="first_name"]').type("joe");
    cy.get('[name="last_name"]').type("Hermano");
    cy.get('textarea.feedback-input').type("My first test alone...:)");
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required')
    });
})

