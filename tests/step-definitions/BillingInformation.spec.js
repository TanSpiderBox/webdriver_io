import { When, Then } from "cucumber"
import { assert } from "chai"
import { BillingInfoObject, BillingVerifi } from "../page-object/BillingInformation.po"
import { ProfileObject } from "../page-object/UserProfile.po"
import { BillingInfoData, BillingDataVerify } from "../data/Data_BillingInfo"
import { UserProfileData } from "../data/Data_UserProfile"

/* TestCase041 */
When('User access Billing Information', () => {
    $(ProfileObject.btn_user).click();
    $(ProfileObject.btn_userAccount).click();
    browser.pause(1000)
    $(ProfileObject.btn_billing).click();
})

Then('System display correct information of Billing Information Screen', () => {
    assert.equal($(BillingVerifi.lbl_addnewcard).getText(), BillingDataVerify.addnew, '');
    assert.equal($(BillingVerifi.lbl_cardnumber).getText(), BillingDataVerify.lblcardnumber, '');
    assert.equal($(BillingVerifi.lbl_cardholder).getText(), BillingDataVerify.lblcardholder, '');
    assert.equal($(BillingVerifi.lbl_expirydate).getText(), BillingDataVerify.lblexpiry, '');
    assert.equal($(BillingVerifi.lbl_cvc).getText(), BillingDataVerify.lblcvc, '');

    assert.equal($(BillingVerifi.lbl_transaction).getText(), BillingDataVerify.lbltransaction, '');
    assert.equal($(BillingVerifi.lbl_date).getText(), BillingDataVerify.lbldate, '');
    assert.equal($(BillingVerifi.lbl_amount).getText(), BillingDataVerify.lblamount, '');
    assert.equal($(BillingVerifi.lbl_subscription).getText(), BillingDataVerify.lblsub, '');
    assert.equal($(BillingVerifi.lbl_desnote).getText(), BillingDataVerify.lbldesnote, '');
    const value = ($(BillingVerifi.lbl_desnote).getText())
    const exportname = value.writeFile('D:/test.xlxs')
})

/* TestCase042 */
When('User input all valid information of card', () => {
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

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then('User can add new card information in Billing Information Screen', () => {
    assert.equal($(BillingVerifi.img_cardNumber).getText(), BillingDataVerify.lastdigit, '');
})

/* TestCase043 */
When('User click button remove card', () => {
    browser.pause(5000)
    $(BillingInfoObject.btnRemove).click();
})

Then('User can remove existing card', () => {
    $(BillingInfoObject.btnRemove).isExisting()
    browser.pause(2000)
})

/* TestCase044 */
When('User input decline card', () => {
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

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new card 1st", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText();
    const cuterror = errorcode.slice(42);
    assert.equal(cuterror, BillingDataVerify.errorcodedeclined, '');
    $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* TestCase045 */
When('User input insufficient funds card', () => {
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
    browser.keys('99')
    browser.pause(timeout)
    browser.keys('95')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new card 2nd", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText();
    const cuterror = errorcode.slice(42);
    assert.equal(cuterror, BillingDataVerify.errorcodeinsufficient, '');
    $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* TestCase046 */
When('User input lost card', () => {
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
    browser.keys('99')
    browser.pause(timeout)
    browser.keys('87')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new card 3rd", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText();
    const cuterror = errorcode.slice(42);
    assert.equal(cuterror, BillingDataVerify.errorcodedeclined, '');
    $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* TestCase047 */
When('User input stolen card', () => {
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
    browser.keys('99')
    browser.pause(timeout)
    browser.keys('79')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000);
})

Then("User can't add new card 4th", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText();
    const cuterror = errorcode.slice(42);
    assert.equal(cuterror, BillingDataVerify.errorcodedeclined, '');
    $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* TestCase048 */
When('User input expired card', () => {
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
    browser.keys('69')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new card 5th", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText();
    const cuterror = errorcode.slice(42);
    assert.equal(cuterror, BillingDataVerify.errorcodeexpired, '');
    $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* TestCase049 */
When('User input incorrect cvc card', () => {
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
    browser.keys('01')
    browser.pause(timeout)
    browser.keys('27')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new card 6th", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText();
    const cuterror = errorcode.slice(42);
    assert.equal(cuterror, BillingDataVerify.errorincorrectcvc, '');
    $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* TestCase050 */
When('User input processing error card', () => {
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
    browser.keys('01')
    browser.pause(timeout)
    browser.keys('19')

    $(BillingInfoObject.btn_submit).click();
    browser.pause(2000)
})

Then("User can't add new card 7th", () => {
    const errorcode = $(BillingVerifi.stripeverifi).getText();
    const cuterror = errorcode.slice(42);
    assert.equal(cuterror, BillingDataVerify.error, '');
    $(BillingInfoObject.btnOk).click();
    browser.pause(2000)
})

/* TestCase051 */
When('User input invalid card number', () => {
    const timeout = 50
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

Then("User can't add new card 8th", () => {
    assert.equal($(BillingVerifi.cardverifi).getText(),BillingDataVerify.errorcodeCardNumber,''); 
})
