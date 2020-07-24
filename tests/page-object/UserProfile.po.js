// '''User Profile'''
const ProfileObject = {
    btn_user: '//*[contains(@class,"align-items-center")]//div[contains(@class,"avatar--default acreage-48")]',
    btn_notifi: '//*[contains(@class,"align-items-center")]//div[contains(@class,"pointer avatar--default position-relative")]',
    btn_userAccount: '//*[text()="Account"]',
    btn_subscription: '//*[text()="Subscription"]',
    btn_billing: '//*[text()="Billing Information"]',
    btn_managedmember: '//*[text()="Manage Users"]',
    btn_inter: '//*[text()="Integrations"]',
    btn_userProfile: '//*[text()="User Profile"]',
    btn_signOut: '//*[contains(@href,"/sign_out")]',

    btn_avata: '//*[contains(@class,"avatar editable")]',
    btn_upavata: 'input[id="user_avatar"]',
    
    btn_managedusers: '//*[text()="Manage Users"]',
    btn_restarton: '//*[text()="Restart Onboarding Wizard"]'
}

const UserProfleObject = {
    submn_UserProfile: '//*[@id="bd-profile-nav"]/a[text()="User Profile"]',
    txt_changePw: '//*[contains(@href,"change_password")]',
    txt_currentpwd: 'input[id="user_current_password"]',
    txt_email: 'input[id="user_email"]',
    txt_newpwd: 'input[id="user_password"]',
    txt_confpwd: 'input[id="user_password_confirmation"]',
    btn_pwdsub: 'button[type="submit"]',
    btn_pwdsub2: 'form.js_change_password button[type="submit"]',
    lbl_updatesucc: '//*[@data-toggle=".sub-info"]',
    btn_pwdback: '(//*[contains(@href,"/edit")])[3]',
    btn_linksub: '(//*[contains(@href,"/pricing")])[3]',
    btn_linkbill: '(//*[contains(@href,"/billing")])[3]',
}

const UserProfileValidation = {
    user_namesubscription: '//div[contains(@class,"text-success")]',
    user_firstname: '//a[contains(@class,"firstname")]',
    user_lastname: '//a[contains(@class,"surname")]',
    user_email: '//*[@class="mb-3 text-white"]',
    user_type: '//*[@class="mt-3 text-white"]',
    user_errorpwd: '//*[@name="user[current_password]"]/following-sibling::div',
    user_errornewpwd: '//*[@name="user[password]"]/following-sibling::div',
    user_subpage: '//*[@class="text-peach py-5"]',
    user_billpage: '//*[contains(@class,"card-header")]//h5',
    user_img: '//*[contains(@class,"avatar editable")]/img'
}
export { ProfileObject, UserProfleObject, UserProfileValidation };

