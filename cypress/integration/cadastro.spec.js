/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Cadastro', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        });

    beforeEach(() => {
        cy.visit('https://dev.app.bossabox.com/login')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    

    it('Deve cadastrar com sucesso', () => {
        
        let name = faker.name.findName()
        let email = faker.internet.email(name)
        
        cy.get('.align-items-center > .bbox-button').click()
        cy.get('#input-fullName').type(name)
        cy.get('#input-email').type(email)
        cy.get('#input-password').type('senha123')
        cy.get('#input-confirmPassword').type('senha123')
        cy.get('.checkbox-icon > .icon > svg').click()
        cy.get('.bbox-button.margin-top-big').click()
        
        cy.wait(1000)
        cy.get('.font-size-huge').should('contain', 'Olá')
    })

    it('Deve validar e-mail já cadastrado', () => {
        cy.get('.align-items-center > .bbox-button').click()
        cy.get('#input-fullName').type('Pessoa de teste')
        cy.get('#input-email').type('qa@teste.com')
        cy.get('#input-password').type('senha123')
        cy.get('#input-confirmPassword').type('senha123')
        cy.get('.checkbox-icon > .icon > svg').click()
        cy.get('.bbox-button.margin-top-big').click()
        
        cy.get(':nth-child(2) > .display-inline-block').should('contain', 'E-mail já cadastrado!')

    })

    it('Deve validar senha com menos de 8 caracteres', () => {
        
                
        let name = faker.name.findName()
        let email = faker.internet.email(name)
        
        cy.get('.align-items-center > .bbox-button').click()
        cy.get('#input-fullName').type(name)
        cy.get('#input-email').type(email)
        cy.get('#input-password').type('123')
        cy.get('#input-confirmPassword').type('123')
        cy.get('.checkbox-icon > .icon > svg').click()
        cy.get('.bbox-button.margin-top-big').click()

        cy.get(':nth-child(2) > .display-inline-block').should('contain', 'A senha deve ter pelo menos 8 caracteres')
    })
    
    it('Deve validar a não marcação do termo de uso', () => {
        
        let name = faker.name.findName()
        let email = faker.internet.email(name)
        
        cy.get('.align-items-center > .bbox-button').click()
        cy.get('#input-fullName').type(name)
        cy.get('#input-email').type(email)
        cy.get('#input-password').type('12345678')
        cy.get('#input-confirmPassword').type('12345678')
        cy.get('.bbox-button.margin-top-big').click()

        cy.get(':nth-child(2) > .display-inline-block').should('contain', 'É necessário aceitar os termos de uso e política de privacidade para prosseguir')
    })

    it('Deve validar o não preenchimento dos campos obrigatórios', () => {
        cy.get('.align-items-center > .bbox-button').click()
        cy.get('.bbox-button.margin-top-big').click()

        cy.get(':nth-child(2) > .display-inline-block').should('contain', 'Lembre-se de preencher os campos')
    })



})
