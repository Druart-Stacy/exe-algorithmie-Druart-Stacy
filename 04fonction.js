
//Exercice 4.1
// Créez une fonction nommée calcSurface qui prend la longueur et la largeur 
// d'un rectangle et renvoie sa surface. Créez ensuite un programme qui demande à l'utilisateur la longueur et la largeur 
// d'un rectangle, puis affiche la surface de ce rectangle. Ce programme doit utiliser la fonction que vous avez créée.

// Rédigez une documentation pour la fonction calcSurface.

// Définition de la fonction calcSurface
/**
 * Calcule la surface d'un rectangle.
 * @param {number} longueur - La longueur du rectangle.
 * @param {number} largeur - La largeur du rectangle.
 * @returns {number} La surface du rectangle.
 */
function calcSurface(longueur, largeur) {
    return longueur * largeur; // Calcul de la surface
}

// Programme principal
function main() {
    const readline = require('readline');

    // Création de l'interface readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Demande à l'utilisateur la longueur du rectangle
    rl.question("Entrez la longueur du rectangle : ", function(longueur) {
        // Demande à l'utilisateur la largeur du rectangle
        rl.question("Entrez la largeur du rectangle : ", function(largeur) {
            // Convertir les entrées en nombres
            longueur = parseFloat(longueur);
            largeur = parseFloat(largeur);

            // Calcul de la surface en appelant la fonction calcSurface
            let surface = calcSurface(longueur, largeur);

            // Affichage du résultat
            console.log("La surface du rectangle est : " + surface);

            // Fermeture de l'interface readline
            rl.close();
        });
    });
}

// Appel du programme principal
main();


//ok