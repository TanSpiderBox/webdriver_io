const LoginObjects = {
    txt_useremail: 'input[id="user_email"]',
    txt_userpwd: 'input[id="user_password"]',
    btn_submit: 'button[name="button"]',
};

const LoginErrorObjects = {
    lbl_error_blank: '//*[contains(@class,"invalid-feedback")]',
    lbl_error_inccorect: '//*[contains(@class,"invalid-feedback")]',
};

const LoginSuccessObjects = {
    lbl_success_login: '//*[text()="Start"]',
}

export { LoginObjects, LoginErrorObjects, LoginSuccessObjects };