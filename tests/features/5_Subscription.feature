Feature: Subsription

    Background: As a User I want check all case of Feature Subscription

    @SB001
    Scenario: Verify system display correct information of Subscription Plan screen
        Given  User Open website MMAP
        When User input correct email and password
        Then User can login successfully
        When User access Subscription
        Then System display correct information of subscription

    @SB002
    Scenario: Verify User input declined card and can't process payment
        When User input decline card
        Then User can't payment with declined card

    @SB003
    Scenario: Verify User input insufficient funds card and can't process payment
        When User input insufficient funds card
        Then User can't payment with insufficient funds card

    @SB004
    Scenario: Verify User input lost card information and can't process payment
        When User input lost card
        Then User can't payment with lost card

    @SB005
    Scenario: Verify User input stolen card and can't process payment
        When User input stolen card
        Then User can't payment with stolen card

    @SB006
    Scenario: Verify User input expired card and can't process payment
        When User input expired card
        Then User can't payment with expired card

    @SB007
    Scenario: Verify User input incorrect cvc card and can't process payment
        When User input incorrect cvc card
        Then User can't payment with incorrect cvc card

    @SB008
    Scenario: Verify User input processing error card and can't process payment
        When User input processing error card
        Then User can't payment with processing error card

    @SB009
    Scenario: Verify User input invalid card number and can't process payment
        When User input invalid card number
        Then User can't payment with invalid card number

    @SB010
    Scenario: Verify User fail verification 3d card and can't process payment
        When User use 3d card and fail verification
        Then User can't payment successfully

    @SB011
    Scenario: Verify User can process payment successfully with 3d card
        When User use 3d card and completed verification
        Then User can payment with 3d card successfully

    @SB012
    Scenario: Verify User can upgrade new subscription plan
        When User choose higher plan and add valid card
        Then User upgrade new plan successfully

    @SB013
    Scenario: Verify User can downgrade subscription plan
        When User choose lower tire subscription
        Then System will process request downgrade for next payment

    @SB014
    Scenario: Verify User can't choose new subscription plan after request downgrade
        When User choose another plan
        Then System will display warning massage

    @SB015
    Scenario: Verify User can cancel request downgrade
        When User click hyperlink cancel request
        Then System process cancel request successfully

    @SB016
    Scenario: Verify User can cancel subscription
        When User click button cancel subsciption
        Then System will process request cancel subscription for next payment

    @SB017
    Scenario: Verify User can't choose new plan after request cancel
        When User choose another plan
        Then System will display warning massage

    @SB018
    Scenario: Verify User can cancel request cancel
        When User click hyperlink cancel request
        Then System process cancel request successfully