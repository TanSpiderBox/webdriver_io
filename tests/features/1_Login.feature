Feature: Login

    As a User I want check all case of Feature Login
    Given User Open website MMAP

  @TestCass002
  Scenario: Verify User blank 2 field and can't login system 1st
    When User blank 2 field
    Then User can't login system 1st

  @TestCass003
  Scenario: Verify User blank email field and can't login system 2nd
    When User blank email field
    Then User can't login system 2nd

  @TestCass004
  Scenario: Verify User blank password field and can't login system 3rd
    When User blank password field
    Then User can't login system 3rd

  @TestCass005
  Scenario: Verify User input incorrect email and can't login system 4th
    When User input incorrect email
    Then User can't login system 4th

  @TestCass006
  Scenario: Verify User input incorrect password can't login system 5th
    When User input incorrect password field
    Then User can't login system 5th

  @TestCass007
  Scenario: Verify User can login system
    When User input correct email and password
    Then User can login succesfull