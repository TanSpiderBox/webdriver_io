import { Given, When, Then } from "cucumber";
import { assert } from 'chai'



Given("User Open website MMAP", () => {
    browser.url("https://staging.app.magicmap.com.au/");
    
});

When("User input all valid infomation", () => {
    const user_email = $('input[id="user_email"]');
    user_email.setValue('tan@spiderbox.design');
    const user_password = $('input[id="user_password"]');
    user_password.setValue('123456789');
    const button = $('button[name="button"]')
    button.click();
    browser.takeScreenshot();
})

Then("User can login system", () => {
    const expected = 'Dashboard'
    const actual = $('//*[text()="Dashboard"]')
    assert.isObject(actual,expected)
})