/// <reference types="Cypress" />
import BasicTabs from "../../src/BasicTabs"

describe('BasicTabs.cy.js', () => {
  it('playground', () => {
    cy.mount(<BasicTabs />);

    cy.get('.MuiTypography-root').should('have.text', "Item One");

    cy.get('#simple-tab-1').click();

    cy.contains('p', "Item One").should('not.exist');
    cy.get('.MuiTypography-root').should('have.text', "Item Two");
    cy.contains('p', "Item Three").should('not.exist');

    cy.get('#simple-tab-2').click();

    cy.contains('p', "Item One").should('not.exist');
    cy.contains('p', "Item Two").should('not.exist');
    cy.get('.MuiTypography-root').should('have.text', "Item Three");

    cy.get('#simple-tab-0').click();

    cy.get('.MuiTypography-root').should('have.text', "Item One");
    cy.contains('p', "Item Two").should('not.exist');
    cy.contains('p', "Item Three").should('not.exist');
  })
})