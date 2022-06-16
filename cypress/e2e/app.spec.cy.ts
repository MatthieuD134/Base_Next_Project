describe('Navigation', () => {
	it('should navigate to the landing page', () => {
		// Start from the index page
		cy.visit('/');

		// The new page should contain an h1 with "About page"
		cy.get('h1').contains('Welcome to Next.js');
	});
});
