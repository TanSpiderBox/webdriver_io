// '''User Profile'''
const UserProfileObject = {
    btn_user: '//*[contains(@src,"/uploads/user/avatar")]',
    btn_notifi: '//*[contains(text(),"Notification(11)")]',
    btn_userAccount: '//*[text()="Account"]',
    btn_subscription: '//*[text()="Subscription"]',
    btn_billing: '//*[text()="Billing Information"]',
    btn_inter: '//*[text()="Integrations"]',
    lbl_signOut: '//*[contains(@href,"/users/sign_out")]',
    btn_userProfile: '//*[text()="User Profile"]',
    txt_changePw: '//*[contains(@href,"/users/15/change_password")]',
}

export { UserProfileObject };