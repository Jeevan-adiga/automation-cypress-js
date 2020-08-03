var faker = require('faker');

export function createAddress() {

    cy.get('#address_first_name').type(faker.name.firstName());
    cy.get('#address_last_name').type(faker.name.lastName());

    cy.get('[data-test=submit]').click();
}