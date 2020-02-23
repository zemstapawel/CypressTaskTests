Feature: SIGN UP

  Scenario: As a user I want to create new account - happy path
    Given I'm on signup screen
    And '@test.com' is my email (signup)
    And 'test111' is my password (signup)
    And 'Andrzej' is my first name (signup)
    And 'Kowalski' is my last name (signup)
    When I submit the form (signup)
    Then I go to complete profile
    Then LOGOUT
