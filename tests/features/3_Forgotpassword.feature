Feature: Forgot Password

    As a user I want check all case of Feature Forgot Password

    Background:
        Given User Open website MMAP

    @TestCase018
    Scenario: Verify user can request new password
        When User clicks btn Forgot password ?
        Then User can request new password

    # @TestCase019
    # Scenario: Verify user can change password
    #     When 
    #     Then 

    @TestCase020
    Scenario: Verify user can't request new password
        When 
        Then User can't request new password

    @TestCase021
    Scenario: Verify user can't change password 1st
        When 
        Then 

    @TestCase022
    Scenario: Verify user can't change password 2nd
        When 
        Then 