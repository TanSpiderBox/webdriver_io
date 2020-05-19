const RegisObject = {
  btn_regis: '//*[text()="Register"]',
  txt_userfirstname: 'input[id="user_first_name"]',
  txt_usersurname: 'input[id="user_surname"]',
  txt_useremail: 'input[id="user_email"]',
  txt_userpwd: 'input[id="user_password"]',
  txt_userpwdconf: 'input[id="user_password_confirmation"]',
  btn_role: '//label[text()="Individual"]',
  btn_regisSubmit: 'button[name="button"]',

}

const RegisErrorObject = {
  lbl_error_firstname: "//input[@id=\"user_first_name\"]/following-sibling::div",
  lbl_error_useremail: "//input[@id=\"user_email\"]/following-sibling::div",
  lbl_error_userpwd: "//input[@id=\"user_password\"]/following-sibling::div",
  lbl_error_pwdconf: "//input[@id=\"user_password_confirmation\"]/following-sibling::div",
  lbl_error_userrole: "//div[@class=\"invalid-feedback d-block\"]",
}

const RegisSuccessObject = {
  lbl_success_regis: '//div[contains(@class,"onboarding")]/div[text()]'
}

export { RegisObject, RegisErrorObject, RegisSuccessObject }