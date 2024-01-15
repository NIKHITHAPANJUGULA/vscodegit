
/// <reference types="cypress"/>

describe('nop test', () => {


    

    it('login sceanrio with contains', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

       

        cy.contains('button','Login').should('have.length.at.least', 1)
        cy.contains('button','Login').click()


        // //click on logout button
        // cy.get('').click()
        // cy.get('').click()

    })

    



})