import { When, Then } from "cypress-cucumber-preprocessor/steps";

/* TestCase003 */
When("User blank 2 field", () => {
  // cy.get('input[id="user_email"]').type('tan@spiderbox.design');
  // cy.get('input[id="user_password"]').type('123456789');
  cy.get('button[name="button"]').click();
})
Then("User can't login system 1st", () => {
  cy.xpath('//*[text()="Please input Email and password to sign in."]').and(($div) => {
    expect($div.get(0).textContent).to.equal('Please input Email and password to sign in.')
  })
})

/* TestCase004 */
When("User blank email field", () => {
  // cy.get('input[id="user_email"]').type('tan@spiderbox.design');
  cy.get('input[id="user_password"]').type('123456789');
  cy.get('button[name="button"]').click();
})
Then("User can't login system 2nd", () => {
  cy.xpath('//*[text()="Please input Email and password to sign in."]').and(($div) => {
    expect($div.get(0).textContent).to.equal('Please input Email and password to sign in.')
  })
})

/* TestCase005 */
When("User blank password field", () => {
  cy.get('input[id="user_email"]').type('tan@spiderbox.design');
  // cy.get('input[id="user_password"]').type('123456789');
  cy.get('button[name="button"]').click();
})
Then("User can't login system 3rd", () => {
  cy.xpath('//*[contains(@class,"invalid-feedback")]').and(($div) => {
    expect($div.get(0).textContent).to.equal('Wrong Email/ password.\nPlease input again.')
  })
})

/* TestCase006 */
When("User input incorrect email", () => {
  cy.get('input[id="user_email"]').type('tan@spiderbox1.design');
  cy.get('input[id="user_password"]').type('123456789');
  cy.get('button[name="button"]').click();
})
Then("User can't login system 4th", () => {
  cy.xpath('//*[contains(@class,"invalid-feedback")]').and(($div) => {
    expect($div.get(0).textContent).to.equal('Wrong Email/ password.\nPlease input again.')
  })
})

/* TestCase007 */
When("User input incorrect password field", () => {
  cy.get('input[id="user_email"]').type('tan@spiderbox.design');
  cy.get('input[id="user_password"]').type('0123456789');
  cy.get('button[name="button"]').click();
})
Then("User can't login system 5th", () => {
  cy.xpath('//*[contains(@class,"invalid-feedback")]').and(($div) => {
    expect($div.get(0).textContent).to.equal('Wrong Email/ password.\nPlease input again.')
  })
})