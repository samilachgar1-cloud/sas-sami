const prompt = require('prompt-sync')();
let InputA = prompt("Entrez le premier nombre (a) :")
let InputB = prompt("Entrez le deuxieme nombre (b) :")
let A = Number ( InputA )
let B = Number ( InputB )
let somme = A + B;
console.log('a + b = ${somme}')
let produit = A * B;
console.log('a * b = ${produit}')
let difference = A - B;
console.log('a - b = ${difference}')
if (B !== 0) {
    let division = A / B;
    console.log('A / B = ${division} ');
}