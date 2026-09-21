const prompt = require('prompt-sync')();
var nombres = [ 1, 21, 35, 400, 100, 150 ];
let somme = 0
let max = nombres[0]
for (let i = 0; i< nombres.length; i++) {
    somme += nombres[i]
     if (nombres[i] > max) max = nombres[i]
}
console.log(`Max: ${max}`)
