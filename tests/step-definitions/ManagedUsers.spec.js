import { When, Then } from "cucumber"
import { assert } from "chai"
import { ProfileObject } from "../page-object/UserProfile.po"
import { ManagedUsersData } from "../data/Data_ManagedUsers"
import { ManagedUserObj } from "../page-object/ManagedUsers.po"
import { RegisData } from "../data/Data_Register"
import { BillingInfoData, } from "../data/Data_Subscriptions"
import { SubscriptionPlanObject, BillingInfoObject, } from "../page-object/Subscription.po"

/* MU001 */
When('User invite new Users', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_managedusers).click()

    $(ManagedUserObj.btn_invite).click()
    $(ManagedUserObj.txt_inputemail).setValue(ManagedUsersData.member_email)
    $(ManagedUserObj.btn_confirm).click()
})

Then('User invite new Users succesfull', () => {
    assert.equal($(ManagedUserObj.lbl_verify).getText(), ManagedUsersData.lbl_inviteverify, '');
    $(ManagedUserObj.btn_close).click()
})

/* MU002 */
When('User click button reinvite', () => {
    $(ManagedUserObj.btn_dropdown).click()
    $(ManagedUserObj.btn_resend).click()
})

Then('User can reinvite succesfull', () => {
    assert.equal($(ManagedUserObj.lbl_verify).getText(), ManagedUsersData.lbl_resend, '');
    browser.keys("\uE007")
})

/* MU003 */
When('User input email of Owner', () => {
    $(ManagedUserObj.btn_invite).click()
    $(ManagedUserObj.txt_inputemail).setValue(RegisData.user_email)
    $(ManagedUserObj.btn_confirm).click()
})
Then('System display error You cannot invite yourself', () => {
    assert.equal($(ManagedUserObj.lbl_verify).getText(), ManagedUsersData.lbl_error, '');
    browser.keys("\uE007")
})

/* MU004 */
When('User click button unlock Users and buy new plan', () => {
    $(ManagedUserObj.btn_invite).click()
    $(ManagedUserObj.txt_inputemail).setValue(ManagedUsersData.locked_email)
    $(ManagedUserObj.btn_confirm).click()
    browser.keys("\uE007")

    $(ManagedUserObj.btn_dropdown2).click()
    $(ManagedUserObj.btn_unlock).click()
    $(ManagedUserObj.btn_upgrade).click()

    $(SubscriptionPlanObject.btn_tire1).click();
    const timeout = 50
    $(BillingInfoObject.txt_cardNumber).click();

    browser.keys(BillingInfoData.cardnumber)
    browser.pause(timeout)
    browser.keys(BillingInfoData.cardnumber)
    browser.pause(timeout)
    browser.keys(BillingInfoData.cardnumber)
    browser.pause(timeout)
    browser.keys(BillingInfoData.cardnumber)
    browser.pause(timeout)
    browser.keys(BillingInfoData.cardnumber)
    browser.pause(timeout)
    browser.keys(BillingInfoData.cardnumber)
    browser.pause(timeout)
    browser.keys(BillingInfoData.cardnumber)
    browser.pause(timeout)
    browser.keys(BillingInfoData.cardnumber)

    $(BillingInfoObject.txt_cardHolder).setValue(BillingInfoData.cardholder);

    $(BillingInfoObject.txt_expiryDate).click();
    browser.keys(BillingInfoData.expirydatemth);
    browser.pause(timeout)
    browser.keys(BillingInfoData.expirydatemyr);

    $(BillingInfoObject.txt_cvc).click();
    browser.keys(BillingInfoData.cvc);

    $(BillingInfoObject.chck_condition).click();

    $(BillingInfoObject.btn_submit).click();
    browser.pause(7000)
})
Then('User can unlock Users succesfull', () => {
    browser.keys("Escape")
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_managedusers).click()
})

When('User click button delete member', () => {
    $(ManagedUserObj.btn_dropdown).click()
    $(ManagedUserObj.btn_delete).click()
    $(ManagedUserObj.btn_close).click()
})

Then('User can delete member succesfull', () => {

})