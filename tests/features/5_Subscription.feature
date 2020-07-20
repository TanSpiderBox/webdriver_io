Feature: Subsription

    Background: As a User I want check all case of Feature Subscription

    @SB001
    Scenario: Verify system display correct information of Subscription Plan screen
        Given  User Open website MMAP
        When User input correct email and password
        Then User can login succesfull
        When User access Subscription
        Then System display correct information of subscription


    @SB002
    Scenario: Verify User input declined card and can't add new card information in Billing Information Screen
        When User input decline card
        Then User can't add new declined card

    @SB003
    Scenario: Verify User input insufficient funds card and can't add new card information in Billing Information Screen
        When User input insufficient funds card
        Then User can't add new insufficient funds card

    @SB004
    Scenario: Verify User input lost card information and can't add new card information in Billing Information Screen
        When User input lost card
        Then User can't add new lost card

    @SB005
    Scenario: Verify User input stolen card and can't add new card information in Billing Information Screen
        When User input stolen card
        Then User can't add new stolen card

    @SB006
    Scenario: Verify User input expired card and can't add new card information in Billing Information Screen
        When User input expired card
        Then User can't add new expired card

    @SB007
    Scenario: Verify User input incorrect cvc card and can't add new card information in Billing Information Screen
        When User input incorrect cvc card
        Then User can't add new incorrect cvc card

    @SB008
    Scenario: Verify User input processing error card and can't add new card information in Billing Information Screen
        When User input processing error card
        Then User can't add new processing error card

    @SB009
    Scenario: Verify User input invalid card number and can't add new card information in Billing Information Screen
        When User input invalid card number
        Then User can't add new invalid card number

    @SB0010
    Scenario: Verify User can choose new plan
        When User input all valid information of card
        Then User can payment succesfull

    @SB0011
    Scenario: Verify User can cancel subscription
        When User click button cancel
        Then User cancel subscription succesfull

    @SB0012
    Scenario: Verify User can renewal subscription
        When User click button renewal
        Then User renewal subscription succesfull

