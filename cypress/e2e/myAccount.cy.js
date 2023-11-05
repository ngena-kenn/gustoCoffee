describe('MyAccount Component', () => {
    it('Should render MyAccount component after login', () => {
      cy.visit('/my-account'); // Assurez-vous que l'URL est correcte
      cy.login(); // Si vous avez une fonction de connexion, appelez-la ici
      cy.get('.user-menu').should('be.visible');
    });

    it('"Mes reservations" tab', () => {
        cy.get('[eventKey="my-orders"]').click();
        cy.get('OrderCard').should('exist'); // Assurez-vous que le composant OrderCard est rendu
      });
      
      it('"Details du compte" tab', () => {
        cy.get('[eventKey="account-details"]').click();
        cy.get('Heading').should('include.text', 'Details');
      });

      it(' "Déconnexion" button', () => {
        cy.get('button').contains('Déconnexion').click();
        cy.url().should('include', '/home'); // Assurez-vous que l'utilisateur est redirigé vers la page d'accueil
      });

      it('display user information', () => {
        cy.get('Image').should('be.visible');
        cy.get('.user-menu').contains('Hello');
        cy.get('.user-menu').contains('Déconnecté');
      });

      it('reservation history', () => {
        cy.get('[eventKey="my-orders"]').click();
        cy.get('OrderCard').should('have.length', values.length);
      });
      
  });