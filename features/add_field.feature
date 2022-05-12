Feature: Field selection

# whenever you add new field - listen for /predicted/fields request and assert on its body (that is not empty or something)
  Scenario: User adds field from map
    Given User is on the Dashboard
    And The location is Zlin
    When User click on "Select on map"
    # check /en/v1/predicted/fields request
    And User select field from map
    And User click Save btn
    # check for /en/v1/seasons/:field_user_season_id/fields and assert on its response body
    Then User see added field on Dashboard
    # check /fields?with=last_ndvi list of available fields
    And Field is highlighted on a map