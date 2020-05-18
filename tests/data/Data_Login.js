const LoginData = {
    // url: "http://192.168.1.17:3000/users/sign_in",
    url: "https://staging.app.magicmap.com.au/",
    user_email: 'tan@spiderbox.design',
    user_email_incorrect: 'tanbbc@spiderbox.design',
    user_pwd: '111111',
    user_pwd_incoorect: '123456'
}

const LoginErrorMessage = {
    blank_error: 'Please input Email and password to sign in.',
    input_error: 'Wrong Email/ password. Please input again.',
}

const LoginSuccessMessage = {
    login_success: 'Start'
}
export { LoginData, LoginErrorMessage, LoginSuccessMessage };