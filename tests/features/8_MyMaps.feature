Feature: Mapping

    # Background: Background name
    #     Given Start to type your Given step here

    @TestCase0
    Scenario: Verify User can sync new RTO
        Given  User Open website MMAP
        When User input correct email and password
        Then User can login succesfull
        When User input RTO and click button sync
        Then User can sync new RTO

    @TestCase0
    Scenario: Verify User can sync new Course
        When User input Course and click button sync
        Then User can sync new Course

    @TestCase0
    Scenario: Verify User can sync new Unit
        When User input Unit and click button sync
        Then User can sync new Unit