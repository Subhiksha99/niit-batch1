describe('Alerts Test', () => {
    it('window.confirm', () => {
        cy.visit('http://localhost:4200/posts');
        cy.xpath('//tbody[1]/tr[1]/td[6]/button[1]').click();

        // Verify text on alert
        cy.on('window:confirm', (e) => {
            expect(e).to.contains("Are you sure to delete post with post id");
        })
    })

    xit('window.alert', () => {
        cy.visit('http://localhost:4200/posts');
        cy.xpath('//tbody[1]/tr[1]/td[6]/button[1]').click();

        // Verify text on alert
        cy.on('window:alert', (e) => {
            expect(e).to.contains("Are you sure to delete post with post id");
        })
    })
})