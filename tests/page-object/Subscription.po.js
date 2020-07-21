//Subscription Plan
const SubscriptionPlanObject = {
    lbl_subscription: '//*[contains(text(),"Subscription Plan")]',

    btn_tire1: '(//a[contains(@class,"btn-price rounded")])[3]',

    btn_action: '(//*[contains(@class,"btn btn-cancel")])[1]',

    btn_confirm: '//*[contains(@class,"swal2-confirm")]',

    lbl_subsucess: '//*[@id="swal2-content"]/div/div',

    btn_verify: '(//*[contains(@class,"btn btn-cancel")])[1]/span'
}

const BillingInfoObject = {
    txt_cardNumber: '//*[@id="card-number-element"]',
    txt_cardHolder: 'input[id="card_name"]',
    txt_expiryDate: 'div[id="card-expiry-element"]',
    txt_cvc: 'div[id="card-cvc-element"]',
    btn_submit: 'button[data-disabled-with="Paymenting...."]',
    btnRemove: 'div[class="stripe-card"]>img',
    btnOk: 'button.swal2-confirm',
    chck_condition: '//input[contains(@name,"condition")]',
    btn_fail3dcard: '//button[@id="test-source-fail-3ds"]',
    btn_complete3dcard: '//button[@id="test-source-authorize-3ds"]'
}

const BillingVerifi = {
    img_cardNumber: 'span[class="card-number"]',
    stripeverifi: '#swal2-content',
    cardverifi: '[id="card-errors"]',

    lbl_addnewcard: '//*[text()="Add New Card"]',
    lbl_transaction: '//*[text()="Transaction History"]',
    lbl_cardnumber: '//*[text()="Card number"]',
    lbl_cardholder: '//*[text()="Card Holder"]',
    lbl_expirydate: '//*[text()="Expiry date"]',
    lbl_cvc: '//*[text()="CVC"]',

    lbl_date: '//*[text()="Date"]',
    lbl_amount: '//*[text()="Amount"]',
    lbl_subscription: '(//*[text()="Subscription"])[3]',
    lbl_desnote: '//*[text()="Description/ Note"]',

}

export { SubscriptionPlanObject, BillingInfoObject, BillingVerifi }