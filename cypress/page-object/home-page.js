
export function verifyHomePage() {
    cy.contains('Welcome to Address Book').should('be.visible');
    cy.contains('A simple web app for showing off your testing').should('be.visible');
}

export function navigateToAddresses() {
    cy.get('[data-test=addresses]').click();
    cy.get('h2').should('contain.text', 'Addresses');
}