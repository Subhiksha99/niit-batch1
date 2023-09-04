describe('Table test suite', () => {
    it('Verify table content any where in table', () => {
        cy.visit('http://localhost:4200/posts');
        cy.get('table.table').contains('td', 'qui est esse').should('be.visible');
    })

    it('Verify table content in specific column/row', () => {
        cy.visit('http://localhost:4200/posts');
        cy.xpath("//td[normalize-space()='eum et est occaecati']").contains('eum et est occaecati').should('be.visible');
    });
})

