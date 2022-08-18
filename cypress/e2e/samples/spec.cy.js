/// <reference types="cypress" />

// describe('My first test', () => {
//   it('Visits the kitchen sink', () => {
//     cy.visit('https.me')

//     cy.contains('type').click()
//     cy.url().should('include','/commands/actions')

//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })

// describe('My second test who should fail and get message on slack', () => {
//   it('Visits the kitchen sink', () => {
//         // cy.get('.product').should('have.length', 5)
          // cy.get('.product:visible').should('have.length', 4)
//   })
// })

describe('another test', () => {
  it('searches for products', () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get('.search-keyword').type('ca')

    cy.wait(2000)

    cy.get('.products').find('.product').should('have.length', 4).each(($el) => {    
      cy.wrap($el).find('button').should('have.text', 'ADD TO CART').click()    
    })
  })
})