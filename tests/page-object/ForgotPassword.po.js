const ForgotPwdObject = {
    btn_forgotpwd: '//*[text()="Forgot password?"]',
    txt_emailforgot: 'input[id="user_email"]',
    btn_submit: 'button[type="submit"]'
}

const ConfirmObject = {
    txt_emailconf: 'input[type="email"]',
    txt_pwdconf: 'input[type="password"]',
    btn_contiunue: 'span[class="RveJvd snByac"]',
    lbl_emailconf: '//*[@jscontroller="ZdOxDb"]',
    hyperlink_confi: '//*[text()="Change my password"]'
}

const PwdConfObject = {
    txt_newpwd: 'input[id="user_password"]',
    txt_newpwdconf: 'input[id="user_password_confirmation"]',
    btn_login: '//*[text()="Log in"]'
}

export { ForgotPwdObject, ConfirmObject, PwdConfObject}