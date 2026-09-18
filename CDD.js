const prompt = require('prompt-sync')();
let distance  = prompt("entrez la distance en kilometres :")
let kilometres = Number(distance);
let yards = kilometres * 1093.61;
console.log(`${kilometres}km egale à ${yards} en yards`);