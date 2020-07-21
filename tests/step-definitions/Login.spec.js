import { When, Then } from "cucumber";
import { assert } from 'chai'
import { LoginData, LoginErrorMessage, LoginSuccessMessage } from "../data/Data_Login";
import { LoginObjects, LoginErrorObjects, LoginSuccessObjects } from "../page-object/Login.po"

/* LG002 */
When("User blank 2 field", () => {
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system with blank 2 field", () => {
    assert.equal($(LoginErrorObjects.lbl_error_blank).getText(), LoginErrorMessage.blank_error,'');
})

/* LG003 */
When("User blank email field", () => {
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system with blank email field", () => {
    assert.equal($(LoginErrorObjects.lbl_error_blank).getText(), LoginErrorMessage.blank_error,'');
})

/* LG004 */
When("User blank password field", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.btn_submit).scrollIntoView();
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system with blank password field", () => {
    assert.equal($(LoginErrorObjects.lbl_error_blank).getText(), LoginErrorMessage.input_error,'');
})

/* LG005 */
When("User input incorrect email", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email_incorrect);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).scrollIntoView();
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system with incorrect email", () => {
    assert.equal($(LoginErrorObjects.lbl_error_inccorect).getText(), LoginErrorMessage.input_error,'');
})

/* LG006 */
When("User input incorrect password field", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_email_incorrect);
    $(LoginObjects.btn_submit).scrollIntoView();
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system with incorrect password", () => {
    assert.equal($(LoginErrorObjects.lbl_error_inccorect).getText(), LoginErrorMessage.input_error,'');
})

/* LG007 */
When("User input correct email and password", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).scrollIntoView();
    $(LoginObjects.btn_submit).click();
})
Then("User can login succesfully", () => {
    assert.equal($(LoginSuccessObjects.lbl_success_login).getText(), LoginSuccessMessage.login_success,'');
})