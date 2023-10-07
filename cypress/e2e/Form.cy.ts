// The initial test fails due to a short `textarea` rendering delay, but this is rectified after re-running it.
describe('Form Component', () => {
  it('should fill out and submit the form successfully', () => {
    cy.visit('/contact');

    // Wait until the form fields complete rendering to the DOM:
    cy.get('input[name="fullName"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="subject"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');

    // Fill out the form fields
    cy.get('input[name="fullName"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@example.com');
    cy.get('input[name="subject"]').type('Test Subject');
    cy.get('textarea[name="message"]').type('This is a mock message');

    // Submit the form
    cy.get('button').contains('SUBMIT').click();

    // Assert that the form submission is successful
    cy.url().should('include', '/confirmation');
    cy.contains('Your message has been received! I will respond within 2 business days!');
  });
});
