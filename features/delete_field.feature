Feature: Field removal

  Background:
    Given User is on the Dashboard
    When User adds field
    Then Field is displayed on Dashboard

 # You can try to have network assertion, for example listen for field creation and then verify its removal
  Scenario: User delete exisiting field
    Given User is on the Dashboard 
    And User has at least one field
    When User hovers and click on action list
    And User clicks Delete btn
    # assert on [class="main-container-notification-actions"] elem
    Then User see confirmation notification for a while
    # assert on /en/v1/seasons/:season_id/fields/:field_user_season_id and its response
    And Field is removed from list