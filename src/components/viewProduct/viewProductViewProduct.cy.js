
import React from 'react';
import { mount } from '@cypress/react';
import ViewProduct from './viewProduct'; 

describe('Test de ViewProduct', () => {
  beforeEach(() => {
   
    mount(<ViewProduct viewProduct={true} confirmCommande={() => {}} />);
  });

  it('Doit afficher le composant ViewProduct', () => {
  
    cy.get('.dialog.liste').should('be.visible');
    cy.get('.headerSearchText').should('be.visible');
    
  });

  it('Doit simuler la confirmation de la commande', () => {
   
    cy.contains('Confirmer').click();

    cy.get('.payment').should('be.visible');
   
  });

  it('Doit gérer le cas où aucune commande n\'a été passée', () => {
   
    mount(<ViewProduct viewProduct={true} confirmCommande={() => {}} />);

    cy.contains("Vous n'avez pas encore fait de commandes").should('be.visible');

  });

  it('Doit gérer la fermeture de la fenêtre', () => {

    cy.get('.dialog.liste').should('be.visible');
    cy.contains('Annuler').click();

    cy.get('.dialog.liste').should('not.be.visible');
  
  });


});
