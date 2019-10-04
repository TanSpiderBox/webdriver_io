Feature: User Profile

   As a user I want check all case of Feature User Profile
   Background: 
      Given User Open website MMAP
      Then User Select UserProfile
   
   @TestCase023
   Scenario: Verify system display correct User Information
      When User login system
      Then 
   
   @TestCase024
   Scenario: Verify user can change password in User Information screen
      When 
      Then 

   @TestCase025
   Scenario: Verify user can login system with new password
      When 
      Then 
   
   @TestCase026
   Scenario: Verify user input inccorect old password and can't change password in User Information screen
      When 
      Then 
   
   @Testcase027
   Scenario: Verify user input doesn't match new password and can't change password in User Information screen
      When 
      Then 