/// <reference types = "Cypress"/>
import homePage from '../pageObject/accessHomepage'
import 'cypress-iframe'

describe('describe',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
//     beforeEach(function(){
//         cy.viewport(1366,768)
//         const link = new homePage()
//         link.visitLink()
   
//         cy.fixture('example').then(function(data){
//             this.data=data  
//             cy.get('#emailId').type(this.data.logincreds.email)
//             cy.wait(1000)
//             cy.get('#pass').type(this.data.logincreds.pass)
//             cy.wait(1000)
//             cy.frameLoaded("iframe[title='reCAPTCHA']")
//             cy.iframe().find("span[role='checkbox']").click()
//             cy.pause()
// //           cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
           
//         //     .then($iframe =>{
//         //     const $body = $iframe.contents().find('body');
//         //     cy.wrap($body)
//         //     .find("span[role='checkbox']")
//         //     .should('be.visible')
//         //     .click()
//         //    }
//         //    )
           
//         })
//         // cy.iframe.find('[style="width: 304px; height: 78px;"] > div > iframe').click()

//         cy.get('#login-btn').click()
//     })



    it('Orders',function(){
       // cy.viewport(1366,768)
       localStorage.clear()
        const link = new homePage()
        link.visitLink()
       
        cy.fixture('example').then(function(data){
            this.data=data  
           cy.get('#emailId').type(this.data.logincreds.email)
            cy.wait(1000)
            cy.get('#pass').type(this.data.logincreds.pass)
            cy.wait(1000)
            // cy.frameLoaded("iframe[title='reCAPTCHA]",()=>{
            //  //   cy.iframe().findByText('reCAPTCHA').click()
            //  cy.iframe().find('.recaptcha-checkbox-border').click()
                

            // })
            // cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
            
           
            cy.get("iframe[title='reCAPTCHA']").then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
           // const body1 = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').click({force:true})
            cy.wait(1000)
            
         //   //cy.wrap(body1).find('[title=“Solve the challenge”]').click()
            
        })
        cy.get("iframe[title='recaptcha challenge expires in two minutes']").then((recaptchaIframe1)=>{
            const body1 = recaptchaIframe1.contents()
            
           // cy.get('.button-holder help-button-holder').shadow().find('#solver-button').click()
            cy.wrap(body1).find('.solver-button').click({ includeShadowDom: true })
        })
        
       
            
           
        })
    

        cy.get('#login-btn').click()


        // cy.get('[href="/orders"] > .MuiButtonBase-root').click({force:true})
        // cy.get('.merchant_title').should('have.text','Orders')
    })

    // it('KYC',function(){
    //     cy.get('[href="/kyc"] > .MuiButtonBase-root').click({force:true})
    // })

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