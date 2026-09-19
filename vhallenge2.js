const prompt = require('prompt-sync')();
let produit = prompt("Enttrez une produit:").toLowerCase();
switch(produit){
     case 'lait':
      case 'glace':
       case 'stylo':
        case 'boule':
         case 'savon':
          case 'mais':
           case 'huile':
        console.log(`le produit"${produit}"oui kayn `);
         break;
    default:
         console.log(`le produit"${produit}" ghir smah lina  (rja3 ghada).`);
}