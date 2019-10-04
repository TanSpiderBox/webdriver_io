import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("User input correct email and password", () => {
    cy.get('input[id="user_email"]').type('tan@spiderbox.design');
    cy.get('input[id="user_password"]').type('12345679');
    cy.get('button[name="button"]').click();
})
Then("User can login system", () => {
    cy.xpath('//*[text()="Dashboard"]').and(($h1) => {
        expect($h1.get(0).textContent, 'Dashboard').to.equal('Dashboard')
    })
})