/// <reference types="cypress" />

describe('orange ', function() {
    
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
      cy.title().should('eq', 'OrangeHRM')

    });
  
