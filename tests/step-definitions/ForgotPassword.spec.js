import { assert } from 'chai'
import { When, Then } from 'cucumber'
import { ForgotPwdObject, ConfirmObject, PwdConfObject } from '../page-object/ForgotPassword.po'

When('User input valid password and password confirm', () => {
    browser.setTimeout({ 'implicit': 5000 })
    $(ForgotPwdObject.btn_forgotpwd).click();
    $(ForgotPwdObject.txt_emailforgot).setValue('tan@spiderbox.design');
    $(ForgotPwdObject.btn_submit).click();
    browser.url('https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Drm%26ogbl&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    $(ConfirmObject.txt_emailconf).setValue('tan@spiderbox.design');
    $(ConfirmObject.btn_contiunue).click();
    browser.setTimeout({ 'implicit': 5000 })
    $(ConfirmObject.txt_pwdconf).setValue('TloveN@5121*');
    browser.setTimeout({ 'implicit': 5000 })
    $(ConfirmObject.btn_contiunue).click();
    $(ConfirmObject.lbl_emailconf).click();
    $(ConfirmObject.hyperlink_confi).click();
})
Then('User can login succesfull with new password', () => {
    browser.setTimeout({ 'implicit': 5000 })
    $(PwdConfObject.txt_newpwd).setValue('123456789');
    $(PwdConfObject.txt_newpwdconf).setValue('123456789');
    $(PwdConfObject.btn_login).click();
})