/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test Contaact Us From via Automation test Store", () =>  {
    it ("Shoulb be able to submit a successful submission via constact us form", () => {
        cy.visit('https://automationteststore.com/');
        cy.xpath("//a[contains(@href, 'contact')]").click();
        cy.get('.info_links_footer > :nth-child(5) > a').click ();
        cy.get('#ContactUsFrm_first_name').type ("Mark");
        cy.get('#ContactUsFrm_email').type ("mark_ramone@gmmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Hello! I'm Mark, and I need more Iphones for my store.");
        cy.get("button[title='Submit']").click(); 
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')   
});
})
