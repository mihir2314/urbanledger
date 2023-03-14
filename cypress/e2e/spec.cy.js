/// <reference types = "Cypress"/>
describe('template spec', () => {
  it('passes', () => {
    cy.viewport('ipad-mini')
    cy.visit('https://example.cypress.io')
    
  })
})