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
    assert.isObject($(UserProfileValidation.user_namesubscription))
    assert.isObject($(UserProfileValidation.user_email))
    assert.isObject($(UserProfileValidation.user_errorpwd))
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
    assert.isObject($(UserProfileValidation.user_errorpwd), UserErrorData.user_error_currentpwd);
})

/* TestCase032 */
When('User input doesn\'t match new password', () => {
    $(UserProfleObject.txt_currentpwd).setValue(UserProfileData.user_currentpwd);
    $(UserProfleObject.txt_newpwd).setValue(UserProfileData.user_newpwd);
    $(UserProfleObject.txt_confpwd).setValue(UserProfileData.user_incorrectpwd);
    $(UserProfleObject.btn_pwdsub).click();
})

Then('User can\'t change password in User Information screen 2nd', () => {
    assert.isObject($(UserProfileValidation.user_errornewpwd), UserErrorData.user_error_matchpwd);
})

/* TestCase033 */
When('User clicks button pricing', () => {
    $(UserProfleObject.btn_linksub).click()
    $(UserProfleObject.btn_linksub).click()
})

Then('System move to subscriptions page', () => {
    browser.pause(2000);
    assert.isObject($(UserProfileValidation.user_subpage), UserValidData.user_subpage);
})

/* TestCase034 */
When('User clicks button Transaction History', () => {
    $(ProfileObject.btn_subuserprofile).click()
    $(UserProfleObject.btn_linkbill).click()
})

Then('System move to billing information page', () => {
    browser.pause(2000);
    assert.isObject($(UserProfileValidation.user_billpage), UserValidData.user_billpage);

})

/* TestCase035 */
When('User drag and drop image', () => {
    $(ProfileObject.btn_subuserprofile).click();
    $(ProfileObject.btn_avata).click();
    const localPath= 'D:/20190917141505.png';
    // const remoteFilePath = browser.uploadFile(localPath);
    $(localPath).dragAndDrop($(ProfileObject.btn_upavata), 1000);
})

Then('User can update new image 1st', () => {

})

/* TestCase036 */
Given('User browse to folder and select image', () => {
    const localPath= 'D:/test.jpg';
    const remoteFilePath = browser.uploadFile(localPath);
    $(ProfileObject.btn_upavata).setValue(remoteFilePath);
})

When('User can update new image 2nd', () => {
    
})

Then('', () => {

})

/* TestCase029 */
When('User input valid all password infomation', () => {
    $(UserProfleObject.txt_currentpwd).setValue();
    $(UserProfleObject.txt_newpwd).setValue();
    $(UserProfleObject.txt_confpwd).setValue();
    $(UserProfleObject.btn_pwdsub).click();
})

Then('User change password succesful', () => {
    assert.isObject($(UserProfileValidation.user_namesubscription));
})

/* TestCase030 */
When('User input email and new password', () => {
    $(ProfileObject.btn_user).click();
    $(ProfileObject.lbl_signOut).click();
    $(ProfileObject.txt_email).setValue();
    $(ProfileObject.txt_newpwd).setValue();
    $(ProfileObject.btn_pwdsub).click();
})

Then('User login system successfull with new password', () => {
    assert.isObject($(LoginSuccessObjects.lbl_success_login), LoginSuccessMessage.login_success);
})