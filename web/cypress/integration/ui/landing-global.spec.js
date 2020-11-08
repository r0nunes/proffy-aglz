/// <reference types="cypress" /> 

context('Landing Page', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Navagar para o cadastro de aulas', () => {
        cy.get('div a.give-classes').click();
        cy.url().should('contain', 'give-classes')
    });
    
    it('Navegar para a pesquisa de professores', () => {
        cy.get('div a.study').click();
        cy.url().should('contain', 'study')
    });
});

