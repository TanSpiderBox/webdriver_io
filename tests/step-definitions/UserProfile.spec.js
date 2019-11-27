import { Given, When, Then } from "cucumber"
import { assert } from "chai"
import { UserProfileData, UserErrorData, UserValidData } from "../data/Data_UserProfile"
import { ProfileObject, UserProfleObject, UserProfileValidation } from "../page-object/UserProfile.po"
import { LoginSuccessMessage } from "../data/Data_Login"
import { LoginSuccessObjects } from "../page-object/Login.po"

/* TestCase028 */
When('User select submenu User Profile', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_userProfile).click()
})

Then('System display User Profile Screen with all correct information of user', () => {
    browser.pause(2000)
    assert.equal($(UserProfileValidation.user_firstname).getText(),UserProfileData.user_firstname,'')
    assert.equal($(UserProfileValidation.user_lastname).getText(),UserProfileData.user_lastname,'')
    assert.equal($(UserProfileValidation.user_email).getText(),UserProfileData.user_email,'')
    assert.equal($(UserProfileValidation.user_type).getText(),UserProfileData.user_type,'')
})

/* TestCase029 */
When('User input valid all password infomation', () => {
    // $(UserProfleObject.txt_changePw).click();
    $(UserProfleObject.txt_currentpwd).setValue(UserProfileData.user_currentpwd);
    $(UserProfleObject.txt_newpwd).setValue(UserProfileData.user_newpwd);
    $(UserProfleObject.txt_confpwd).setValue(UserProfileData.user_confpwd);
    $(UserProfleObject.btn_pwdsub).click();
})

Then('User change password succesful', () => {
    assert.equal($(UserProfileValidation.user_namesubscription).getText(), UserValidData.user_updatesuccess,'');
})

/* TestCase030 */
When('User input email and new password', () => {
    $(ProfileObject.btn_user).click();
    $(ProfileObject.btn_signOut).click();
    $(UserProfleObject.txt_email).setValue(UserProfileData.user_email);
    $(UserProfleObject.txt_newpwd).setValue(UserProfileData.user_newpwd);
    $(UserProfleObject.btn_pwdsub).click();
})

Then('User login system successfull with new password', () => {
    assert.equal($(LoginSuccessObjects.lbl_success_login).getText(), LoginSuccessMessage.login_success,'');
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_userProfile).click()
})

/* TestCase031 */
When('User input incorrect old password', () => {
    $(UserProfleObject.txt_changePw).click();
    $(UserProfleObject.txt_currentpwd).setValue(UserProfileData.user_incorrectpwd);
    $(UserProfleObject.txt_newpwd).setValue(UserProfileData.user_newpwd);
    $(UserProfleObject.txt_confpwd).setValue(UserProfileData.user_confpwd);
    $(UserProfleObject.btn_pwdsub).click();
})

Then('User can\'t change password in User Information screen', () => {
    assert.equal($(UserProfileValidation.user_errorpwd).getText(), UserErrorData.user_error_currentpwd,'');
})

/* TestCase032 */
When('User input doesn\'t match new password', () => {
    $(UserProfleObject.txt_currentpwd).setValue(UserProfileData.user_currentpwd);
    $(UserProfleObject.txt_newpwd).setValue(UserProfileData.user_newpwd);
    $(UserProfleObject.txt_confpwd).setValue(UserProfileData.user_incorrectpwd);
    $(UserProfleObject.btn_pwdsub).click();
})

Then('User can\'t change password in User Information screen 2nd', () => {
    assert.equal($(UserProfileValidation.user_errornewpwd).getText(), UserErrorData.user_error_matchpwd,'');
})

/* TestCase033 */
When('User clicks button pricing', () => {
    // $(UserProfleObject.btn_pwdback).click()
    $(UserProfleObject.btn_linksub).click()
    $(UserProfleObject.btn_linksub).click()
})

Then('System move to subscriptions page', () => {
    browser.pause(2000);
    assert.equal($(UserProfileValidation.user_subpage).getText(), UserValidData.user_subpage,'');
})

/* TestCase034 */
When('User clicks button Transaction History', () => {
    $(ProfileObject.btn_subuserprofile).click()
    $(UserProfleObject.btn_linkbill).click()
})

Then('System move to billing information page', () => {
    browser.pause(2000);
    assert.equal($(UserProfileValidation.user_billpage).getText(), UserValidData.user_billpage,'');
    $(ProfileObject.btn_subuserprofile).click();
})

/* TestCase036 */
When('User browse to folder and select image', () => {
    $(ProfileObject.btn_avata).click();
    const localPath = 'D:/test.jpg';
    const remoteFilePath = browser.uploadFile(localPath);
    $(ProfileObject.btn_upavata).setValue(remoteFilePath);
})

Then('User can update new image 2nd', () => {
    // assert.equal($(UserProfileValidation.user_img))
})