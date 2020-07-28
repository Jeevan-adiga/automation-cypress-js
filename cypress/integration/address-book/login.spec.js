/// <reference types="cypress" />

it('landing page verification', function() {
    cy.visit("http://a.testaddressbook.com/");
    cy.get('h1', {timeout:5000});

    cy.get('[data-test=sign-in]').click();
    cy.get('[data-test=email]').type('test@test.com')
    cy.get('[data-test=password]').type('password')
    cy.get('[data-test=submit]').click()

    cy.get('[data-test=notice]').should('have.text', 'Bad email or password.')
})