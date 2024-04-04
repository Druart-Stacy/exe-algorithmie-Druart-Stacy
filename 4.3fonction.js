// Exercice 4.3
// En réutilisant la fonction rand10() créée dans l'exercice 2, écrivez une fonction nommée multiRand(n) qui 
// renvoie un tableau de n nombres entre 1 et 10. Vous ne devez rien modifier dans rand10() pour y parvenir.

// Rédigez une documentation pour la fonction multiRand(n).

// Utilisez cette fonction pour créer un programme qui demandera le nombre de nombres aléatoires à générer,
//  puis affichera ce même nombre de nombres aléatoires.
function multiRand(n){

    let tableau = [];
    for (let i = 0; i < n; i++) {
        tableau.push(rand10());
    }
    return tableau;
  }
  
  // Programme principal
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Entrez le nombre de nombres aléatoires à générer : ", function(n) {
    let nombresAleatoires = multiRand(parseInt(n));
    console.log("Nombres aléatoires générés :", nombresAleatoires);
    rl.close();
  });
 