import { Given, When } from 'cypress-cucumber-preprocessor/steps';

import { SignInPageObject } from './sign-in.po';

const page = new SignInPageObject();

Given(/^'(.*)' is my email \(signin\)$/, givenEmail);
export function givenEmail(email: string): void {
  page.email.input.clear().type(email).should('have.value', email);
  page.email.errorMessage.should('be.empty');
}

Given(/^'(.*)' is my password \(signin\)$/, givenPassword);
export function givenPassword(password: string): void {
  page.password.input.clear().type(password).should('have.value', password);
  page.password.errorMessage.should('be.empty');
}

When(/^I submit the form \(signin\)$/, whenSubmit);
export function whenSubmit(): void {
  page.form.submit();
}

Given(/^I see '(.*)' email address field error message \(signin\)$/, invalidEmail);
export function invalidEmail(errorMessage: string): void {
  page.email.errorMessage
    .should('be.visible')
    .invoke('text')
    .should('have.string', errorMessage);
}

Given(/^I see '(.*)' password field error message \(signin\)$/, invalidPassword);
export function invalidPassword(errorMessage: string): void {
  page.password.errorMessage
    .should('be.visible')
    .invoke('text')
    .should('have.string', errorMessage);
}
