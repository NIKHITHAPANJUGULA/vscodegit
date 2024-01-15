/// <reference types="cypress" />



describe('ZOHO', () => {


    it('test', () => {

        //launch application
        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get("#zcf_address_country").should('be.visible')

        //select single value

        cy.get("#zcf_address_country").select("Afghanistan")

        


       

    })


    

})