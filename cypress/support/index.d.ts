/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    selectNgkOption(option: string): void;
  }
}
