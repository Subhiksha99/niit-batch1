describe('Elements interactions tests', () => {
    it('radio button test', () => {
        cy.visit("http://localhost:4200/register");

        // radio button
        cy.xpath("//input[@class='form-check-input me-2']").should('be.visible');
        cy.xpath("//input[@class='form-check-input me-2']").check().should('be.checked');
        cy.xpath("//input[@class='form-check-input ms-5']").should('not.be.checked');

    })
    it('check box test', () => {
        cy.visit("http://localhost:4200/register");

        // check box - check all check boxes
        cy.xpath("//div[@class='mb-3']//input").check().should('be.checked');
        // uncheck
        cy.xpath("//div[@class='mb-3']//input").uncheck().should('not.be.checked');

        // check specific check box
        cy.get("label:nth-child(1) input:nth-child(1)").check().should('be.checked');
        cy.get("label:nth-child(3) input:nth-child(1)").check().should('be.checked');
        cy.get("label:nth-child(4) input:nth-child(1)").check().should('be.checked');
    })

    it("Verify select dropdown", () => {
        cy.visit("http://localhost:4200/register");
        cy.get('select.form-select').select('India').should('have.value', 'India');
    })

    it("Enter text in 'firstName' field", () => {
        cy.visit("http://localhost:4200/register");
        cy.xpath("//input[@placeholder='Enter name']").type("Testuser");
    })
})