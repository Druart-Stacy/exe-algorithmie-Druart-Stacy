// Exercise 2.4
// Count from 1 to 100. For every even number display the result of their division by 
// 2. For every odd number display the result of their multiplication by 3.
// Exercice 2.4
// Comptez de 1 à 100. Pour chaque nombre pair, affichez le résultat de sa division par 
// 2. Pour chaque nombre impair, affichez le résultat de sa multiplication par 3.

let i = 1;

while (i <= 100) {
    if (i % 2 === 0) {
        console.log(i + " divisé par 2 est égal à " + (i / 2));
    } else {
        console.log(i + " multiplié par 3 est égal à " + (i * 3));
    }
    i++;
}
