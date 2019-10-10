import { Given, When, Then } from "cucumber"
import { assert } from "chai"
import {} from "../data/Data_UserProfile"
import { ProfileObject, UserProfleObject, UserProfileValidation } from "../page-object/UserProfile.po"

/* TestCase028 */
When('User select submenu User Profile', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
})

Then('System display User Profile Screen with all correct information of user', () => {
    assert.isObject($(UserProfileValidation.user_namesubscription),)
    assert.isObject($(UserProfileValidation.user_email),)
    assert.isObject($(UserProfileValidation.user_errorpwd),)
})

/* TestCase029 */
When('User input valid all password infomation', () => {
    $(UserProfleObject.txt_changePw).click();
    $(UserProfleObject.txt_currentpwd).setValue();
    $(UserProfleObject.txt_newpwd).setValue();
    $(UserProfleObject.txt_confpwd).setValue();
    $(UserProfleObject.btn_pwdsub).click();
})

Then('User change password succesful', () => {
    assert.isObject($(UserProfileValidation.user_namesubscription),);
})

/* TestCase030 */
When('User input email and new password', () => {
    $(ProfileObject.btn_user).click();
    $(ProfileObject.lbl_signOut).click();
    
})

Then('User login system successfull with new password', () => {

})

/* TestCase031 */
When('User input incorrect old password', () => {

})

Then('User can\'t change password in User Information screen', () => {

})

/* TestCase032 */
When('User input doesn\'t match new password', () => {

})

Then('User can\'t change password in User Information screen 2nd', () => {

})

/* TestCase033 */
When('User clicks button pricing', () => {

})

Then('System move to subscriptions page', () => {

})

/* TestCase034 */
When('User clicks button Transaction History', () => {

})

Then('System move to billing information page', () => {

})

/* TestCase035 */
When('User drag and drop image', () => {

})

Then('User can update new image 1st', () => {

})

/* TestCase036 */
Given('User browse to folder and select image', () => {

})

When('User can update new image 2nd', () => {

})

Then('', () => {

})

/* TestCase037 */
Given('', () => {

})

When('', () => {

})

Then('', () => {

})

/* TestCase038 */
Given('', () => {

})

When('', () => {

})

Then('', () => {

})