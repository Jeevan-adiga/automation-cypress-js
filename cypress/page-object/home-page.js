
export function verifyHomePage() {
    cy.contains('Welcome to Address Book').should('be.visible')
    cy.contains('A simple web app for showing off your testing').should('be.visible')
}