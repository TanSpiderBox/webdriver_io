Feature: Subsription

    Background: As a User I want check all case of Feature Subscription

    @SB001
    Scenario: Verify system display correct information of Subscription Plan screen
        Given  User Open website MMAP
        When User input correct email and password
        Then User can login succesfully
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
        When User user 3d card and fail verification
        Then User can't payment succesfully

    # @SB0010
    # Scenario: Verify User can choose new plan
    #     When User input all valid information of card
    #     Then User can payment succesfully

    # @SB0011
    # Scenario: Verify User can cancel subscription
    #     When User click button cancel
    #     Then User cancel subscription succesfully

    # @SB0012
    # Scenario: Verify User can renewal subscription
    #     When User click button renewal
    #     Then User renewal subscription succesfully

