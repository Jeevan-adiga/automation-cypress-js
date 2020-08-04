var faker = require('faker');

export function createAddress() {

    cy.get('#address_first_name').type(faker.name.firstName());
    cy.get('#address_last_name').type(faker.name.lastName());

    cy.get('#address_street_address').type(faker.address.streetAddress())
    cy.get('#address_city').type(faker.address.city())
    cy.get('#address_zip_code').type(faker.address.zipCode().split('-')[0])

    cy.get('[data-test=submit]').click();
}