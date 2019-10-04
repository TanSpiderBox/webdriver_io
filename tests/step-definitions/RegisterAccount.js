import { When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  txt_firstName,
  txt_lastName,
  txt_email,
  txt_password,
  errormessage_requi,
  errormessage_pwconfirm,
  errormessage_usrrole,
  errormessage_emailexist,
  errormessage_pwshort,
  sucessmessage_congra
} from "../dataset/dataregister.js";

/* TestCase010 */
When("User blank all all field", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('label[for="user_role_contractor"]').click();
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 1st", () => {
  cy.xpath("//input[@id=\"user_first_name\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_requi)
  })
  cy.xpath("//input[@id=\"user_email\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_requi)
  })
  cy.xpath("//input[@id=\"user_password\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_requi)
  })
})

/* TestCase011 */
When("User blank First Name", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type(txt_email);
  cy.get('input[id="user_password"]').type(txt_password);
  cy.get('input[id="user_password_confirmation"]').type(1);
  cy.get('label[for="user_role_contractor"]').click();
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 2nd", () => {
  cy.xpath("//input[@id=\"user_first_name\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_requi)
  })
})

/* TestCase012 */
When("User blank Password", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_first_name"]').type(txt_firstName);
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type(txt_email);
  cy.get('label[for="user_role_contractor"]').click();
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 3rd", () => {
  cy.xpath("//input[@id=\"user_password\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_requi)
  })
})

/* TestCase013 */
When("User blank Confirm Password", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_first_name"]').type(txt_firstName);
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type(txt_email);
  cy.get('input[id="user_password"]').type(txt_password);
  cy.get('label[for="user_role_contractor"]').click();
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 4th", () => {
  cy.xpath("//input[@id=\"user_password_confirmation\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_pwconfirm)
  })
})

/* TestCase014 */
When("User don't select User Role", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_first_name"]').type(txt_firstName);
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type(txt_email);
  cy.get('input[id="user_password"]').type(txt_password);
  cy.get('input[id="user_password_confirmation"]').type(txt_password);
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 5th", () => {
  cy.xpath("//div[@class=\"invalid-feedback d-block\"]").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_usrrole)
  })
})

/* TestCase015 */
When("User input Password don't match", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_first_name"]').type(txt_firstName);
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type(txt_email);
  cy.get('input[id="user_password"]').type(txt_password);
  cy.get('input[id="user_password_confirmation"]').type(1);
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 6th", () => {
  cy.xpath("//input[@id=\"user_password_confirmation\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_pwconfirm)
  })
})
/* TestCase016 */
When("User input Existing Email", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_first_name"]').type(txt_firstName);
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type('2@temp-link.net');
  cy.get('input[id="user_password"]').type(txt_password);
  cy.get('input[id="user_password_confirmation"]').type(txt_password);
  cy.get('label[for="user_role_contractor"]').click();
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 7th", () => {
  cy.xpath("//input[@id=\"user_email\"]/following-sibling::div").and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_emailexist)
  })
})

/* TestCase017 */
When("User input Password is too short", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_first_name"]').type(txt_firstName);
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type(txt_email);
  cy.get('input[id="user_password"]').type(1);
  cy.get('input[id="user_password_confirmation"]').type(txt_password);
  cy.get('label[for="user_role_contractor"]').click();
  cy.get('button[name="button"]').click();
})
Then("User can't register new account 8th", () => {
  cy.xpath('//input[@id="user_password"]/following-sibling::div').and(($div) => {
    expect($div.get(0).textContent).to.equal(errormessage_pwshort)
  })
})

/* TestCase008 */
When("User input all valid infomation", () => {
  cy.xpath('//*[text()="Register"]').click();
  cy.get('input[id="user_first_name"]').type(txt_firstName);
  cy.get('input[id="user_surname"]').type(txt_lastName);
  cy.get('input[id="user_email"]').type(txt_email);
  cy.get('input[id="user_password"]').type(txt_password);
  cy.get('input[id="user_password_confirmation"]').type(txt_password);
  cy.get('label[for="user_role_contractor"]').click();
  cy.get('button[name="button"]').click();
})
Then("User create account successful", () => {
  cy.xpath('//*[text()="Congratulations!"]').and(($h3) => {
    expect($h3.get(0).textContent).to.equal(sucessmessage_congra)
  })
})