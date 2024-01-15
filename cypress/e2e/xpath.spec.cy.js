/// <reference types="cypress"/>
describe('verify HRM App', ()=>{


    it('TC01: verify login feature', ()=>{
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        
         cy.title().should('eq','OrangeHRM')
         cy.url().should('contain','login')

        
        

         cy.xpath("//input[@placeholder='Username']").clear().type('Admin').should('have.value', 'Admin')
         cy.xpath("//input[@placeholder='Password']").clear().type('admin123').should('have.value', 'admin123')

       
         cy.xpath("//button[@type='submit']").click()

         cy.title().should('eq','OrangeHRM')

         cy.url().should('contain','dashboard')


         

      
    })
  })
