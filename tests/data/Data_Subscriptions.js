const SubscriptionData = {
    lbl_subscription: 'Subscription Plan',

    sub_success: 'Thank you, we have received your payment and your account has been upgraded. Enjoy using Magic Map!',

    lbl_cancel: 'Cancel Subscription',

    lbl_renewal: 'Renewal',
}

const BillingInfoData = {
    valid_carnumber: '4242424242424242',

    decline_cardnumber: '4000000000000002',

    insufficientfunds_cardnumber: '4000000000009995',

    lostcard_cardnumber: '4000000000009987',

    stolencard_cardnumber: '4000000000009979',

    expiredcard_cardnumber: '4000000000000069',

    incorrectcvc_cardnumber: '4000000000000127',

    processingerror_cardnumber: '4000000000000119',

    invalid_cardnumber: '4242424242424241',

    cardnumber_3d: '4000000000003220',
    
    cardholder: 'Jenny Rosen',
    expirydate: '02/22',
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