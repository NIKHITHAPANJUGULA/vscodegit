/// <reference types="cypress" />

describe("Create Tourist Test", () => {

    it('POST - create Tourist', () => {


        console.log('***************' +Math.random().toString(5).substring(2));

        let authToken = ""

        let resquestBody = {
                                tourist_name: "Nikhitha",
                                tourist_email: Math.random().toString(5).substring(2) + "nikhithagenpact@gmail.com",
                                tourist_location: "USA"
                            }


        cy.request({

            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: resquestBody,

            // headers: {

            //     "content-type": "application/json",
            //     "Authorization": "Bearer" + authToken

            // }
            



        }).then( (resp)=>{


            //validation step

            console.log(resp.body);

            //print complete response body into cypress console
            cy.log(JSON.stringify(resp.body))


            expect(resp.status).to.eq(201)              //verify status code ---201

            expect(resp.body.tourist_name).to.eq(resquestBody.tourist_name) 
            expect(resp.body.tourist_email).to.eq(resquestBody.tourist_email) 
            expect(resp.body.tourist_location).to.eq('USA') 

        })




    })




})
