const prompt = require('prompt-sync')();
let celsiusInput = prompt("Entrez la température en Celsius :")
let Celsius = Number(celsiusInput);
let Kelvin = Celsius + 273.15;
console.log(`${Celsius}°C egale à ${Kelvin}K`);