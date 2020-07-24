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

    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.decline_cardnumber);

    //Input Card Holder
    browser.switchToParentFrame();
    $(BillingInfoObject.txt_cardHolder).setValue(BillingInfoData.cardholder);

    //Input Expiry Date
    browser.switchToFrame($('iframe[name="__privateStripeFrame6"]'));
    $(BillingInfoObject.txt_expiryDate).setValue(BillingInfoData.expirydate);

    //Input CCV
    browser.switchToParentFrame();
    $(BillingInfoObject.txt_cvc).click();
    browser.keys(BillingInfoData.cvc);

    //Click Checkbox Condition
    $(BillingInfoObject.chck_condition).click();
    $(BillingInfoObject.btn_submit).click();
    browser.pause(7000)
})

Then("User can't payment with declined card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodedeclined, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB003 */
When('User input insufficient funds card', () => {
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.insufficientfunds_cardnumber);

    //Submit request
    browser.switchToParentFrame();
    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't payment with insufficient funds card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodeinsufficient, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB004 */
When('User input lost card', () => {
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.lostcard_cardnumber);

    //Submit request
    browser.switchToParentFrame();
    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't payment with lost card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodecardDeclined, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB005 */
When('User input stolen card', () => {
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.stolencard_cardnumber);

    //Submit request
    browser.switchToParentFrame();
    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't payment with stolen card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodecardDeclined, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB006 */
When('User input expired card', () => {
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.expiredcard_cardnumber);

    //Submit request
    browser.switchToParentFrame();
    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't payment with expired card", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.errorcodeexpired, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

/* SB007 */
When('User input incorrect cvc card', () => {
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.incorrectcvc_cardnumber);

    //Submit request
    browser.switchToParentFrame();
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
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.processingerror_cardnumber);

    //Submit request
    browser.switchToParentFrame();
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
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.invalid_cardnumber);

})

Then("User can't payment with invalid card number", () => {
    browser.switchToParentFrame();
    assert.equal($(BillingVerifi.cardverifi).getText(), BillingDataVerify.errorcodeCardNumber, '');
})

// SB010
When("User use 3d card and fail verification", () => {
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.cardnumber_3d);

    //Click button fail verification
    browser.switchToParentFrame();
    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
    browser.switchToFrame($('//iframe[contains(@name,"__privateStripeFrame")]'));
    browser.switchToFrame($('iframe[name="stripe-challenge-frame"]'));
    $(BillingInfoObject.btn_fail3dcard).click();
    browser.pause(2000)
})
Then("User can't payment successfully", () => {
    assert.equal($(BillingVerifi.stripeverifi).getText(), BillingDataVerify.error3dcard, '');
    browser.keys("\uE007")
    browser.pause(2000)
})

//SB011
When('User use 3d card and completed verifycation', () => {
    //Input Card Number
    browser.switchToFrame($('iframe[name="__privateStripeFrame5"]'));
    $(BillingInfoObject.txt_cardNumber).clearValue();
    $(BillingInfoObject.txt_cardNumber).setValue(BillingInfoData.cardnumber_3d);

    browser.switchToParentFrame();
    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
    browser.switchToFrame($('//iframe[contains(@name,"__privateStripeFrame")]'));
    browser.switchToFrame($('iframe[name="stripe-challenge-frame"]'));
    $(BillingInfoObject.btn_complete3dcard).click();
    browser.pause(2000)
})
Then('User can payment with 3d card successfully', () => {
    assert.equal($(SubscriptionPlanObject.lbl_subsucess).getText(), SubscriptionData.sub_success, '');
})

// SB012
When('User choose higher plan and add valid card',()=>{

})
Then('User upgrade new plan successfully',()=>{
    
})

// SB013
When('User choose lower tire subscription',()=>{

})
Then('System will process request downgrade for next payment',()=>{
    
})

// SB014
When('User choose another plan',()=>{

})
Then('System will display warning massage',()=>{
    
})

// SB015
When('User click hyperlink cancel request',()=>{

})
Then('System process cancel request successfully',()=>{
    
})

// SB016
When('User click button cancel subsciption',()=>{

})
Then('System will process request cancel subscription for next payment',()=>{
    
})

// SB017
When('User choose another plan',()=>{

})
Then('System will display warning massage',()=>{
    
})

// SB018
When('User click hyperlink cancel request',()=>{

})
Then('System process cancel request successfully',()=>{
    
})