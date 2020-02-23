import { NgkInput } from '../../utils/forms/input';

export class SignUpPageObject {
  get form(): Cypress.Chainable<JQuery> {
    return cy.get('ngk-sign-up-form form');
  }

  get email(): NgkInput {
    return new NgkInput('email');
  }

  get password(): NgkInput {
    return new NgkInput('password');
  }

  get firstName(): NgkInput {
    return new NgkInput('firstName');
  }

  get lastName(): NgkInput {
    return new NgkInput('firstLastName');
  }

  get invitationCodeInput(): NgkInput {
    return new NgkInput('invitationCodeInput');
  }

  get submit(): Cypress.Chainable<JQuery> {
    return this.form.find('button[type="submit"]');
  }

  get individualCountry(): Cypress.Chainable<JQuery> {
    return this.form.find('#sendingCountry');
  }

  get submitButton(): Cypress.Chainable<JQuery> {
    return this.form.find('button[type="submit"]');
  }
}
