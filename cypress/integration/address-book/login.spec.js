import * as loginPage from "../../page-object/login-page"

describe('login', () => {

    it('invalid login verification', function() {
        cy.visit("http://a.testaddressbook.com/");

        loginPage.login('test@test.com', 'test')
        
        cy.get('[data-test=notice]').should('have.text', 'Bad email or password.')
    })

    it('valid login verification', function() {
        cy.visit("http://a.testaddressbook.com/");
        
        loginPage.login('test@ahem.email', 'test')
    
        cy.get('[data-test=current-user]').should('have.text', 'test@ahem.email')
    })

})