
describe('PaymentForm Component', () => {
    it('Should successfully submit payment form', () => {
      // Rendez votre composant PaymentForm
      cy.visit('/espaces'); // Assurez-vous que l'URL est correcte
  
      // Saisie des informations dans le formulaire
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
  
      // Simule la saisie des informations de carte de crédit (utilisez des informations de test Stripe)
      cy.get('.CardField-input-wrapper input[name="cardNumber"]').type('4242 4242 4242 4242');
      cy.get('.CardField-input-wrapper input[name="cardExpiry"]').type('12/25');
      cy.get('.CardField-input-wrapper input[name="cardCvc"]').type('123');
  
      // Soumettez le formulaire
      cy.get('form').submit();
  
      // Assurez-vous que la page de confirmation est affichée
      cy.contains('merci de votre reservation').should('be.visible');
  
      // Vous pouvez également ajouter des assertions supplémentaires si nécessaire
    });
  });
      