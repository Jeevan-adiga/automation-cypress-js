import * as loginPage from "../../page-object/login-page"
import * as homePage from "../../page-object/home-page"

describe('login', () => {

    beforeEach('navigate to application', function() {
        cy.visit(Cypress.config("baseUrl"));
    })

    it('invalid login verification', function() {

        loginPage.login('test@test.com', 'test')
        
        loginPage.verifyLoginErrorMessage()
    })

    it('valid login verification', function() {
        
        loginPage.login('test@ahem.email', 'test')
    
        homePage.verifyHomePage()
    })

})