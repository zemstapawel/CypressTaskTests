export class NgkInput {
  private readonly tag: string;

  constructor(tagName: string) {
    this.tag = `#${tagName}`;
  }

  get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
    return cy.get(this.tag).find('input');
  }

  get errorMessage(): Cypress.Chainable<JQuery<HTMLSpanElement>> {
    return cy.get(this.tag).find('.error-message-content');
  }
}
