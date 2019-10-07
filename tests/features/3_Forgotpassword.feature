Feature: Forgot Password

    As a user I want check all case of Feature Forgot Password

    Background:
        Given User Open website MMAP

    # @TestCase018
    # Scenario: Verify User can request new password
    #     When User input existing email
    #     Then User can request new password

    # @TestCase019
    # Scenario: Verify User can't request new password
    #     When User input doesn't exisiting email
    #     Then User can't request new password

    # @TestCase020
    # Scenario: Verify User can't change password 1st
    #     When User blank password and password confirm
    #     Then User can't change password 1st

    # @TestCase021
    # Scenario: Verify User can't change password 2nd
    #     When User input password to short
    #     Then User can't change password 2nd

    # @TestCase022
    # Scenario: Verify User can't change password 3rd
    #     When User input password and password confirm don't match
    #     Then User can't change password 3rd

    @TestCase023
    Scenario: Verify User can change password and login system success
        When User input valid password and password confirm
        Then User can login succesfull with new password