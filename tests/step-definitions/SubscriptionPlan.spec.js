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
