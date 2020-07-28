
describe('login', () => {

    it('invalid login verification', function() {
        cy.visit("http://a.testaddressbook.com/");
        cy.get('h1', {timeout:5000});
    
        cy.get('[data-test=sign-in]').click();
        cy.get('[data-test=email]').type('test@test.com')
        cy.get('[data-test=password]').type('password')
        cy.get('[data-test=submit]').click()
    
        cy.get('[data-test=notice]').should('have.text', 'Bad email or password.')
    })

    it('valid login verification', function() {
        cy.visit("http://a.testaddressbook.com/");
        cy.get('h1', {timeout:5000});
    
        cy.get('[data-test=sign-in]').click();
        cy.get('[data-test=email]').type('test@ahem.email')
        cy.get('[data-test=password]').type('test')
        cy.get('[data-test=submit]').click()
    
        cy.get('[data-test=current-user]').should('have.text', 'test@ahem.email')
    })

})