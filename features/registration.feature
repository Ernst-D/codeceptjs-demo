Feature: User registration

  Scenario: User creates account using test email
    Given User is on the auth page
    But User see signup form
    When User enters his email and password
    And User click SignUp
    Then User see the Dashboard
    And User see the welcome message in test inbox