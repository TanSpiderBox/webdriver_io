// '''Card Information'''
const BillingInfoObject = {
    
    txt_cardNumber: '//*[@id="card-number-element"]',
    txt_cardHolder: 'input[id="card_name"]',
    txt_expiryDate: 'div[id="card-expiry-element"]',
    txt_cvc: 'div[id="card-cvc-element"]',
    btn_submit: 'button[data-disabled-with="Paymenting...."]',
    btnRemove: 'div[class="stripe-card"]>img',
    btnOk: 'button[class="swal2-confirm swal2-styled"]',
}

const BillingVerifi = {
    img_cardNumber: 'span[class="card-number"]',
    stripeverifi: 'div[id="swal2-content"]',
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


export { BillingInfoObject, BillingVerifi };