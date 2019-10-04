Feature: Login

  As a User I want check all case of Feature Login
  Background:
    Given User Open website MMAP

  @TestCass003
  Scenario: Verify user blank 2 field and can't login system
    When User blank 2 field
    Then User can't login system 1st

  @TestCass004
  Scenario: Verify user blank email field and can't login system
    When User blank email field
    Then User can't login system 2nd

  @TestCass005
  Scenario: Verify user blank password field and can't login system
    When User blank password field
    Then User can't login system 3rd

  @TestCass006
  Scenario: Verify user input incorrect email and can't login system
    When User input incorrect email
    Then User can't login system 4th

  @TestCass007
  Scenario: Verify user input incorrect password can't login system
    When User input incorrect password field
    Then User can't login system 5th

  @TestCass002
  Scenario: Verify user can login system
    When User input correct email and password
    Then User can login system
