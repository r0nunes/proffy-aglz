/// <reference types="cypress" /> 
/// <reference types="@bahmutov/cy-api"/>

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        
        cy.api({ 
            method: 'POST', 
            url: `${Cypress.config().apiURL}/classes`,
            body: {
                "name":"Renato Nunes",
                "avatar":"https://pickaface.net/gallery/avatar/44947415_161203_0634_2om7fql.png",
                "whatsapp":"47999999999",
                "bio":"Lorem Ipsum Lorem Ipsum",
                "subject":"Inglês",
                "cost":200,
                "schedule":[
                   {
                      "week_day":0,
                      "from":"16:00",
                      "to":"20:00"
                   }
                ]
             }
        }).then((response) => { 
            expect(response.status).to.eq(201)
            expect(response.duration).lt(30)
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});