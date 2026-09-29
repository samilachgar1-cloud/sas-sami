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
function afficherCandidats() {
  if (candidats.length === 0) {
    console.log("\n Aucun candidat dans la liste.");
    return;
  }
  console.log("\n--- Afficher les candidats ---");
  console.log("1. Trier par nombre de votes (ordre décroissant)");
  console.log("2. Filtrer par parti politique");
  const choix = prompt("Choisissez une option (1 ou 2) : ");
  let listeAffichee = [...candidats];
  if (choix === "1") {
    listeAffichee.sort((a, b) => b.electeurs.length - a.electeurs.length);
  } else if (choix === "2") {
    const partiRecherche = prompt("Entrez le nom du parti politique : ");
    listeAffichee = listeAffichee.filter(c => c.parti.toLowerCase() === partiRecherche.toLowerCase());
  } else {
    console.log(" Option invalide.");
    return;
  }
  if (listeAffichee.length === 0) {
    console.log(" Aucun candidat trouvé.");
    return;
  }
  console.log("\n================ Liste des Candidats ================");
  listeAffichee.forEach(c => {
    console.log(`CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.parti} | Âge: ${c.age} ans | Votes: ${c.electeurs.length}`);
  });
  console.log("=====================================================");
}
function voter() {
  console.log("\n--- Voter pour un candidat ---");
  const cinElecteur = prompt("Entrez votre CIN (Électeur) : ").toUpperCase();
  const dejaVote = candidats.some(c => c.electeurs.includes(cinElecteur));
  if (dejaVote) {
    console.log("\n Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau.");
    return;
  }
  const cinCandidat = prompt("Entrez la CIN du candidat pour lequel vous voulez voter : ").toUpperCase();
  const candidat = candidats.find(c => c.cin === cinCandidat);
  if (!candidat) {
    console.log(" Candidat introuvable avec cette CIN !");
    return;
  }
  candidat.electeurs.push(cinElecteur);
  console.log(` Votre vote pour ${candidat.nom} ${candidat.prenom} a été enregistré avec succès !`);
}
function modifierCandidat() {
  console.log("\n--- Modifier un candidat ---");
  const cin = prompt("Entrez la CIN du candidat à modifier : ").toUpperCase();
  const candidat = candidats.find(c => c.cin === cin);
  if (!candidat) {
    console.log(" Candidat introuvable !");
    return;
  }
  console.log(`Modification de : ${candidat.nom} ${candidat.prenom}`);
  console.log("1. Modifier le parti politique");
  console.log("2. Modifier l'âge");
  const choix = prompt("Choisissez une option (1 ou 2) : ");
  if (choix === "1") {
    const nouveauParti = prompt("Entrez le nouveau parti politique : ");
    candidat.parti = nouveauParti;
    console.log(" Parti politique mis à jour avec succès !");
  } else if (choix === "2") {
    const nouvelAge = parseInt(prompt("Entrez le nouvel âge : "));
    if (!isNaN(nouvelAge) && nouvelAge >= 18) {
      candidat.age = nouvelAge;
      console.log(" Âge mis à jour avec succès !");
    } else {
      console.log(" Âge invalide !");
    }
  } else {
    console.log(" Option invalide !");
  }
}
function supprimerCandidat() {
  console.log("\n--- Supprimer un candidat ---");
  const cin = prompt("Entrez la CIN du candidat à supprimer : ").toUpperCase();
  const index = candidats.findIndex(c => c.cin === cin);
  if (index !== -1) {
    const supprime = candidats.splice(index, 1);
    console.log(`Le candidat ${supprime[0].nom} ${supprime[0].prenom} a été supprimé.`);
  } else {
    console.log(" Candidat introuvable !");
  }
}
function rechercherCandidats() {
  console.log("\n--- Rechercher des candidats ---");
  const nomRecherche = prompt("Entrez le nom du candidat : ").toLowerCase();
  const resultats = candidats.filter(c => c.nom.toLowerCase().includes(nomRecherche));
  if (resultats.length > 0) {
    console.log(`\n--- Résultats de recherche (${resultats.length}) ---`);
    resultats.forEach(c => {
      console.log(`CIN: ${c.cin} | Nom: ${c.nom} ${c.prenom} | Parti: ${c.parti} | Votes: ${c.electeurs.length}`);
    });
  } else {
    console.log(" Aucun candidat trouvé avec ce nom.");
  }
}
function afficherStatistiques() {
  console.log("\n================ Statistiques de l'Élection ================");
  console.log(`1. Nombre total de candidats : ${candidats.length}`);
  const totalVotes = candidats.reduce((sum, c) => sum + c.electeurs.length, 0);
  console.log(`2. Nombre total de votes exprimés : ${totalVotes}`);
  console.log("\n3. Top 3 des candidats :");
  const top3 = [...candidats]
    .sort((a, b) => b.electeurs.length - a.electeurs.length)
    .slice(0, 3);
  if (top3.length === 0) {
    console.log("   Aucun candidat disponible.");
  } else {
    top3.forEach((c, index) => {
      console.log(`   #${index + 1} : ${c.nom} ${c.prenom} (${c.parti}) - ${c.electeurs.length} votes`);
    });
  }
  console.log("\n4. Nombre de candidats par parti politique :");
  const partis = {};
  candidats.forEach(c => {
    partis[c.parti] = (partis[c.parti] || 0) + 1;
  });
  for (const [parti, nombre] of Object.entries(partis)) {
    console.log(`   - ${parti} : ${nombre} candidat(s)`);
  }
  console.log("===========================================================");
} afficherStatistiques()
function menuPrincipal() {
  let boucle = true;
  while (boucle) {
    console.log(`
====================
   MENU PRINCIPAL   
====================
 1  Ajouter un nouveau candidat
 2  Ajouter plusieurs candidats à la fois
 3  Afficher la liste des candidats
 4  Voter pour un candidat
 5  Modifier les informations d'un candidat
 6  Supprimer un candidat
 7  Rechercher des candidats
 8  Statistiques de l'élection
 0  Quitter l'application
    `);
    const choix = prompt("Choisissez une option (0-8) : ");
    switch (choix) {
      case '1':
        ajouterCandidat();
        break;
      case '2':
        ajouterPlusieursCandidats();
        break;
      case '3':
        afficherCandidats();
        break;
      case '4':
        voter();
        break;
      case '5':
        modifierCandidat();
        break;
      case '6':
        supprimerCandidat();
        break;
      case '7':
        rechercherCandidats();
        break;
      case '8':
        afficherStatistiques();
        break;
      case '0':
        console.log("\nMerci d'avoir utilisé l'application. Au revoir !");
        boucle = false;
        break;
      default:
        console.log(" Option invalide, veuillez réemployer un choix entre 0 et 8.");
    }
  }
}
menuPrincipal();