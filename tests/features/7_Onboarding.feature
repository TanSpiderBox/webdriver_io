Feature: Oboarding

    Background: As a User I want check all case of Feature Onboarding

    @OB001
    Scenario: Verify New User first login must complete Onboarding
        Given User Open website MMAP
        When User input all valid infomation
        Then User create account successfull
        When User login first time
        Then User must completed Onboarding

    @OB002
    Scenario: Verify New User can add maximum 3 Units
        When User sync maximum 3 Units
        Then System display message Need to add more units?

    @OB003
    Scenario: User trial can't download Excel Word
        When User trial click button download Excel
        Then User can't download Excel and System display Upgrade your account to unlock this feature.
        When User trial click button download Word
        Then User can't download Word and System display Upgrade your account to unlock this feature.

    @OB004
    Scenario: User trial can download pdf one time per units
        When User trial click button download PDF
        Then System display Upgrade You have used your allocated trial download, to download further PDFs, Excel, and Word documents, please upgrade your account.

    @OB005
    Scenario: Vefiry User can restart onboarding
        When User click restart onboarding
        Then User can do onboarding again