const prompt = require('prompt-sync')();
const candidats = [
  { CIN : "HH12345" , nom : "abdo", prenom : "ziwi", age : 32 , partipolitique : "TAS", electeurs : [] },
  { CIN : "BB12345" , nom : "sara", prenom : "kadimi", age : 55 , partipolitique : "MAS", electeurs : [] },
  { CIN : "AA12345", nom : "houssam", prenom : "hadar", age : 22 , partipolitique : "independant", electeurs : [] },
  { CIN : "CC12345" , nom : "jamal", prenom : "razi", age : 42 , partipolitique : "LBR", electeurs : [] },
  { CIN : "DD12345" , nom : "majida", prenom : "zwiti", age : 71 , partipolitique : "TAS", electeurs : [] },
  { CIN : "EE12345" , nom : "salim", prenom : "hadraf", age : 51 , partipolitique : "MAS", electeurs : [] },
  { CIN : "FF12345", nom : "hosin", prenom : "nakach", age : 29, partipolitique : "independant", electeurs : [] },
  { CIN : "GG12345" , nom : "jamila", prenom : "rbiti", age : 62 , partipolitique : "LBR", electeurs : [] },
];
function ajouterCandidat() {
  console.log("\n--- Ajouter un nouveau candidat ---");
  const cin = prompt("Entrez la CIN du candidat : ").toUpperCase();
  const existe = candidats.find(c => c.cin === cin);
  if (existe) {
    console.log(" Un candidat avec cette CIN existe déjà !");
    return;
  }
  const nom = prompt("Entrez le nom : ");
  const prenom = prompt("Entrez le prénom : ");
  const parti = prompt("Entrez le parti politique (ou 'Indépendant') : ");
  const age = parseInt(prompt("Entrez l'âge : "));
  if (isNaN(age) || age < 18) {
    console.log(" Âge invalide (doit être au moins 18 ans) !");
    return;
  }
  candidats.push({
    cin: cin,
    nom: nom,
    prenom: prenom,
    parti: parti,
    age: age,
    electeurs: []
  });
  console.log(` Le candidat ${nom} ${prenom} a été ajouté avec succès !`);
}
function ajouterPlusieursCandidats() {
  console.log("\n--- Ajouter plusieurs candidats ---");
  const nombre = parseInt(prompt("Combien de candidats voulez-vous ajouter ? "));
  if (isNaN(nombre) || nombre <= 0) {
    console.log(" Nombre invalide !");
    return;
  }
  for (let i = 0; i < nombre; i++) {
    console.log(`\nCandidat N°${i + 1} :`);
    ajouterCandidat();
  }
}