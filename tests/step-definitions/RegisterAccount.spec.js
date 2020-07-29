import { When, Then } from "cucumber";
import { assert } from "chai";
import { RegisObject, RegisErrorObject, RegisSuccessObject } from "../page-object/Register.po"
import { RegisData, RegisError, RegisSuccess } from "../data/Data_Register";

/* RG001 */
When("User blank all all field", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account with blank all field", () => {
  assert.equal($(RegisErrorObject.lbl_error_firstname).getText(), RegisError.firstname_error, '');
  assert.equal($(RegisErrorObject.lbl_error_useremail).getText(), RegisError.email_error, '');
  assert.equal($(RegisErrorObject.lbl_error_userpwd).getText(), RegisError.pwd_error, '');
})

/* RG002 */
When("User blank First Name", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account with blank field First Name", () => {
  assert.equal($(RegisErrorObject.lbl_error_firstname).getText(), RegisError.firstname_error, '');
})

/* RG003 */
When("User blank Password", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account with blank field Password", () => {
  assert.equal($(RegisErrorObject.lbl_error_userpwd).getText(), RegisError.pwd_error, '');
})

/* RG004 */
When("User blank Confirm Password", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
  browser.pause(2000)
})
Then("User can't register new account with blank field Confirm Password", () => {
  assert.equal($(RegisErrorObject.lbl_error_pwdconf).getText(), RegisError.pwconfirm_error, '');
})

/* RG005 */
When("User don't select User Role", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account with blank User Role", () => {
  assert.equal($(RegisErrorObject.lbl_error_userrole).getText(), RegisError.usrrole_error, '');
})

/* RG006 */
When("User input Password don't match", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_incorrectpwd);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account with Password don't match", () => {
  assert.equal($(RegisErrorObject.lbl_error_pwdconf).getText(), RegisError.pwconfirm_error, '');
})
/* RG007 */
When("User input Existing Email", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_exisemail);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account with Existing Email", () => {
  assert.equal($(RegisErrorObject.lbl_error_useremail).getText(), RegisError.emailexist_error, '');
})

/* RG008 */
When("User input Password is too short", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_incorrectpwd);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account with Password is so short", () => {
  assert.equal($(RegisErrorObject.lbl_error_userpwd).getText(), RegisError.pwshort_error, '');
})

/* RG009 */
When("User input all valid information", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).scrollIntoView();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User create account successfull", () => {
  assert.equal($(RegisSuccessObject.lbl_success_regis).getText(), RegisSuccess.regis_success, '');
})

// /* TestCase017 */
// When("User select email confirm", () => {

// })
// Then("User can comfirm Email", () => {

// })