import { When, Then } from "cucumber"
import { assert } from "chai"
import { ProfileObject } from "../page-object/UserProfile.po"
import { SubscriptionData, BillingInfoData, BillingDataVerify } from "../data/Data_Subscriptions"
import { SubscriptionPlanObject, BillingInfoObject, BillingVerifi } from "../page-object/Subscription.po"

/* SB001 */
When('User access Subscription', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_subscription).click()
})

Then('System display correct information of subscription', () => {
    assert.equal($(SubscriptionPlanObject.lbl_subscription).getText(), SubscriptionData.lbl_subscription, '')
})

/* SB002 */
When('User input decline card', () => {
    $(SubscriptionPlanObject.btn_tire1).click();
    const timeout = 50
    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('40')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('02')

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

Then("User can't add new declined card", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText().slice(42);
    assert.equal(errorcode, BillingDataVerify.errorcodedeclined, '');
    browser.keys("\uE007")
    // $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* SB003 */
When('User input insufficient funds card', () => {
    const timeout = 50
    // Go to iframe and clear card number -> works both in windows, mac, linux
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'))
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('40')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('99')
    browser.pause(timeout)
    browser.keys('95')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(7000)
})

Then("User can't add new insufficient funds card", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText().slice(42);
    assert.equal(errorcode, BillingDataVerify.errorcodeinsufficient, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB004 */
When('User input lost card', () => {
    const timeout = 50
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('40')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('99')
    browser.pause(timeout)
    browser.keys('87')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(7000)
})

Then("User can't add new lost card", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText().slice(42);
    assert.equal(errorcode, BillingDataVerify.errorcodedeclined, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB005 */
When('User input stolen card', () => {
    const timeout = 50
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('40')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('99')
    browser.pause(timeout)
    browser.keys('79')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(7000)
})

Then("User can't add new stolen card", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText().slice(42);
    assert.equal(errorcode, BillingDataVerify.errorcodedeclined, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB006 */
When('User input expired card', () => {
    const timeout = 50
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('40')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('69')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(7000)
})

Then("User can't add new expired card", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText().slice(42);
    assert.equal(errorcode, BillingDataVerify.errorcodeexpired, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB007 */
When('User input incorrect cvc card', () => {
    const timeout = 50
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('40')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('01')
    browser.pause(timeout)
    browser.keys('27')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new incorrect cvc card", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText().slice(42);
    assert.equal(errorcode, BillingDataVerify.errorincorrectcvc, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB008 */
When('User input processing error card', () => {
    const timeout = 50
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('40')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('00')
    browser.pause(timeout)
    browser.keys('01')
    browser.pause(timeout)
    browser.keys('19')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new processing error card", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText().slice(42);
    assert.equal(errorcode, BillingDataVerify.error, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB009 */
When('User input invalid card number', () => {
    const timeout = 50
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

    $(BillingInfoObject.txt_cardNumber).click();
    browser.keys('42')
    browser.pause(timeout)
    browser.keys('42')
    browser.pause(timeout)
    browser.keys('42')
    browser.pause(timeout)
    browser.keys('42')
    browser.pause(timeout)
    browser.keys('42')
    browser.pause(timeout)
    browser.keys('42')
    browser.pause(timeout)
    browser.keys('42')
    browser.pause(timeout)
    browser.keys('41')
})

Then("User can't add new invalid card number", () => {
    assert.equal($(BillingVerifi.cardverifi).getText(), BillingDataVerify.errorcodeCardNumber, '');
})
// SB002
When('User input all valid information of card', () => {
    const timeout = 50
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $('input[name="cardnumber"]').clearValue();
    browser.switchToParentFrame();

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

    $(BillingInfoObject.btn_submit).click();
    browser.pause(7000)

})
Then('User can payment succesfull', () => {
    assert.equal($(SubscriptionPlanObject.lbl_subsucess).getText(), SubscriptionData.sub_success, '');
})

When('User click button cancel', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_subscription).click()
    $(SubscriptionPlanObject.btn_verify).click();
    $(SubscriptionPlanObject.btn_confirm).click()
})
Then('User cancel subscription succesfull', () => {
    assert.equal($(SubscriptionPlanObject.btn_verify).getText(), SubscriptionData.lbl_renewal, '');
})

When('User click button renewal', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_subscription).click()
    $(SubscriptionPlanObject.btn_verify).click();
    $(SubscriptionPlanObject.btn_confirm).click()
})
Then('User renewal subscription succesfull', () => {
    assert.equal($(SubscriptionPlanObject.btn_verify).getText(), SubscriptionData.lbl_cancel, '');
})