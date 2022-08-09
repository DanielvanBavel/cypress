describe('My first test', () => {
  it('Visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include','/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

describe('My second test who should fail and get message on slack', () => {
  it('Visits the kitchen sink', () => {
    cy.visit('/')
  })
})
