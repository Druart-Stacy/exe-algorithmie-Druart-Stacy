// exercice 4.4 Créez une fonction pickLearner(inputAr, n) qui prend 2 paramètres.

// inputAr : Un tableau d'apprenants (celui que vous avez créé dans l'exercice 3.0 par exemple)
// n : Un nombre, qui doit être supérieur à 0 et inférieur à la longueur de inputAr
// La fonction doit retourner un tableau d'apprenants sélectionnés aléatoirement.

function pickLearner(inputAr, n) {
    if (n <= 0 || n > inputAr.length) {
      return "Le nombre doit être supérieur à 0 et inférieur à la longueur du tableau.";
    }
  
    const selectedLearners = [];
    const shuffledArray = inputAr.sort(() => Math.random() - 0.5); // Mélanger le tableau
  
    for (let i = 0; i < n; i++) {
      selectedLearners.push(shuffledArray[i]); // Ajouter les n premiers éléments mélangés
    }
  
    return selectedLearners;
  }
  
  const apprenants = [
    "Iliess", "Maryam", "Nathanael", "Zahra", "Dorian B", "Adrien B", "Jean Emmanuel", "Adrien C", "Caroline D",
    "Tom Deconnick", "Stacy", "Dylan F", "Justine F", "Mohamed Kamal", "Lyne kapongo", "Dzheylan kyamilova", "Ludovic",
    "justine L", "Denis", "Jordan M", "Nataliia", "Angel N", "Isabelle", "Youris", "Giovanni", "Arnaud V", "Julie W"
  ];
  
  const result = pickLearner(apprenants, 5); // Sélectionner 5 apprenants aléatoirement
  console.log(result);

  //ok