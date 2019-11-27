const BillingInfoData = {
    cardnumber: '42',


    cardholder: 'Jenny Rosen',
    expirydatemth: '02',
    expirydatemyr: '20',
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

    lastdigit: '• • • • 4242',
    errorcodeCardNumber: "Your card number is invalid.",
    errorcodeExpiryDate: "Your card's expiration date is incomplete.",
    errorcodeCvc: "Your card's security code is incomplete.",
    errorcodedeclined: 'Your card was declined.',
    errorcodeinsufficient: 'Your card has insufficient funds.',
    errorcodeexpired: 'Your card has expired.',
    errorincorrectcvc: "Your card's security code is incorrect.",
    error: "An error occurred while processing your card. Try again in a little bit.",
}

export { BillingInfoData, BillingDataVerify }