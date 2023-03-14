/// <reference types = "Cypress"/>
import homePage from '../pageObject/accessHomepage'

describe('describe',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    beforeEach(function(){
        cy.viewport(1366,768)
        const link = new homePage()
        link.visitLink()    
        cy.fixture('example').then(function(data){
            this.data=data  
            cy.get('#emailId').type(this.data.logincreds.email)
            cy.get('#password').type(this.data.logincreds.pass)
            cy.get('#login-btn').click()
        })
    })



    // it('Orders',function(){
    //     cy.get('[href="/orders"] > .MuiButtonBase-root').click({force:true})
    //     cy.get('.merchant_title').should('have.text','Orders')
    // })

    it('KYC',function(){
        cy.get('[href="/kyc"] > .MuiButtonBase-root').click({force:true})
    })

    // it('Super Merchants',function(){
    //     cy.get('[href="/supermerchant"] > .MuiButtonBase-root').click({force:true}) 
    // })

    // it('Merchants',function(){
    //     cy.get('[href="/merchants"] > .MuiButtonBase-root').click({force:true})
    // })

    // it('Refunds',function(){
    //     cy.get('[href="/refund"] > .MuiButtonBase-root').click({force:true}) 
    // })

    // it('Premium Order',function(){
    //     cy.get('[href="/premiumorders"] > .MuiButtonBase-root').click({force:true})
    // })

    //     cy.get('[href="/settlements"] > .MuiButtonBase-root').click({force:true})
    // })

    // it('Reports',function(){
    //     cy.get('[href="/reports"] > .MuiButtonBase-root').click({force:true}) 
    // })
})