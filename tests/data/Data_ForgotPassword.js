const ForgotPasswordData = {
    user_emailwrong: 'abc@xyz.com',
    user_emailLink: 'https://accounts.google.com/signin/v2/identifier?service=mail',
    user_emailconf: 'tan@spiderbox.design',
    user_pwdconf: "TloveN@5121*",
    user_pwdshort: '1',
    user_pwdcorrect: '123456789'
}

const ForgotPasswordMess = {
    mess_nofi1: 'No worries.',
    mess_nofi2: 'Your new password has been sent to',
    mess_nofi3: 'tan@spiderbox.design',
    error_notfound: 'Email not found',
    error_blankemail: "Email can't be blank",
    error_blankpwd: "Password can't be blank",
    error_pwdshort: "is too short (minimum is 6 characters)",
    error_pwdnotmatch: "doesn't match Password"

}
export { ForgotPasswordData, ForgotPasswordMess }