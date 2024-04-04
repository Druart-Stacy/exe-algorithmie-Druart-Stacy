// Exercice 3.0
// Créez un tableau contenant tous les apprenants de la classe (vous pouvez trouver la liste complète sur le serveur Discord).
//  Affichez chaque nom dans la console en utilisant une boucle for ... of ....

const apprenants = [
    "1Iliess",
    "2Maryam",
    "3Nathanael",
    "4Zahra",
    "5Dorian B",
    "6Adrien B",
    "7Jean Emmanuel",
    "8Adrien C",
    "9Caroline D",
    "10Tom Deconnick",
    "11Stacy",
    "12Dylan F",
    "13Justine F",
    "14Mohamed Kamal",
    "15Lyne kapongo",
    "16Dzheylan kyamilova",
    "17Ludovic",
    "18justine L",
    "19Denis",
    "20Jordan M",
    "21Nataliia",
    "22Angel N",
    "23Isabelle",
    "24Youris",
    "25Giovanni",
    "26Arnaud V",
    "27Julie W",
];

// Afficher chaque nom dans la console en utilisant une boucle for...of
for (const apprenant of apprenants) {
    console.log(apprenant);
}

// Exercice 3.1
// Ecrivez un programme qui additionne tous les éléments d'un tableau.

// Testez-le avec les tableaux suivants :

// [1, 2, 3, 4, 5] => 15
// [100, 101, 102] => 303

let Array2=[1,2,3,4,5]
// Fonction pour additionner les éléments du tableau
function additionnerTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}
// exercice3.2
/**
 * Calculates the average value of an array.
 * @param {number[]} array - The array for which to calculate the average value.
 * @returns {number} The average value of the array.
 */
function calculateAverage(array) {
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / array.length;
}

// Test arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

// Calculate and display the average value for each test array
console.log("Average value of array1:", calculateAverage(array1));
console.log("Average value of array2:", calculateAverage(array2));

// exercice3.3

/**
 * Creates a duplicate of a given array using push().
 * @param {any[]} array - The array to duplicate.
 * @returns {any[]} The duplicate array.
 */
function duplicateArrayUsingPush(array) {
    const duplicate = [];
    for (const element of array) {
        duplicate.push(element);
    }
    return duplicate;
}

/**
 * Creates a duplicate of a given array using a single method call.
 * @param {any[]} array - The array to duplicate.
 * @returns {any[]} The duplicate array.
 */
function duplicateArrayUsingSlice(array) {
    return array.slice();
}

// Test array
const originalArray = [1, 2, 3, 4, 5];

// Duplicate the array using the first method and display the result
const duplicatedArray1 = duplicateArrayUsingPush(originalArray);
console.log("Duplicate array using push():", duplicatedArray1);

// Duplicate the array using the second method and display the result
const duplicatedArray2 = duplicateArrayUsingSlice(originalArray);
console.log("Duplicate array using slice():", duplicatedArray2);

// Appel de la fonction et affichage du résultat
console.log("La somme des éléments du tableau est : " + additionnerTableau(tableau));

//exercice 3.4
//Écrire un programme qui affiche les éléments minimum et maximum d'un tableau donné.

console.log(math.max(1,2,3));
console.log(math.min(1,2,3));
const Array3 =[1,2,3]
console.log(math.max(Array3))

