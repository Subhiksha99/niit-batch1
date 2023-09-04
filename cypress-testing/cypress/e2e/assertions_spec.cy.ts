describe('Assertions test suite', () => {

    it('Verify customer login form title using xpath, contains test', () => {
        // load web page
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');

        // Verify customer login form title
        cy.xpath('//div[@id="leftPanel"]/h2').contains('Customer Login');
    })

    it('Verify Entering text in username field of customer login form', () => {
        // load web page
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');

        cy.xpath('//input[@name="username"]').type("testuser");
    })

    it('Using should & and implicity assertions', () => {
        // load web page
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');

        // cy.url() - gets current url
        // Options 1 - writing multiple assertions using 'should'
        cy.url().should('include', 'parabank.parasoft.com');
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm');
        cy.url().should('contain', 'parabank')

        // Option 2: Writing multiple assertions using 'should' & 'and'
        cy.url().should('include', 'parabank.parasoft.com');
        cy.url().and('eq', 'https://parabank.parasoft.com/parabank/index.htm');
        cy.url().and('contain', 'parabank')
    });

    it('Using expect & assert explicit assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type("admin");
        cy.get("input[placeholder='Password']").type("admin123");

        // BDD - expet
        cy.get("button[type='submit']").then(e => {
            const txt = e.text();
            expect(txt).to.contain('Login');
        }).click();

        // TDD - assert
        cy.get('p.oxd-userdropdown-name').then(e => {
            const txt = e.text();
            assert.equal(txt, 'Rutuja Gawde');
        })
    })

});


//div[@id="leftPanel"]/h2