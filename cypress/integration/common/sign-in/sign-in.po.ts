import { NgkInput } from '../../utils/forms/input';

export class SignInPageObject {
  get form(): Cypress.Chainable<JQuery> {
    return cy.get('ngk-sign-in-form form');
  }

  get email(): NgkInput {
    return new NgkInput('email');
  }

  get password(): NgkInput {
    return new NgkInput('password');
  }
}
