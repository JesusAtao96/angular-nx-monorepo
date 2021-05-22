/* import { Styles } from '@dc/models';

describe('dc-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=common-button--primary'));

  it('should render the component', () => {
    cy.get('dc-button').should('exist');
  });


  describe('Should render style', () => {
    it('default', () => {
      cy.visit('/iframe.html?id=common-button--primary&knob-style=default')
      cy.get('.button.default').should('exist').and('have.class', 'default');
    });

    it('primary', () => {
      cy.visit('/iframe.html?id=common-button--primary&knob-style=primary');
      cy.get('.button.primary').should('exist').and('have.class', 'primary');
    });

    it('warning', () => {
      cy.visit('/iframe.html?id=common-button--primary&knob-style=warning');
      cy.get('.button.warning').should('exist').and('have.class', 'warning');
    });

    it('danger', () => {
      cy.visit('/iframe.html?id=common-button--primary&knob-style=danger');
      cy.get('.button.danger').should('exist').and('have.class', 'danger');
    });

    it('success', () => {
      cy.visit('/iframe.html?id=common-button--primary&knob-style=success');
      cy.get('.button.success').should('exist').and('have.class', 'success');
    });
  });
});
 */

describe('dc-ui button', () => {
  // '/iframe.html?id=buttoncomponent--primary&knob-text=Click me!&knob-padding&knob-style=default'
  const styles = ['default', 'primary', 'warning', 'danger'];
  const baseUrl = '/iframe.html?id=common-button--primary&viewMode=story';

  it('should render the component', () => {
    cy.visit(baseUrl);
    cy.get('.button').should('exist');
    cy.get('.button').contains('Click me!');
  });

  it.only('should have the label "Validate Form"', () => {
    cy.visit(
      `${baseUrl}&knob-text=Validate Form&knob-style=primary`
    );
    // cy.get('.button').should('have.class', '.primary');
    cy.get('.primary').contains('Validate Form');
  });

  it('should render the component per style', () => {
    styles.forEach((style) => {
      cy.visit(
        `${baseUrl}&knob-style=${style}`
      );
      cy.get(`.${style}`).should('exist');
    });
  });

  it('should not exist after click', () => {
    cy.visit(baseUrl);
    cy.get('.button').click();
    cy.get('.button').should('not.exist');
  });
});
