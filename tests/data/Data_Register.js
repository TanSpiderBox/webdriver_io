const RegisData = {
    user_firstName: "Tan",
    user_lastName: "Nguyen",
    user_email:  "tan+" + Date.now() + "@spiderbox.design",
    user_password: "123456789",

    user_exisemail: 'tan@spiderbox.design',
    user_incorrectpwd: '1'
}
const RegisError = {
    firstname_error : "First name can\'t be blank",
    pwd_error: "Password can\'t be blank",
    email_error: "Email can\'t be blank",
    requi_error: "can't be blank",
    pwconfirm_error: "Password confirmation doesn't match Password",
    usrrole_error: "Role can't be blank",
    emailexist_error: "Email has already been taken",
    pwshort_error: "Password is too short (minimum is 6 characters)",
}

const RegisSuccess = {
    regis_success: "Welcome, Tan!"
}

export { RegisData, RegisError, RegisSuccess };