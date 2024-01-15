/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in/')
   
      //verify application title
      
      cy.get('[placeholder="Search Amazon.in"]').clear().type('samsung fold')
      
      cy.get('[value="Go"]').click()

      cy.title().should('contain', 'samsung')

      cy.url().should('contain', 'samsung')



  })

})