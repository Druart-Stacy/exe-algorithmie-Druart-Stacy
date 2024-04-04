// Exercice 2.6
// Réalisez un programme qui demande à l'utilisateur d'entrer un nombre entre 1 et 7.
// En fonction du nombre, afficher le jour de la semaine qui correspond. (1 => lundi, 2 => mardi, etc...)
// let numJ=1;
// let numbJ2=2;
// let numb3=3;

// console.log("votre nombre de 1 a 7?")
// if (num1==1) {
//     console.log("Lundi");
// }
// else if (num1=2){
//     console.log("Mardi");

// }
// else if (num1=3){
//     console.log("Mercredi");
// }
// else if (num1=4){
//     console.log("Jeudi");

// }
// else if (num1=5){
//     console.log("vendredi");

// }
// else if (num1=6){
//     console.log("Samedi");
// }
// else
// console.log("Dimanche");
const readline = require('readline');

const jour = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

jour.question('Entrez un nombre entre 1 et 7 : ', (num) => {
  num = parseInt(num);

  console.log("Votre nombre de 1 à 7 ?");

  if (num === 1) {
      console.log("Lundi");
  } else if (num === 2) {
      console.log("Mardi");
  } else if (num === 3) {
      console.log("Mercredi");
  } else if (num === 4) {
      console.log("Jeudi");
  } else if (num === 5) {
      console.log("Vendredi");
  } else if (num === 6) {
      console.log("Samedi");
  } else if (num === 7) {
      console.log("Dimanche");
  } else {
      console.log("Le nombre entré n'est pas valide. Veuillez entrer un nombre entre 1 et 7.");
  }

  jour.close();
});


//ok
