Feature: Forgot Password

    Background: As a user I want check all case of Feature Forgot Password

    @FP001
    Scenario: Verify User blank email field and can't request new password
        Given User Open website MMAP
        When User blank email field request
        Then User can't request new password 1st

    @FP002
    Scenario: Verify User input doesn't exisiting email and can't request new password 2nd
        When User input doesn't exisiting email
        Then User can't request new password 2nd

    @FP003
    Scenario: Verify User input exisiting email request and can request new password
        When User input exisiting email request
        Then User can request new password

    # TODO: using mail API here
    @FP004
    Scenario: Verify User blank password and password confirm and can't change password 1st
        When User blank password and password confirm
        Then User can't change password 1st

    @FP005
    Scenario: Verify User blank password and can't change password 2nd
        When User blank password and iput password confirm
        Then User can't change password 2nd

    @FP006
    Scenario: Verify User blank password confirm and can't change password 3rd
        When User blank password confirm and input password
        Then User can't change password 3rd

    @FP007
    Scenario: Verify User input password to short and blank password confirm and can't change password 4th
        When User input password to short and blank password confirm
        Then User can't change password 4th

    @FP008
    Scenario: Verify User input password and password confirm to short and can't change password 5th
        When User input password and password confirm to short
        Then User can't change password 5th

    @FP009
    Scenario: Verify User input password and password confirm don't match and can't change password 6th
        When User input password and password confirm don't match
        Then User can't change password 6th

    @FP010
    Scenario: Verify User can login with new password
        When User input valid password and password confirm
        Then User can login succesfull with new password