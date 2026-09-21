const prompt = require('prompt-sync')();
var nombres = [ 1, 21, 35, 40, 100, 150 ];
let somme = 0
let min = nombres[0]
let max = nombres[0]
let moyenne
for (let i = 0; i< nombres.length; i++) {
    somme += nombres[i]
    if (nombres[i] < min) min = nombres[i]
    if (nombres[i] > max) max = nombres[i]
   moyenne = somme / nombres.length;
        
}   

    console.log(`Somme: ${somme}`)
    console.log(`Moyenne: ${moyenne}`)
    console.log(`Min: ${min}`)
    console.log(`Max: ${max}`)