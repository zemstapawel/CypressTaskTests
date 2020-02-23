import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import { SignUpPageObject } from './sign-up.po';

const page = new SignUpPageObject();

export function generateEmailAddress(domain?: string): string {
  return `${new Date().getTime()}${domain || '@test.com'}`;
}

Given(/^'(.*)' is my email \(signup\)$/, givenEmail);
export function givenEmail(domain: string): void {
  
  const userEmail = generateEmailAddress(domain);

  page.email.input.clear().type(userEmail).should('have.value', userEmail);
}

Given(/^'(.*)' is my password \(signup\)$/, givenPassword);
export function givenPassword(password: string): void {
  page.password.input.clear().type(password).should('have.value', password);
}

Given(/^'(.*)' is my first name \(signup\)$/, givenFirstName);
export function givenFirstName(firstName: string): void {
  page.firstName.input.clear().type(firstName).should('have.value', firstName);
}

Given(/^'(.*)' is my last name \(signup\)$/, givenLastName);
export function givenLastName(lastName: string): void {
  page.lastName.input.clear().type(lastName).should('have.value', lastName);
}

When(/^I submit the form \(signup\)$/, whenSubmit);
export function whenSubmit(): void {
  page.submitButton.should('be.visible').and('not.be.disabled').click();
}

Given(/^'(.*)' is my country \(signup\)$/, givenCountry);
export function givenCountry(country: string): void {
  page.individualCountry.selectNgkOption(country);
}

Given(/^I see '(.*)' email address field error message \(signup\)$/, invalidEmail);
export function invalidEmail(errorMessage: string): void {
  page.email.errorMessage.should('be.visible').invoke('text').should('have.string', errorMessage);
}

Given(/^I see '(.*)' password field error message \(signup\)$/, invalidPassword);
export function invalidPassword(errorMessage: string): void {
  page.password.errorMessage.should('be.visible').invoke('text').should('have.string', errorMessage);
}

Given(/^I see '(.*)' first name field error message \(signup\)$/, invalidFirstName);
export function invalidFirstName(errorMessage: string): void {
  page.firstName.errorMessage.should('be.visible').invoke('text').should('have.string', errorMessage);
}

Given(/^I see '(.*)' last name field error message \(signup\)$/, invalidLastName);
export function invalidLastName(errorMessage: string): void {
  page.lastName.errorMessage.should('be.visible').invoke('text').should('have.string', errorMessage);
}
