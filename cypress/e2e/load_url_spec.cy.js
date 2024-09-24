describe('Open URL and check page loaded', () => {
  it('should open the page and check it loaded successfully', () => {

    cy.visit('https://saucedemo.com');
    
    
    // Check if the document is fully loaded
    cy.document().should('have.property', 'readyState').and('eq', 'complete');
    
    // Verify if the body element is visible
    cy.get('body').should('be.visible');
  })
})