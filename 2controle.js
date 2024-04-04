// exercice 2.1
// Demandez à l'utilisateur d'indiquer son âge. S'il est âgé d'au moins 18 ans, 
//l'écran affiche "Vous êtes un adulte". Si ce n'est pas le cas, afficher "Vous n'êtes pas encore majeur".

// Astuce : Vous pouvez utiliser la fonction prompt 
//pour demander à l'utilisateur d'entrer des données dans le navigateur.


// Demander à l'utilisateur d'indiquer son âge
let age = prompt("Quel est votre âge ?");

// Vérifier si l'âge est supérieur ou égal à 18
if (age >= 18) {
    alert("Vous êtes un adulte.");
} else {
    alert("Vous n'êtes pas encore majeur.");
}