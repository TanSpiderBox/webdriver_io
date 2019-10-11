Feature: Register

    As a User i wan check all case of Feature Register
    Background: 
      Given User Open website MMAP

  @TestCase008
  Scenario: Verify User blank all field and can't register new account 1st

    When User blank all all field
    Then User can't register new account 1st

  @TestCase009
  Scenario: Verify User blank field First Name and can't register new account 2nd
    When User blank First Name
    Then User can't register new account 2nd

  @TestCase010
  Scenario: Verify User blank field Password can't register new account 3rd
    When User blank Password
    Then User can't register new account 3rd

  @TestCase011
  Scenario: Verify User blank field Confirm Password and can't register new account 4th
    When User blank Confirm Password
    Then User can't register new account 4th

  @TestCase012
  Scenario: Verify User don't select User Role and can't register new account 5th
    When User don't select User Role
    Then User can't register new account 5th

  @TestCase013
  Scenario: Verify User input Password don't match and can't register new account 6th
    When User input Password don't match
    Then User can't register new account 6th

  @TestCase014
  Scenario: Verify User input Existing Email and can't register new account 7th
    When User input Existing Email
    Then User can't register new account 7th

  @TestCase015
  Scenario: Verify User input Password is so short can't register new account 8th
    When User input Password is too short
    Then User can't register new account 8th

  @TestCase016
  Scenario: Verify User can register new account
    When User input all valid infomation
    Then User create account successfull

  @TestCase017
  Scenario: Verify User can login system with new account register
    # When User select email confirm
    # Then User can comfirm Email
    When User input correct email and password
    Then User can login succesfull