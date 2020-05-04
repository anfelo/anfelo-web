describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.contains('.title', 'Andres Osorio');
  });

  it('has the correct subtitle', () => {
    cy.contains('.subtitle', 'Entrepreneur ● Software Engineer ● Home Barista');
  });

  it('navigates to /about when click on callout', () => {
    cy.get('.button-callout').contains('lets have a coffee').click();
    cy.url().should('include', '/about');
  });
});
