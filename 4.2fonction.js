// Exercice 4.2
// Créez une fonction nommée rand10() qui renvoie un nombre entier aléatoire compris entre 1 et 10. 
// Créez un programme qui affichera le résultat de cette fonction à chaque fois qu'elle sera exécutée.

// Rédigez une documentation pour la fonction rand10().

// Pour cet exercice, vous devrez chercher sur Google comment générer des nombres aléatoires en JavaScript.

/**
 * 
 * //note
 * Génère un nombre entier aléatoire compris entre 1 et 10.
 * @returns {number} Nombre entier aléatoire entre 1 et 10.
 */
//fin de note
function rand10() {
    return Math.floor(Math.random() * 11) + 1;
  }
  
  // Appel de la fonction rand10() une seule fois
  let resultat = rand10();
  console.log("Résultat de rand10():", resultat);