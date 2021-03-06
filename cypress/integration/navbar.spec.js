describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to /about', () => {
    cy.get('.navbar-burger').click();
    cy.get('.navbar-menu .navbar-item').contains('about').click();
    cy.url().should('include', '/about');
  });

  it('navigates to /blog', () => {
    cy.get('.navbar-burger').click();
    cy.get('.navbar-menu .navbar-item').contains('blog').click();
    cy.url().should('include', '/blog');
  });
});
