import { assert } from 'chai'
import { When, Then } from 'cucumber'
import { ForgotPwdObject, ConfirmPwdObject, ForgotPwdMessObject } from '../page-object/ForgotPassword.po';
import { ForgotPasswordData, ForgotPasswordMess } from '../data/Data_ForgotPassword'
import { LoginSuccessMessage } from "../data/Data_Login";
import { LoginSuccessObjects } from "../page-object/Login.po"


/* TestCase018 */
When('User blank email field request', () => {
    $(ForgotPwdObject.btn_forgotpwd).click();
    browser.pause(5000)
    $(ForgotPwdObject.btn_submit).click();
})
Then('User can\'t request new password 1st', () => {
    browser.pause(5000)
    assert.equal($(ForgotPwdMessObject.lbl_blankemail).getText(), ForgotPasswordMess.error_blankemail, '');
})

/* TestCase019 */
When('User input doesn\'t exisiting email', () => {
    $(ForgotPwdObject.txt_emailforgot).setValue(ForgotPasswordData.user_emailwrong);
    $(ForgotPwdObject.btn_submit).click();
})
Then('User can\'t request new password 2nd', () => {
    browser.pause(5000)
    assert.equal($(ForgotPwdMessObject.lbl_emailnotfound).getText(), ForgotPasswordMess.error_notfound, '');
})

/* TestCase20 */
When('User input exisiting email request', () => {
    browser.pause(5000)
    $(ForgotPwdObject.txt_emailforgot).setValue(ForgotPasswordData.user_emailconf);
    $(ForgotPwdObject.btn_submit).click();
})
Then('User can request new password', () => {
    browser.pause(5000)
    assert.equal($(ForgotPwdMessObject.lbl_nofi1).getText(), ForgotPasswordMess.mess_nofi1, '');
    assert.equal($(ForgotPwdMessObject.lbl_nofi2).getText(), ForgotPasswordMess.mess_nofi2, '');
    assert.equal($(ForgotPwdMessObject.lbl_nofi3).getText(), ForgotPasswordMess.mess_nofi3, '');
})

/* TestCase021 */
When('User blank password and password confirm', () => {
    browser.url(ForgotPasswordData.user_emailLink);
    $(ConfirmPwdObject.txt_emailconf).setValue(ForgotPasswordData.user_emailconf);
    $(ConfirmPwdObject.btn_contiunue).click();
    browser.setTimeout({ 'implicit': 5000 })
    $(ConfirmPwdObject.txt_pwdconf).setValue(ForgotPasswordData.user_pwdconf);
    $(ConfirmPwdObject.btn_contiunue).click();
    $(ConfirmPwdObject.lbl_emailconf).click();
    $(ConfirmPwdObject.btn_showcontent).click();
    $(ConfirmPwdObject.hyperlink_confi).click();
    const url = 'https://staging.app.magicmap.com.au'
    browser.switchWindow(url);

    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 1st', () => {
    assert.equal($(ForgotPwdMessObject.lbl_blankpwd).getText(), ForgotPasswordMess.error_blankpwd, '');
})

/* TestCase022 */
When('User blank password and iput password confirm', () => {
    $(ConfirmPwdObject.txt_newpwdconf).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 2nd', () => {
    assert.equal($(ForgotPwdMessObject.lbl_blankpwd).getText(), ForgotPasswordMess.error_blankpwd, '');
})

/* TestCase023 */
When('User blank password confirm and input password', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 3rd', () => {
    assert.equal($(ForgotPwdMessObject.lbl_pwdnotmatch).getText(), ForgotPasswordMess.error_pwdnotmatch, '');
})

/* TestCase024 */
When('User input password to short and blank password confirm', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 4th', () => {
    assert.equal($(ForgotPwdMessObject.lbl_pwdshort).getText(), ForgotPasswordMess.error_pwdshort, '');
    assert.equal($(ForgotPwdMessObject.lbl_pwdnotmatch).getText(), ForgotPasswordMess.error_pwdnotmatch, '');
})

/* TestCase025 */
When('User input password and password confirm to short', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.txt_newpwdconf).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 5th', () => {
    assert.equal($(ForgotPwdMessObject.lbl_pwdshort).getText(), ForgotPasswordMess.error_pwdshort, '');
})

/* TestCase026 */
When('User input password and password confirm don\'t match', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.txt_newpwdconf).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 6th', () => {
    assert.equal($(ForgotPwdMessObject.lbl_pwdnotmatch).getText(), ForgotPasswordMess.error_pwdnotmatch, '');
})

/* TestCase027 */
When('User input valid password and password confirm', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.txt_newpwdconf).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can login succesfull with new password', () => {
    assert.equal($(LoginSuccessObjects.lbl_success_login).getText(), LoginSuccessMessage.login_success, '');
})