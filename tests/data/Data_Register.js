const RegisData = {
    user_firstName: "Tan",
    user_lastName: "Nguyen",
    user_email: "45@temp-link.net",
    user_password: "123456789",

    user_exisemail: 'tan@spiderbox.design',
    user_incorrectpwd: '1'
}
const RegisError = {
    requi_error: "can't be blank",
    pwconfirm_error: "Password confirmation doesn't match Password",
    usrrole_error: "Role can't be blank",
    emailexist_error: "Email has already been taken",
    pwshort_error: "is too short (minimum is 6 characters)",
}

const RegisSuccess = {
    regis_success: "Congratulations!"
}

export { RegisData, RegisError, RegisSuccess };