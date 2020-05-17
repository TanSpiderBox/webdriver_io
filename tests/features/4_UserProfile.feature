Feature: User Profile
   As a User I want check all case of Feature User Profile

   @UP001
   Scenario: Verify system display correct User Information
      Given  User Open website MMAP
      When User input correct email and password
      Then User can login succesfull
      When User select submenu User Profile
      Then System display User Profile Screen with all correct information of user

   @UP002
   Scenario: Verify User input inccorect old password and can't change password in User Information screen 1st
      When User input incorrect old password
      Then User can't change password in User Information screen

   @UP003
   Scenario: Verify User input doesn't match new password and can't change password in User Information screen 2nd
      When User input doesn't match new password
      Then User can't change password in User Information screen 2nd

   @UP004
   Scenario: Verify User can change password in User Information screen
      When User input valid all password information
      Then User change password succesfull

   @UP005
   Scenario: Verify User can login system with new password
      When User input email and new password
      Then User login system successfull with new password

   @UP006
   Scenario: Verify User clicks button pricing system will move to subscriptions page
      When User clicks button pricing
      Then System move to subscriptions page

   @UP007
   Scenario: Verify User clicks button Transaction History system will move to billing information page
      When User clicks button Transaction History
      Then System move to billing information page

   # @UP008
   # Scenario: Verify User can browse to upload
   #    When User browse to folder and select image
   #    Then User can update new image 2nd