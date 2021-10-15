describe('User Onboarding App', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000');
    })

    //getters
    const firstNameInput = () => cy.get('input[name="first_name"]');
    const lastNameInput = () => cy.get('input[name="last_name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passInput = () => cy.get('input[name="password"]');
    const roleInput = () => cy.get('select[name="role"]');
    const termsInput =  () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get("button[id='submitBtn']");
    it('proper inputs on page showing', () =>{
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist')
        roleInput().should('exist');
        termsInput().should('exist');
        submitBtn().should('exist');

    })
    describe('Filling in inputs and canceling', () => {
        it('submit button starting off disabled', () => {
            submitBtn().should('be.disabled');
        })
        it('inputs can accept typing from user', () => {
            firstNameInput()
            .should('have.value', '')
            .type('BRAD HERE')
            .should('have.value', 'BRAD HERE')
            lastNameInput()
            .should('have.value', '')
            .type('not brad')
            .should('have.value', 'not brad')
            passInput()
            .should('have.value', '')
            .type('Password1234!')
            .should('have.value', 'Password1234!')

        })
        it('button allows submission after form filled out', () =>{
            firstNameInput()
            .type('Bradley')
            lastNameInput()
            .type('michaels')
            emailInput()
            .type('Emailaddress@gmail.com')
            passInput()
            .type('Password1234!')
            roleInput()
            .select('frodo')
            termsInput()
            .check({ force: true })
            submitBtn()
            .should('be.enabled')
        })
    })
})