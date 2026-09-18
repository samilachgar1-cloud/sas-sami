const prompt = require('prompt-sync')();
let kmhInput = prompt("Entre la vitesse en km/h");
let kmh = Number(kmhInput);
let ms = kmh * 0.27778;
console.log(`${kmh}km/h egale à ${ms}m/s`);