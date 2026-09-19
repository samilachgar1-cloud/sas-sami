const prompt = require('prompt-sync')();
let numbre = parseInt (prompt("Entrez le nombre pour la table de multiplication :"));
console.log(`Table de multiplication de ${numbre} :`);
for (let i = 1; i <= 10; i++) {
    let resultat = numbre * i;
    console.log(`${numbre} * ${i} = ${resultat}`);
}