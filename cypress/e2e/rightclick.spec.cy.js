/// <reference types="cypress"/>

describe('tigger test', () => {

    it('right click test', ()=>{


        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        
        
        cy.xpath("//span[text()='right click me']").trigger('contextmenu')

        cy.xpath("//span[text()='Delete']").click()


        //validate alert

        cy.on('window:alert', (alert)=>{

            expect(alert).to.contain('delete')

        })



    })



})