Feature: Register

    As a User i wan check all case of Feature Register
    Background: 
      Given User Open website MMAP

  @RG001
  Scenario: Verify User blank all field and can't register new account
    When User blank all all field
    Then User can't register new account with blank all field

  @RG002
  Scenario: Verify User blank field First Name and can't register new account 
    When User blank First Name
    Then User can't register new account with blank field First Name

  @RG003
  Scenario: Verify User blank field Password can't register new account 
    When User blank Password
    Then User can't register new account with blank field Password

  @RG004
  Scenario: Verify User blank field Confirm Password and can't register new account
    When User blank Confirm Password
    Then User can't register new account with blank field Confirm Password

  @RG005
  Scenario: Verify User don't select User Role and can't register new account 
    When User don't select User Role
    Then User can't register new account with blank User Role

  @RG006
  Scenario: Verify User input Password don't match and can't register new account
    When User input Password don't match
    Then User can't register new account with Password don't match

  @RG007
  Scenario: Verify User input Existing Email and can't register new account
    When User input Existing Email
    Then User can't register new account with Existing Email

  @RG008
  Scenario: Verify User input Password is so short can't register new account
    When User input Password is too short
    Then User can't register new account with Password is so short

  @RG009
  Scenario: Verify User can register new account
    When User input all valid infomation
    Then User create account successfull

  # @TRG010
  # Scenario: Verify User can login system with new account register
  #   # When User select email confirm
  #   # Then User can comfirm Email
  #   When User input correct email and password
  #   Then User can login succesfull