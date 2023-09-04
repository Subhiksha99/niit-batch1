describe('XPath Locators Test Suite', () => {
    it('Verify h2 text using xpath', () => {
        cy.visit('https://example.cypress.io/');

        // Verity h2 text using xpath
        cy.xpath(".//div[@id='utilities']/h2").contains('Commands');
    })

    it('Verify li count', () => {
        cy.visit('https://example.cypress.io/');

        cy.xpath("//ul[@class='home-list']/li/ul/li").should('have.length', 95);

    });

})