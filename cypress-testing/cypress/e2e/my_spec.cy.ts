describe('template spec', () => {
  it('verify title of the page', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('eq', 'Cypress.io: Kitchen Sink')
  })

  xit('verify title of the page - negative test', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('eq', 'Cypress.io')
  })


  it('verify title of the page - negative test', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('not.eq', 'Cypress.io')
  })


  it('Verify banner', () => {
    cy.visit('https://example.cypress.io/');

    // identify element using get()& cssSelector 
    cy.get('div.container>h1').contains('Kitchen Sink');
  })

  it("Verify 'Cypress.io' link is clickable", () => {
    cy.visit('https://example.cypress.io/');

    // identify element using get()& cssSelector 
    cy.get("a[href = 'https://www.cypress.io']").contains('Cypress.io');
    cy.get("a[href = 'https://www.cypress.io']").click();




  })


})