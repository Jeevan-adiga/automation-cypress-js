
export function login(userName, password) {
    cy.get('h1', {timeout:5000});
    cy.get('[data-test=sign-in]').click();
    cy.get('[data-test=email]').type(userName)
    cy.get('[data-test=password]').type(password)
    cy.get('[data-test=submit]').click()
}