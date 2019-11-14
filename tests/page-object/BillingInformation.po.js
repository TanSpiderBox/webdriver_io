// '''Card Information'''
const BillingInfoObject = {
    txt_cardNumber: 'input[aria-label="Credit or debit card number"]',
    txt_cardHolder: 'input[id="card_name"]',
    txt_expiryDate: 'input[name="exp-date"]',
    txt_cvc: 'input[name="cvc"]',
    btn_submit: '[name="button"]',
}

const BillingVerifi = {
    stripeverifi = 'div[id="swal2-content"]',
    cardverifi = '[id="card-errors"]'
}


export { BillingInfoObject, BillingVerifi };