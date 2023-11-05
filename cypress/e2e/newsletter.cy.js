describe('Test du formulaire d\'inscription à la newsletter', () => {
    it('Inscription à la newsletter réussie', () => {
      cy.visit('/franchise'); // Remplacez l'URL par celle de votre application
  
      // Saisie des données
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
  
      // Soumission du formulaire
      cy.get('form').submit();
  
      // Vérification de l'affichage de la fenêtre contextuelle
      cy.get('.text2').should('contain', 'Vous venez de vous inscrire à notre NEWSLETTER');
      cy.get('.popup').should('be.visible');
  
      // Fermeture de la fenêtre contextuelle
      cy.get('.popup').click();
      cy.get('.popup').should('not.be.visible');
    });
  
    it('Gestion des erreurs d\'inscription à la newsletter', () => {
      cy.visit('/franchise'); // Remplacez l'URL par celle de votre application
  
      // Ne saisissez pas de données ou des données incorrectes dans les champs
      cy.get('input[name="name"]').type('');
      cy.get('input[name="email"]').type('email-invalide');
  
      // Soumission du formulaire
      cy.get('form').submit();
  
      // Vérification de l'affichage du message d'erreur
      cy.get('.text2').should('not.exist');
      cy.get('.popup').should('not.exist');
    });
  });
  