/// <reference types = "Cypress"/>
import homePage from '../pageObject/accessHomepage'
import 'cypress-iframe'

describe('describe',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })




    it('Orders',function(){
        cy.viewport(1366,768)
        const link = new homePage()
        //link.visitLink()
        cy.visit('https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LdZCBclAAAAAC-iCv18jL2rNC5F1dSkoV1JvOqp&co=aHR0cHM6Ly9hZG1pbi51cmJhbmxlZGdlci5hcHA6NDQz&hl=en&type=image&v=vpEprwpCoBMgy-fvZET0Mz6L&theme=light&size=normal&badge=bottomright&cb=5e67i299i58t')
        cy.get('.recaptcha-checkbox-border').click().should('be.checked')
       })

})