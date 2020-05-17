Feature: Mapping

    As a User I want check all case of Feature Mapping

    @MP001
    Scenario: Verify User can sync new RTO
        Given  User Open website MMAP
        When User input correct email and password
        Then User can login succesfull
        When User input RTO and click button sync
        Then User can sync new RTO

    @MP002
    Scenario: Verify User can add new Maps in RTO
        When User add new map to libary in RTO succesfull
        Then User can add new maps in RTO

    # @MP003
    # Scenario: Verify User can't delete RTO have maps
    #     When User click button delete RTO have maps
    #     Then User will see warning can't delte RTO

    @MP004
    Scenario: Verify User can delete RTO don’t have maps
        When User click button delete RTO don't have maps
        Then User can delete RTO succesfull

    @MP005
    Scenario: Verify User can sync new Course
        When User input Course and click button sync
        Then User can sync new Course

    @MP006
    Scenario: Verify User can add new Maps in Course
        When User add new map to libary in Course succesfull
        Then User can add new maps in Course

    @MP007
    Scenario: Verify User can sync new Unit
        When User input Unit and click button sync
        Then User can sync new Unit

    @MP008
    Scenario: Verify User can start New Mapping
        When User select unit and start Mapping
        Then User can create new Mapping

    @MP009
    Scenario: Verify User can duplicate maps
        When User click button duplicate maps
        Then User can duplicate map succesfull

    @MP010
    Scenario: Verify User can delete duplicate maps
        When User click button delete duplicate maps
        Then User can delete duplicate map succesfull

    @MP011
    Scenario: Verify User can-re assign map
        When User click re-assign maps
        Then User can re-assign maps succesfull

    # @MP012
    # Scenario: Verify User can't delete folder have maps
    #     When User click button delete folder have maps
    #     Then User can't delete folder succesfull

    @MP013
    Scenario: Verify User can delete re-assgin map
        When User click button delete re-assign maps
        Then User can delete re-assign maps succesfull

    @MP014
    Scenario: Verify User can delete folder don't have maps
        When User click button delete folder don't have maps
        Then User can delete folder succesfull