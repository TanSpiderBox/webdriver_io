Feature: Login

  Background: As a User I want check all case of Feature Login
    Given User Open website MMAP

  @LG002
  Scenario: Verify User blank 2 field and can't login system
    When User blank 2 field
    Then User can't login system with blank 2 field

  @LG003
  Scenario: Verify User blank email field and can't login system
    When User blank email field
    Then User can't login system with blank email field

  @LG004
  Scenario: Verify User blank password field and can't login system
    When User blank password field
    Then User can't login system with blank password field

  @LG005
  Scenario: Verify User input incorrect email and can't login system
    When User input incorrect email
    Then User can't login system with incorrect email

  @LG006
  Scenario: Verify User input incorrect password can't login system
    When User input incorrect password field
    Then User can't login system with incorrect password

  @LG007
  Scenario: Verify User can login system
    When User input correct email and password
    Then User can login succesfull