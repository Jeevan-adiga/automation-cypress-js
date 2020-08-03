
export function navigateToNewAddress() {
    cy.get('[data-test=create]').click()
    cy.get('h2').should('contain.text', 'New Address')
}