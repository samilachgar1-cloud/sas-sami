const prompt = require('prompt-sync')();
let nom = prompt("entrez votre nom");
let prenom = prompt("entrez votre prenom");
let age = prompt("entrez votre age ");
let sexe = prompt("entrez votre sexe (F/M)");
let email = prompt("entrez votre email");

console.log(`Nom : ${nom}`);
console.log(`Prénom : ${prenom}`);
console.log(`Âge : ${age} ans`);
console.log(`Sexe : ${sexe}`);
console.log(`email : ${email}`);
