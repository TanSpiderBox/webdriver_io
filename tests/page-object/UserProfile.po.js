// '''User Profile'''
const ProfileObject = {
    btn_user: '//*[contains(@src,"/uploads/user/avatar")]',
    btn_notifi: '//*[contains(text(),"Notification(11)")]',
    btn_userAccount: '//*[text()="Account"]',
    btn_subscription: '//*[text()="Subscription"]',
    btn_billing: '//*[text()="Billing Information"]',
    btn_inter: '//*[text()="Integrations"]',
    btn_userProfile: '//*[text()="User Profile"]',
    lbl_signOut: '//*[contains(@href,"/users/sign_out")]',
}

const UserProfleObject = {
    submn_UserProfile: '//*[@id="bd-profile-nav"]/a[text()="User Profile"]',
    txt_changePw: '//*[contains(@class,"field-editable text")]',
    txt_currentpwd: 'input[id="user_current_password]"',
    txt_newpwd: 'input[id="user_password"]',
    txt_confpwd: 'input[id="user_password_confirmation"]',
    btn_pwdsub: 'btn[type="submit"]',
    lbl_updatesucc: '//*[@data-toggle=".sub-info"]',
    btn_pwdback: '//*[contains(@class,"btn btn-arrow rounded-circle acreage-40")]',
    btn_linksub: '(//*[contains(@class,"btn")])[2]',
    btn_linkbill: '(//*[contains(@class,"btn")])[3]',
}

const UserProfileValidation = {
    user_namesubscription: '//*[@class="mb-0 text-success"]',
    user_email: '//*[@class="mt-5 mb-3 text-white"]',
    user_type: '//*[@class="mt-3 text-white"]',
    user_errorpwd: '//*[@name="user[current_password]"]/following-sibling::div',
    user_errornewpwd: '//*[@name="user[password]"]/following-sibling::div'

}
export { ProfileObject, UserProfleObject, UserProfileValidation };

