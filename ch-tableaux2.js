const prompt = require('prompt-sync')();
 const Ville= ["fes","agadir","sale","safi"]
Ville.push("tanger")
Ville.unshift("casablanca")
 console.log (Ville.length)
console.log (Ville[0])
console.log (Ville[Ville.length - 3])
console.log(Ville)
console.log(Ville.includes("fes"))
console.log(Ville.indexOf("safi"))
Ville.splice(1, 3)
console.log(Ville)
Ville.slice(1)
