/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for(i = 0; i < userDetails.length; i++) {
                if(Number(userDetails[i])) {            
                    numb += Number(userDetails[i])      
                }
            }
            cy.log("Found total age: " + numb)
            expect(numb).to.eq(322)                    
        })
    });
  });
  