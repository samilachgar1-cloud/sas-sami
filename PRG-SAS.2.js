const prompt = require ('prompt-sync')();
constcondidats = [
  { CIN : "HH12345" , nom : "abdo", prenom : "ziwi", age : 32 , partipolitique : "TAS", electeurs : [] },
  { CIN : "AB12345" , nom : "sara", prenom : "kadimi", age : 55 , partipolitique : "MAS", electeurs : [] },
  { CIN : "AZ12345", nom : "houssam", prenom : "hadar", age : 22 , partipolitique : "independant", electeurs : [] },
  { CIN : "H19632" , nom : "jamal", prenom : "razi", age : 42 , partipolitique : "LBR", electeurs : [] },
];
 function ajouteCandidat() {
  console.log("--- Ajouter un nouveau candidat ---");
  const cin = prompt("Entrez la CIN du candidat : ");
  const nom = prompt("Entrez le nom : ");
  const prenom = prompt("Entrez le prénom : ");
  const age = parseInt(prompt("Entrez l'âge : "));
  if (isNaN(age) || age < 18) {
    console.log(" Âge invalide (doit être au moins 18 ans) !");
    return}
  const partipolitique = prompt("Entrez le parti politique (ou 'Indépendant') : ")
 const newcondidat = {
    cin : cin,
    nom: nom,
    prenom: prenom,
    age: age,
    parti: partipolitique,
    electeurs: []
  };
  console.log(` Le candidat ${nom} ${prenom} a été ajouté avec succès ! `);
}ajouteCandidat()
function ajouterplusieurscoandidats(){
    console.log("---ajouter plusieurs condidats---")
    const nombre = parseInt(prompt("combien de candidats voulez-vous ajouter ? "))
    if (isNaN(nombre)|| nombre<=0){
        console.log("nombre invalide !");
        return;
    }
    for (let i=0;i<nombre;i++){
    console.log(`\ncandidat N°${i+1}:`);
    ajouteCandidat();
    }
}
function menuPrincipal(){
    let boucle = true;
    while (boucle){
console.log( ` ==== MENU PRINCIPAL =====
 1  Ajouter un nouveau candidat
 2  Ajouter plusieurs candidats à la fois
 3  Afficher la liste des candidats
 4  Voter pour un candidat
 5  Modifier les informations d'un candidat
 6  Supprimer un candidat
 7  Rechercher des candidats
 8  Statistiques de l'élection 
 9  merci pour votre vote ` );
 const choix = prompt (" choisissez une aptoin (1-9):")
 switch (choix) 
 {
    case '1': ajouteCandidat()
      break;
    case '2': ajouterplusieurscoandidats()
      break;
    case '3':
    console.log("\nMerci d'avoir utilisé l'application. Au revoir !");
        boucle = false;
        break;
      default:
        console.log("Option invalide, veuillez réemployer un choix entre 0 et 8.");
        }
    }
}