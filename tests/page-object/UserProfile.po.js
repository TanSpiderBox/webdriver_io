// '''User Profile'''
const ProfileObject = {
    btn_user: '//*[contains(@src,"/uploads/user/avatar")]',
    btn_notifi: '//*[contains(text(),"Notification(11)")]',
    btn_userAccount: '//*[text()="Account"]',
    btn_subscription: '//*[text()="Subscription"]',
    btn_billing: '//*[text()="Billing Information"]',
    btn_managedmember: '//a[@aria-current="page"]',
    btn_inter: '//*[text()="Integrations"]',
    btn_userProfile: '//*[text()="User Profile"]',
    btn_signOut: '//*[contains(@href,"/sign_out")]',
    btn_subuserprofile: '//*[@id="bd-profile-nav"]/a[text()="User Profile"]',
    btn_avata: '//*[contains(@class,"avatar editable")]',
    btn_upavata: 'input[id="user_avatar"]',
}

const UserProfleObject = {
    submn_UserProfile: '//*[@id="bd-profile-nav"]/a[text()="User Profile"]',
    txt_changePw: '//*[contains(@class,"field-editable text")]',
    txt_currentpwd: 'input[id="user_current_password"]',
    txt_email: 'input[id="user_email"]',
    txt_newpwd: 'input[id="user_password"]',
    txt_confpwd: 'input[id="user_password_confirmation"]',
    btn_pwdsub: 'button[type="submit"]',
    lbl_updatesucc: '//*[@data-toggle=".sub-info"]',
    btn_pwdback: '(//*[contains(@href,"/edit")])[3]',
    btn_linksub: '(//*[contains(@href,"/pricing")])[3]',
    btn_linkbill: '(//*[contains(@href,"/billing")])[3]',
}

const UserProfileValidation = {
    user_namesubscription: '//*[@class="mb-0 text-success"]',
    user_email: '//*[@class="mt-5 mb-3 text-white"]',
    user_type: '//*[@class="mt-3 text-white"]',
    user_errorpwd: '//*[@name="user[current_password]"]/following-sibling::div',
    user_errornewpwd: '//*[@name="user[password]"]/following-sibling::div',
    user_subpage: '//*[@class="text-peach py-5"]',
    user_billpage: '//*[@class="card-header d-flex justify-content-between"]/h5',
    user_img: '//*[contains(@class,"avatar editable")]/img'
}
export { ProfileObject, UserProfleObject, UserProfileValidation };

