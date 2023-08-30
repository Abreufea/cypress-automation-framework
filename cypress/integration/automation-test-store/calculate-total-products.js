/// <reference types="cypress" />

it("Calculate total of normal and sale products", () => {
  cy.visit("https://automationteststore.com/");
  cy.get('.thumbnail').as('productThumbnail')
  cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
  cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
  
  var itemsTotal = 0;
  cy.get('@itemPrice').then($linkText => {
      var itemsPriceTotal = 0;
      var itemPrice = $linkText.split('$');
      var i;
      for(i = 0; i < itemPrice.length; i++) {
          cy.log(itemPrice[i])
          itemsPriceTotal += Number(itemPrice[i])
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non sale price items total: " + itemsPriceTotal)
  })

  cy.get('@saleItemPrice').then($linkText => {
      var saleItemsPrice = 0;
      var saleItemPrice = $linkText.split('$');
      var i;
      for(i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i])
          saleItemsPrice += Number(saleItemPrice[i])
      }
     itemsTotal += saleItemsPrice;
     cy.log("Sale price items total: " + saleItemsPrice)
  })
  .then(() => {
    cy.log("The total price of all products: "+ itemsTotal)
    expect(itemsTotal).to.equal(660.50)
  })
});