// form.spec.js
describe('Test du formulaire de connexion', () => {
  it('Doit soumettre le formulaire avec succès', () => {
    // Visitez la page qui contient le formulaire
    cy.visit('/connect'); // Remplacez l'URL par celle de votre application

    // Saisissez un email et un mot de passe dans les champs
    cy.get('input[type="email"]').type('ngenakenn@yahoo.com');
    cy.get('input[type="password"]').type('Tiomo.2002');

    // Soumettez le formulaire en cliquant sur le bouton "Connexion"
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
    //cy.url().should('eq', '/connect');
  });
});
