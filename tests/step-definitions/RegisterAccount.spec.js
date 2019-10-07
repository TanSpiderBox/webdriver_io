import { When, Then } from "cucumber";
import { assert } from "chai";
import { RegisObject, RegisErrorObject, RegisSuccessObject } from "../page-object/Register.po"
import { RegisData, RegisError, RegisSuccess } from "../data/Data_Register";

/* TestCase008 */
When("User blank all all field", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 1st", () => {
  assert.isObject($(RegisErrorObject.lbl_error_firstname), RegisError.requi_error);
  assert.isObject($(RegisErrorObject.lbl_error_useremail), RegisError.requi_error);
  assert.isObject($(RegisErrorObject.lbl_error_userpwd), RegisError.requi_error);
})

/* TestCase009 */
When("User blank First Name", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 2nd", () => {
  assert.isObject($(RegisErrorObject.lbl_error_firstname), RegisError.requi_error);
})

/* TestCase010 */
When("User blank Password", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 3rd", () => {
  assert.isObject($(RegisErrorObject.lbl_error_userpwd), RegisError.requi_error);
})

/* TestCase011 */
When("User blank Confirm Password", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 4th", () => {
  assert.isObject($(RegisErrorObject.lbl_error_pwdconf), RegisError.requi_error);
})

/* TestCase012 */
When("User don't select User Role", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 5th", () => {
  assert.isObject($(RegisErrorObject.lbl_error_userrole), RegisError.usrrole_error);
})

/* TestCase013 */
When("User input Password don't match", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_incorrectpwd);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 6th", () => {
  assert.isObject($(RegisErrorObject.lbl_error_pwdconf), RegisError.pwconfirm_error);
})
/* TestCase014 */
When("User input Existing Email", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_exisemail);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 7th", () => {
  assert.isObject($(RegisErrorObject.lbl_error_useremail), RegisError.emailexist_error);
})

/* TestCase015 */
When("User input Password is too short", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_incorrectpwd);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User can't register new account 8th", () => {
  assert.isObject($(RegisErrorObject.lbl_error_userpwd), RegisError.pwshort_error);
})

/* TestCase016 */
When("User input all valid infomation", () => {
  $(RegisObject.btn_regis).click();
  $(RegisObject.txt_userfirstname).setValue(RegisData.user_firstName);
  $(RegisObject.txt_usersurname).setValue(RegisData.user_lastName);
  $(RegisObject.txt_useremail).setValue(RegisData.user_email);
  $(RegisObject.txt_userpwd).setValue(RegisData.user_password);
  $(RegisObject.txt_userpwdconf).setValue(RegisData.user_password);
  $(RegisObject.btn_role).click();
  $(RegisObject.btn_regisSubmit).click();
})
Then("User create account successfull", () => {
  assert.isObject($(RegisSuccessObject.lbl_success_regis), RegisSuccess.regis_success);
})

// /* TestCase017 */
// When("User select email confirm", () => {

// })
// Then("User can comfirm Email", () => {

// })