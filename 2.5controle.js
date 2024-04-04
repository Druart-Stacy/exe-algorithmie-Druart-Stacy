// Exercise 2.5
// Make a program that asks the favorite number of the user. If that number is anything other than 42 display 
// "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
// Exercice 2.5
// Créez un programme qui demande le numéro préféré de l'utilisateur. Si ce nombre est autre que 42, il affiche "Are you sure ?" et 
// demande à nouveau. (Ce programme ne devrait jamais se terminer tant que l'utilisateur n'a pas choisi 42).


while (true) {
    let favoriteNumber = prompt("What is your favorite number?");

    if (favoriteNumber !== '42') {
        console.log("Are you sure?");
    } else {
        break;
    }
}

console.log("Thank you! 42 is an excellent choice!");

