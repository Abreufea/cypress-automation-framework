/// <reference types="cypress-xpath" />
describe("Verifying variables, cypress commands and Js commands.", () =>  {
    it  ("Navigation to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
     cy.get("a[href*='=product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then(($headerText)=> {
        const headerText = $headerText.text()
        cy.log("Found header text" + headerText)
        expect(headerText).is.eq('Makeup')
    })    
});
});