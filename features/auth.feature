Feature: User authentication

  Scenario: User logs in with existing creds
    Given User is on the auth page
    And User see login form
    When User enters his email and password
    And User click SignIn
    Then User see the Dashboard