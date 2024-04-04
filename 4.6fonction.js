// Exercice 4.6
// Créez une fonction factorielle(a) qui renvoie la factorielle d'un nombre.

// Cette fonction doit être récursive.
function factorial(a){
    return (a != 1) ? a * factorial(a - 1) : 1;
  }
  console.log(factorial(4));
  

  //ok