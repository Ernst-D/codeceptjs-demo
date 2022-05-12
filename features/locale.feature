# bug? https://api-iam.intercom.io/messenger/web/ping with Ukrainiane locale - response still has a user.locale = "ru" 

Feature: Localization

 # Manage locale with browser.newContext([options]) when creating new context in PW
  Scenario Outline: User delete exisiting field
    Given User's browser has <locale>
    When user navigates to login page 
    And User logs in
    # check that /:_locale/v1/auth/login has specific _locale
    Then User is on the Dashboard with locale <locale>

    Examples:
        | locale |
        | en_GB |
        | uk_UK |
        | fr_FR |