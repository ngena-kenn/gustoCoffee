import React from 'react';

const MentionsCGU = () => {
  return (
    <div className="mentions-cgu-container">
      <h1>Mentions CGU</h1>

      <section>
        <h2>1. Conditions Générales d'Utilisation</h2>
        <p>
        La société Gusto coffee, AU capital de 10.000 € immatriculée sous le numéro 
        231654 987 au RCS de Paris, 
        Le transfert de propriété des produits livrés au consommateur n’intervient qu’après paiement  
intégral de leur prix et de ses accessoires par ses soins. Durant la période s’écoulant
 jusqu’au complet paiement du prix et de ses accessoires, les risques de perte, vol ou destruction 
 sont à la charge du consommateur  

        </p>
        
      </section>

      <section>
        <h2>2. Engagements des utilisateurs</h2>
        <p>
          En utilisant notre espace de coworking, vous vous engagez à respecter les règles et
          conditions énoncées dans nos CGU. Les présentes conditions générales s’appliquent à toute
           vente de produits présentés sur le site http://gustocoworking.com Toute commande effectuée
            auprès de la société Gusto Coffee entraîne donc l’acceptation sans réserve des présentes conditions.
             Seul l’acheteur peut se prévaloir des présentes, et notamment des dispositions relatives à la garantie. 
        </p>
        {/* Ajoutez le contenu spécifique aux engagements des utilisateurs ici */}
      </section>

      {/* Ajoutez d'autres sections selon vos besoins */}

      <section>
        <h2>3. Contact</h2>
        <p>
        La société Gusto coffee,  Nom Commercial : au capital de 10000€ immatriculée au Registre du Commerce et des Sociétés
         de Paris sous le numéro 484 969 250 et dont le siège social est situé 10 rue des lilas Créteil 94000 Paris 
         – Téléphone : 01 46 87 96 32 du lundi au samedi de 08H à 12H Et de 13H à 21H avec comme site internet https://gustocoworking.net
          Numéro de TVA : FR 32 231654987 A travers ce site, elle propose à la vente différents produits dont les internautes, personnes physiques ou morales, 
          peuvent faire l’acquisition notamment au travers d’une procédure de paiement en ligne sécurisé mise en œuvre et gérée
           par les établissements bancaires dont elle s’est adjoint les services. La société Gusto Coffee fait ellemême la livraison des 
           produits commandés par le consommateur par l’intermédiaire de la poste et ceci selon les modalités et délais indiqués sur le site au moment de la commande.
            Le site est réalisé en langue française, de même que toutes les étapes, électroniques ou pas, nécessaires à la validation de sa commande par le consommateur.
             Les contrats de vente conclus entre la société Gusto Coffee et le consommateur le sont donc en langue française.
          Pour toute question concernant nos Conditions Générales d'Utilisation, veuillez
          nous contacter à l'adresse suivante : <a href="mailto:ngenakenn@gmail.com">cowoking@gustocoffee.com   </a>.
        </p>
      </section>
    </div>
  );
};

export default MentionsCGU;
