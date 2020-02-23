import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});

Given(/^I'm on login screen$/, givenOnLoginScreen);
export function givenOnLoginScreen(): void {
  cy.visit('/ngk/auth/sign-in');
}

Then(/^I go to dashboard page$/, thenGoToDasboard);
export function thenGoToDasboard(): void {
  cy.url().should('include', '/dashboard');
  cy.url().should('not.include', 'auth/sign-in');
}

Then(/^LOGOUT$/, logout);
export function logout(): void {
  cy.get('ngk-appbar .user-info').then(userMenu$ => {
    if (userMenu$.attr('hidden')) {
      cy.get('ngk-appbar .logo').click();
    }
  });

  cy.get('ngk-appbar .user-info').click();
  cy.get('ngk-menu ngk-list-item h3').contains('Logout').click();
  cy.url().should('include', '/sign-in');
}