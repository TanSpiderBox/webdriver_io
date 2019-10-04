Feature: Register
  As a user i wan check all case of Feature Register

  Background:
    Given User Open website MMAP

  @TestCase010
  Scenario: Verify user blank all field and can't register new account 1st
    When User blank all all field
    Then User can't register new account 1st

  @TestCase011
  Scenario: Verify user blank field First Name and can't register new account 2nd
    When User blank First Name
    Then User can't register new account 2nd

  @TestCase012
  Scenario: Verify user blank field Password can't register new account 3rd
    When User blank Password
    Then User can't register new account 3rd

  @TestCase013
  Scenario: Verify user blank field Confirm Password and can't register new account 4th
    When User blank Confirm Password
    Then User can't register new account 4th

  @TestCase014
  Scenario: Verify user don't select User Role and can't register new account 5th
    When User don't select User Role
    Then User can't register new account 5th

  @TestCase015
  Scenario: Verify user input Password don't match and can't register new account 6th
    When User input Password don't match
    Then User can't register new account 6th

  @TestCase016
  Scenario: Verify user input Existing Email and can't register new account 7th
    When User input Existing Email
    Then User can't register new account 7th

  @TestCase017
  Scenario: Verify user input Password is so short can't register new account 8th
    When User input Password is too short
    Then User can't register new account 8th

  @TestCase008
  Scenario: Verify user can register new account
    When User input all valid infomation
    Then User create account successful