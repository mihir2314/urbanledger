class homePage
{
    visitLink(){
    return cy.visit('https://admin.urbanledger.app/login')
    }

    // login(){
    // cy.get('#emailId').type(this.data.email)
    // cy.log(this.data.email)
    // cy.get('#password').type(this.data.pass)
    // return cy.get('#login-btn').click()
    // }
}

export default homePage;