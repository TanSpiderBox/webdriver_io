const ManagedUserObj = {
    btn_invite: '(//button[contains(@class,"js_invite_btn")])[1]',

    txt_inputemail: '//input[@id="member_email"]',

    btn_confirm: '//button[contains(@class,"btn btn btn-success")]',

    lbl_verify: '//*[@id="swal2-content"]/div[1]',

    btn_close: '//button[contains(@class,"swal2-confirm")]',

    btn_dropdown: '(//button[@data-toggle="dropdown"])[2]',

    btn_dropdown2:'(//button[@data-toggle="dropdown"])[4]',

    btn_resend: '//*[contains(@href,"resend")]',

    btn_unlock: '//*[contains(@class,"js_unlock_btn")]',

    btn_delete: '(//*[contains(@data-method,"delete")])[2]',

    btn_upgrade: '//*[@id="swal2-content"]/a',
    
}

export { ManagedUserObj }