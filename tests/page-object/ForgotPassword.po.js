const ForgotPwdObject = {
    btn_forgotpwd: '//*[text()="Forgot password?"]',
    txt_emailforgot: 'input[id="user_email"]',
    btn_submit: 'button[type="submit"]',
}

const ConfirmPwdObject = {
    txt_emailconf: 'input[type="email"]',
    txt_pwdconf: 'input[type="password"]',
    btn_contiunue: 'span[class="RveJvd snByac"]',
    lbl_emailconf: '//*[@jscontroller="ZdOxDb"]',
    hyperlink_confi: '//*[text()="Change my password"]',
    txt_newpwd: 'input[id="user_password"]',
    txt_newpwdconf: 'input[id="user_password_confirmation"]',
    btn_changemypassword: 'input[value="Change my password"]',
    btn_showcontent: 'div[data-tooltip="Show trimmed content"]'
}

const ForgotPwdMessObject = {
    lbl_nofi1: '//*[text()="No worries."]',
    lbl_nofi2: '//*[text()="Your new password has been sent to  "]',
    lbl_nofi3: '//*[text()="tan@spiderbox.design"]',
    lbl_emailnotfound: '//*[text()="Email not found"]',   
    lbl_blankemail: '//*[text()="Email can\'t be blank"]',
    lbl_blankpwd: '//*[text()="Password can\'t be blank"]',
    lbl_pwdshort: '//*[text()="Password is too short (minimum is 6 characters)"]',
    lbl_pwdnotmatch: '//*[text()="Password confirmation doesn\'t match Password"]'
}

export { ForgotPwdObject, ConfirmPwdObject, ForgotPwdMessObject }