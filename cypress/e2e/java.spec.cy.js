/// <reference types="cypress" />



describe('test', () => {


        
    it.only('Alert - confirm alert - click OK bydefault', ()=>{


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //generate an alert
        cy.get('[onclick="jsAlert()"]').click();

        //validation step
        cy.get('#result').should('have.text','You successfully clicked an alert')
        
        
    })


    

})
