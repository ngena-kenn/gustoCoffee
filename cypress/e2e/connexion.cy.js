const logger = require('./log');

describe('Test du formulaire de connexion', () => {
  it('Doit soumettre le formulaire avec succès', () => {
    // Visitez la page qui contient le formulaire
    cy.visit('/connect'); 
    logger.info('Début du test');
    
    cy.get('input[type="email"]').type('ngenakenn@yahoo.com');
    cy.get('input[type="password"]').type('Tiomo.2002');

    
    cy.get('.registration-form > button').click();

    // Vérifiez que le formulaire a été soumis avec succès (par exemple, en vérifiant que l'utilisateur est connecté)
    // Vous pouvez ajouter des assertions ici en fonction du comportement de votre application
    // Par exemple, vérifiez que vous êtes redirigé vers une page de succès
    cy.url().should('eq', '/my-account');
  });

  it.only('Doit gérer des cas de formulaire invalide', () => {
    cy.visit('/connect'); 
    cy.get('input[type="email"]').type(' ');
    cy.get('input[type="password"]').type(' ');
    cy.get('.registration-form > button').click();
    cy.get('input[type="email"]').type('erreur');
    logger.info('Test terminé');
    //cy.url().should('eq', '/connect');
  });
});
