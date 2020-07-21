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

Then("User can't payment with declined card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodedeclined, '');
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

Then("User can't payment with insufficient funds card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodeinsufficient, '');
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

Then("User can't payment with lost card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodecardDeclined, '');
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

Then("User can't payment with stolen card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodecardDeclined, '');
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

Then("User can't payment with expired card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodeexpired, '');
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

Then("User can't payment with incorrect cvc card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorincorrectcvc, '');
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

Then("User can't payment with processing error card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.error, '');
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

Then("User can't payment with invalid card number", () => {
    assert.equal($(BillingVerifi.cardverifi).getText(), BillingDataVerify.errorcodeCardNumber, '');
})

// SB010
When("User user 3d card and fail verification", () => {
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
    browser.keys('32')
    browser.pause(timeout)
    browser.keys('20')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
    browser.switchToFrame($('//iframe[contains(@name,"__privateStripeFrame")]'));
    browser.switchToFrame($('iframe[name="stripe-challenge-frame"]'));
    $(BillingInfoObject.btn_fail3dcard).click();
    browser.pause(2000)
})
Then("User can't payment succesfully", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.error3dcard, '');
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
Then('User can payment succesfully', () => {
    assert.equal($(SubscriptionPlanObject.lbl_subsucess).getText(), SubscriptionData.sub_success, '');
})

When('User click button cancel', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_subscription).click()
    $(SubscriptionPlanObject.btn_verify).click();
    $(SubscriptionPlanObject.btn_confirm).click()
})
Then('User cancel subscription succesfully', () => {
    assert.equal($(SubscriptionPlanObject.btn_verify).getText(), SubscriptionData.lbl_renewal, '');
})

When('User click button renewal', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_subscription).click()
    $(SubscriptionPlanObject.btn_verify).click();
    $(SubscriptionPlanObject.btn_confirm).click()
})
Then('User renewal subscription succesfully', () => {
    assert.equal($(SubscriptionPlanObject.btn_verify).getText(), SubscriptionData.lbl_cancel, '');
})