 /// <Reference types="Cypress" />
describe("Selectors exemples", () => {
it("Exemples of Selectos via WebdriverUni Contact Page", () => {
cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

//By tag name
cy.get("input");
//By atribute name and value
cy.get("input[name='first_name']");
//By Id
cy.get('#contact_me');
//By class
cy.get(".feedback-input");
// By mutiple classes 
cy.get("[class='navbar navbar-inverse navbar-fixed-top']");
// By two different attributes
cy.get("[name='email'][placeholder='Email Address']");
// By xpath
cy.xpath("//input[@name='first_name']")
})
})