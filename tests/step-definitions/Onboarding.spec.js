import { When, Then } from "cucumber";
import { assert } from 'chai'
import { DataOnboarding } from "../data/Data_Onboarding";
import { OboardingObject } from "../page-object/Onboarding.po"
import { ProfileObject } from "../page-object/UserProfile.po"
import { MapObject, MapVerify } from "../page-object/Mapping.po"

/* OB001 */
When('User login first time', () => {
    $(MapObject.btn_nwsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(DataOnboarding.unit);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_addmaps).click();
    $(MapObject.btn_continue).click();
    $(MapObject.btn_Snewmap).click();
})
Then('User must completed Onboarding', () => {
    assert.equal($(OboardingObject.lbl_verify).getText(), DataOnboarding.lbl_verify, '');
    browser.keys("Escape")
})

/* OB002 */
When('User sync maximum 3 Units', () => {
    //Add second untis
    $(MapObject.btn_back).click();
    const timeout = 2000
    $(MapObject.btn_sidebar).click();
    browser.pause(timeout)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(DataOnboarding.unit2);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_addmaps).click();
    $(MapObject.btn_continue).click();

    //Add third units
    $(MapObject.btn_sidebar).click();
    browser.pause(timeout)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(DataOnboarding.unit3);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_addmaps).click();
    $(MapObject.btn_continue).click();

    //Add fourth units
    $(MapObject.btn_sidebar).click();
    browser.pause(timeout)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(DataOnboarding.unit4);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_addmaps).click();
})
Then('System display message Need to add more units?', () => {
    assert.equal($(MapVerify.lbl_verify).getText(), DataOnboarding.lbl_upgrade1, '');
    browser.keys("Escape")
})

/* OB003 */
When('User trial click button download Excel', () => {
    const timeout = 2000
    $(MapObject.btn_sidebar).click();
    browser.pause(timeout)
    $(MapObject.btn_addsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(DataOnboarding.unit);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();

    $(MapObject.btn_downloadUnitpack).click();
    $(MapObject.btn_downloadUnitpackExcel).click();
})
Then("User can't download Excel and System display Upgrade your account to unlock this feature.", () => {
    assert.equal($(MapVerify.lbl_verify).getText(), DataOnboarding.lbl_upgrade2, '');
    browser.keys("Escape")
})

When('User trial click button download Word', () => {
    $(MapObject.btn_downloadUnitpack).click();
    $(MapObject.btn_downloadUnitpackWord).click();
})
Then("User can't download Word and System display Upgrade your account to unlock this feature.", () => {
    assert.equal($(MapVerify.lbl_verify).getText(), DataOnboarding.lbl_upgrade2, '');
    browser.keys("Escape")
})

/* OB004 */
When('User trial click button download PDF', () => {
    $(MapObject.btn_downloadUnitpack).click();
    $(MapObject.btn_downloadUnitpackPDF).click();
    browser.pause(5000)

    $(MapObject.btn_downloadUnitpack).click();
    $(MapObject.btn_downloadUnitpackPDF).click();
})
Then('System display Upgrade You have used your allocated trial download, to download further PDFs, Excel, and Word documents, please upgrade your account.', () => {
    assert.equal($(MapVerify.lbl_verify).getText(), DataOnboarding.lbl_upgrade3, '');
    browser.keys("Escape")
})

/* OB005 */
When('User click restart onboarding', () => {
    $(ProfileObject.btn_user).click()
    $(ProfileObject.btn_userAccount).click()
    $(ProfileObject.btn_restarton).click()

    $(MapObject.btn_nwsyncs).click();
    $(MapObject.txt_search).click();
    $(MapObject.txt_inputsearch).setValue(DataOnboarding.unit);
    $(MapObject.txt_resultUnits).click();
    $(MapObject.btn_search).click();
    $(MapObject.btn_Snewmap).click();
})

Then('User can do onboarding again', () => {
    assert.equal($(OboardingObject.lbl_verify).getText(), DataOnboarding.lbl_verify, '');
})