import * as loginPage from "../../page-object/login-page"
import * as homePage from "../../page-object/home-page"
import * as listAddressPage from "../../page-object/list-address-page"
import * as newAddressPage from "../../page-object/new-address-page"

describe('add-address', () => {

    beforeEach('visit applocation', () => {
        cy.visit(Cypress.config("baseUrl"));

        loginPage.login("test@ahem.email", "test");
    })

    it('add new address', () => {
        homePage.navigateToAddresses();
        
        listAddressPage.navigateToNewAddress();        
        
        newAddressPage.createAddress();
    })
})