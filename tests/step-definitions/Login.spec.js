import { When, Then } from "cucumber";
import { assert } from 'chai'
import { LoginData, LoginErrorMessage, LoginSuccessMessage } from "../data/Data_Login";
import { LoginObjects, LoginErrorObjects, LoginSuccessObjects } from "../page-object/Login.po"

/* TestCase002 */
When("User blank 2 field", () => {
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 1st", () => {
    assert.equal($(LoginErrorObjects.lbl_error_blank).getText(), LoginErrorMessage.blank_error,'');
})

/* TestCase003 */
When("User blank email field", () => {
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 2nd", () => {
    assert.equal($(LoginErrorObjects.lbl_error_blank).getText(), LoginErrorMessage.blank_error,'');
})

/* TestCase004 */
When("User blank password field", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 3rd", () => {
    assert.equal($(LoginErrorObjects.lbl_error_blank).getText(), LoginErrorMessage.blank_error,'');
})

/* TestCase005 */
When("User input incorrect email", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email_incorrect);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 4th", () => {
    assert.equal($(LoginErrorObjects.lbl_error_inccorect).getText(), LoginErrorMessage.input_error,'');
})

/* TestCase006 */
When("User input incorrect password field", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_email_incorrect);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 5th", () => {
    assert.equal($(LoginErrorObjects.lbl_error_inccorect).getText(), LoginErrorMessage.input_error,'');
})

/* TestCase007 */
When("User input correct email and password", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can login succesfull", () => {
    assert.equal($(LoginSuccessObjects.lbl_success_login).getText(), LoginSuccessMessage.login_success,'');
})