import { assert } from 'chai'
import { Base64 } from 'js-base64';
import { When, Then, JsonFormatter } from 'cucumber'
import { ForgotPwdObject, ConfirmPwdObject, ForgotPwdMessObject } from '../page-object/ForgotPassword.po';
import { ForgotPasswordData, ForgotPasswordMess } from '../data/Data_ForgotPassword'
import { LoginSuccessMessage } from "../data/Data_Login";
import { LoginSuccessObjects } from "../page-object/Login.po"

/* TestCase018 */
When('User blank email field request', () => {
    $(ForgotPwdObject.btn_forgotpwd).click();
    browser.pause(5000)
    $(ForgotPwdObject.btn_submit).scrollIntoView();
    $(ForgotPwdObject.btn_submit).click();
})
Then('User can\'t request new password 1st', () => {
    browser.pause(5000)
    assert.equal($(ForgotPwdMessObject.lbl_blankemail).getText(), ForgotPasswordMess.error_blankemail, '');
})

/* TestCase019 */
When('User input doesn\'t exisiting email', () => {
    $(ForgotPwdObject.txt_emailforgot).setValue(ForgotPasswordData.user_emailwrong);
    $(ForgotPwdObject.btn_submit).scrollIntoView();
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
    $(ForgotPwdObject.btn_submit).scrollIntoView();
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
    const GraphQLClient = require('@testmail.app/graphql-request').GraphQLClient;
    const testmailClient = new GraphQLClient(
        // API endpoint:
        'https://api.testmail.app/api/graphql',
        // Use your API key:
        { headers: { 'Authorization': 'Bearer 8af5eac9-f446-4734-9f99-0de884a0f949' } }
    );

    testmailClient.request(`{
        inbox (
          namespace:"6pku9"
          tag: "tan1"
          advanced_filters:[{
            field:subject
            match:exact
            action:include
            value:"Login Information"
          }]
          livequery:true
          ) {
            result
            message
            emails {
              from
              from_parsed {
                address
                name
              }
              subject
              html
            }
          }
      }`).then((data) => {
        var abc = data.inbox["emails"]
        var xyz = $$(abc)["html"]
        var ueh = xyz.match(/href="(.*?)"/g)
        console.log(ueh)
    });
    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    // // var requestToken = new XMLHttpRequest();
    // // var urltoken = 'https://accounts.google.com/o/oauth2/token?curl &client_id=935988242274-alvlgld110kedpa92p7jk5hajes7uqq4.apps.googleusercontent.com&client_secret=tyTE9FeCW6ON7pMw6z3RkoCy&refresh_token=1//0gsIqDzubA_c9CgYIARAAGBASNwF-L9Iro0Z974Ii33zB6bHylVHBVzuqb9WmjCqeGlK0VjfZ2G5kq2nftzchnCRfgtuCUacsRHE&grant_type=refresh_token'
    // // requestToken.open('POST', urltoken, false)
    // // requestToken.send()
    // // var responeToken = requestToken.responseText
    // // var jsonToken = JSON.parse(responeToken)
    // // var token = jsonToken["access_token"];

    // // var requestEmail = new XMLHttpRequest();
    // // var urlgmaillist = 'https://www.googleapis.com/gmail/v1/users/me/messages/'
    // // requestEmail.open('GET', urlgmaillist, false)
    // // requestEmail.setRequestHeader('Authorization', 'Bearer ' + token);
    // // requestEmail.send()
    // // var responeEmail = requestEmail.responseText
    // // var jsonEmail = JSON.parse(responeEmail)


    // var requestEmailContent = new XMLHttpRequest();
    // var urlgmailcontent = 'https://www.googleapis.com/gmail/v1/users/me/messages/' + email
    // requestEmailContent.open('GET', urlgmailcontent, false)
    // requestEmailContent.setRequestHeader('Authorization', 'Bearer ' + token);
    // requestEmailContent.send()
    // var responeEmailContent = requestEmailContent.responseText
    // var jsonEmailContent = JSON.parse(responeEmailContent)
    // var emailContent = jsonEmailContent["payload"]["body"]["data"]
    // var emaildecode = Base64.decode(emailContent)

    // var hyperlink = $$(emaildecode)["selector"]
    // var link = hyperlink.match(/href="(.*?)"/g)
    // link = "data-123".replace('data-','');
    // console.log(link)
    // browser.url(link)
    // browser.switchWindow('https://staging.app.magicmap.com.au/');
    // $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 1st', () => {
    // assert.equal($(ForgotPwdMessObject.lbl_blankpwd).getText(), ForgotPasswordMess.error_blankpwd, '');
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
    // assert.equal($(ForgotPwdMessObject.lbl_invalidfeedback).getText(), ForgotPasswordMess.error_blankpwd, '');
})

/* TestCase024 */
When('User input password to short and blank password confirm', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 4th', () => {
    assert.equal($(ForgotPwdMessObject.lbl_invalidfeedback).getText(), ForgotPasswordMess.error_pwdshort, '');
    // assert.equal($(ForgotPwdMessObject.lbl_pwdnotmatch).getText(), ForgotPasswordMess.error_pwdnotmatch, '');
})

/* TestCase025 */
When('User input password and password confirm to short', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.txt_newpwdconf).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 5th', () => {
    assert.equal($(ForgotPwdMessObject.lbl_invalidfeedback).getText(), ForgotPasswordMess.error_pwdshort, '');
})

/* TestCase026 */
When('User input password and password confirm don\'t match', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.txt_newpwdconf).setValue(ForgotPasswordData.user_pwdshort);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can\'t change password 6th', () => {
    assert.equal($(ForgotPwdMessObject.lbl_invalidfeedback).getText(), ForgotPasswordMess.error_pwdnotmatch, '');
})

/* TestCase027 */
When('User input valid password and password confirm', () => {
    $(ConfirmPwdObject.txt_newpwd).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.txt_newpwdconf).setValue(ForgotPasswordData.user_pwdcorrect);
    $(ConfirmPwdObject.btn_changemypassword).click();
})
Then('User can login successfully with new password', () => {
    assert.equal($(LoginSuccessObjects.lbl_success_login).getText(), LoginSuccessMessage.login_success, '');
})