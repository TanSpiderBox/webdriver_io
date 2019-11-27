Feature: Billing Information

    @TestCase041
    Scenario: Verify system display correct information of Billing Information Screen
        Given  User Open website MMAP
        When User input correct email and password
        Then User can login succesfull
        When User access Billing Information
        Then System display correct information of Billing Information Screen

    @TestCase042
    Scenario: Verify User can add new card information in Billing Information Screen
        When User input all valid information of card
        Then User can add new card information in Billing Information Screen

    @TestCase043
    Scenario: Verify User can remove existing card
        When User click button remove card
        Then User can remove existing card

    @TestCase044
    Scenario: Verify User input declined card and can't add new card information in Billing Information Screen
        When User input decline card
        Then User can't add new card 1st

    @TestCase045
    Scenario: Verify User input insufficient funds card and can't add new card information in Billing Information Screen
        When User input insufficient funds card
        Then User can't add new card 2nd

    @TestCase046
    Scenario: Verify User input lost card information and can't add new card information in Billing Information Screen
        When User input lost card
        Then User can't add new card 3rd

    @TestCase047
    Scenario: Verify User input stolen card and can't add new card information in Billing Information Screen
        When User input stolen card
        Then User can't add new card 4th

    @TestCase048
    Scenario: Verify User input expired card and can't add new card information in Billing Information Screen
        When User input expired card
        Then User can't add new card 5th

    @TestCase049
    Scenario: Verify User input incorrect cvc card and can't add new card information in Billing Information Screen
        When User input incorrect cvc card
        Then User can't add new card 6th

      @TestCase050
    Scenario: Verify User input processing error card and can't add new card information in Billing Information Screen
        When User input processing error card
        Then User can't add new card 7th
 
    @TestCase051
    Scenario: Verify User input invalid card number and can't add new card information in Billing Information Screen
        When User input invalid card number
        Then User can't add new card 8th