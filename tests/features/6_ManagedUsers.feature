Feature: Managed Users

    As a User I want check all case of Feature Managed Users


    @MU001
    Scenario: Verify Owner can invite Users
        Given  User Open website MMAP
        When User input all valid infomation
        Then User create account successfull
        When User invite new Users
        Then User invite new Users succesfull

    @MU002
    Scenario: Verify Owner can re invite Users
        When User click button reinvite
        Then User can reinvite succesfull

    @MU003
    Scenario: Verify Onwer can't invite yourself
        When User input email of Owner
        Then System display error You cannot invite yourself

    @MU004
    Scenario: Verify Owner can unlock Users
        When User click button unlock Users and buy new plan
        Then User can unlock Users succesfull

    @MU004
    Scenario: Verfiy Member can receive notifi invite
        When Onwer invited Member succesfull
        Then Member can recive noifi invite

    @MU005
    Scenario: Verify Member can decline invite
        When Onwer invited Member second time succesfull
        Then Member can decline invite

    @MU006
    Scenario: Verify Member can accept invite
        When Onwer invited Member third time succesfull
        Then Member can accept invite

    @MU007
    Scenario: Verify Owner can delete member
        When User click button delete member
        Then User can delete member succesfull