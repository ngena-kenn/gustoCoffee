
describe('Navigation Component', () => {
    it('Should navigate to different pages and display cart and user information', () => {
      cy.visit('/home'); 

      cy.get('.logo').should('be.visible').click();
      cy.url().should('include', '/home');
  
      // Naviguez vers d'autres pages
      cy.contains('Espaces').click();
      cy.url().should('include', '/espaces');
      cy.contains('Tarifs').click();
      cy.url().should('include', '/a_propos');
      cy.contains('Evenements').click();
      cy.url().should('include', '/actualite');
      cy.contains('Franchise').click();
      cy.url().should('include', '/franchise');
  
      // Si l'utilisateur est connecté, assurez-vous que le panier et les informations de l'utilisateur sont visibles
      cy.contains('Connexion').click();
      cy.url().should('include', '/connect');
      // Connectez-vous à un utilisateur (simulez la connexion)
      // ...
      // Une fois connecté, assurez-vous que le nom d'utilisateur est affiché
      cy.contains('ngenaknn@yahoo.com').should('be.visible');
      cy.contains('Accueil').click();
      cy.url().should('include', '/home');
      // Assurez-vous que le panier est visible
      cy.get('.MuiBadge-badge').should('be.visible');
      // Cliquez sur le panier pour afficher les articles du panier
      cy.get('.MuiBadge-badge').click();
      cy.contains('Shopping Cart').should('be.visible');
      // Vous pouvez ajouter plus d'actions pour tester le panier
    });
  });
  