describe('dc-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=forms-input--primary'));

  it('should render the component', () => {
    cy.get('dc-input').should('exist');
  });
});
