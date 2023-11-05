
describe('Test de ViewProduct', () => {
    it('Doit afficher le composant ViewProduct', () => {
      cy.visit('/espaces');
      // Assurez-vous que le composant est visible
      cy.get('.dialog.liste').should('be.visible');
      cy.get('.headerSearchText').should('be.visible');
    
    });
  
    it('Doit simuler la confirmation de la commande', () => {
      // Simulez la confirmation de la commande
      cy.contains('Confirmer').click();
      cy.get('.payment').should('be.visible');
   
    });
  
    it('Doit gérer le cas où aucune commande n\'a été passée', () => {
      // Désactivez la confirmation de la commande
      cy.visit('/espaces');
      // Assurez-vous que le message "Vous n'avez pas encore fait de commandes" est affiché
      cy.contains("Vous n'avez pas encore fait de commandes").should('be.visible');
    });
  
    it('Doit gérer la fermeture de la fenêtre', () => {
      // Simulez la fermeture de la fenêtre
      cy.get('.dialog.liste').should('be.visible');
      cy.contains('Annuler').click();
      // Assurez-vous que le composant n'est pas visible
      cy.get('.dialog.liste').should('not.be.visible');
    });
  });
  