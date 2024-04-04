// exercice 2.2
//Demandez à l'utilisateur de saisir trois nombres : min, maxet current. Afficher si currentest compris entre minet max.

// Demander à l'utilisateur de saisir trois nombres : min, max, et current
let min = parseFloat(prompt("Entrez le nombre minimum :"));
let max = parseFloat(prompt("Entrez le nombre maximum :"));
// let current = parseFloat(prompt("Entrez le nombre actuel :"));

// Vérifier si current est compris entre min et max
if (min <= current && current <= max) {
    console.log("Le nombre actuel est compris entre le nombre minimum et le nombre maximum.");
} else {
    console.log("Le nombre actuel n'est pas compris entre le nombre minimum et le nombre maximum.");
}


