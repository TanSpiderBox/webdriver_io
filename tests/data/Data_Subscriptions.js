const SubscriptionData = {
    lbl_subscription: 'Subscription Plan',

    sub_success: 'Thank you, we have received your payment and your account has been upgraded. Enjoy using Magic Map!',

    lbl_cancel: 'Cancel Subscription',
    
    lbl_renewal: 'Renewal',
}

const BillingInfoData = {
    cardnumber: '42',
    cardholder: 'Jenny Rosen',
    expirydatemth: '02',
    expirydatemyr: '22',
    cvc: '999',
}

const BillingDataVerify = {
    addnew: 'Add New Card',
    lblcardnumber: 'Card number',
    lblcardholder: 'Card Holder',
    lblexpiry: 'Expiry date',
    lblcvc: 'CVC',

    lbltransaction: 'Transaction History',
    lbldate: 'Date',
    lblamount: 'Amount',
    lblsub: 'Subscription',
    lbldesnote: 'Description/ Note',

    errorcodeCardNumber: "Your card number is invalid.",
    errorcodeExpiryDate: "Your card's expiration date is incomplete.",
    errorcodeCvc: "Your card's security code is incomplete.",
    errorcodedeclined: 'Your card was declined.',
    errorcodecardDeclined: 'Your card has been declined.',
    errorcodeinsufficient: 'Your card has insufficient funds.',
    errorcodeexpired: 'Your card has expired.',
    errorincorrectcvc: "Your card's security code is incorrect.",
    error: "An error occurred while processing your card. Try again in a little bit.",
    error3dcard: 'We are unable to authenticate your payment method. Please choose a different payment method and try again.',
}

export { SubscriptionData, BillingInfoData, BillingDataVerify }