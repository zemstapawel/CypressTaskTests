Feature: SIGN IN

  Scenario: As a user from GBR with active account I want to log in - happy path

    Given I'm on login screen
    And 'loginhappypath@test.com' is my email (signin)
    And 'test123' is my password (signin)
    When I submit the form (signin)
    Then I go to dashboard page
    Then LOGOUT

  Scenario: As a user with active account I want to log in but my email address is incorrect - fail path

    Given I'm on login screen
    And 'loginfailpath.google.com' is my email (signin)
    And 'webuser123' is my password (signin)
    Then I see 'Invalid email address' email address field error message (signin)

  Scenario: As a user with active account I want to log in but my details are incorrect - fail path

    Given I'm on login screen
    And 'loginfailpath@test.com' is my email (signin)
    And 'webuser123' is my password (signin)
    When I submit the form (signin)
    Then I see 'Incorrect login details' email address field error message (signin)

  Scenario: As a user I want to log in without enter any data - fail path

    Given I'm on login screen
    When I submit the form (signin)
    Then I see 'Please fill in' email address field error message (signin)
    And I see 'Please fill in' password field error message (signin)

