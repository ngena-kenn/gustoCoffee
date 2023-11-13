  describe('Test du formulaire d\'inscription', () => {
    it('Inscription réussie', () => {
      cy.visit('/inscript'); 
  
      // Saisie des données
      cy.get('input[name="user_name"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="pwd"]').type('motdepasse123');
      cy.get('input[name="pwd"]').eq(1).type('motdepasse123'); // Deuxième champ de mot de passe
  
      // Soumission du formulaire
      cy.get('form').submit();
  
      // Vérification du résultat
      cy.url().should('eq', '/my-account'); 
    });
  
    it('Gestion des erreurs d\'inscription', () => {
      cy.visit('/inscript'); 
  
     
      cy.get('input[name="user_name"]').type(' ');
      cy.get('input[name="email"]').type('email-invalide');
      //cy.get('input[name="pwd"]').type('motdepasse');
      cy.get('input[name="pwd"]').eq(1).type('motdepasse-different'); // Deuxième champ de mot de passe
  
      // Soumission du formulaire
      cy.get('form').submit();
  
      // Vérification des messages d'erreur
      cy.get('.text-danger').should('be.visible');
    });
  });
  