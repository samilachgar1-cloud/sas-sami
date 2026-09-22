 const rectangle = {
    longueur: 10,
    largeur: 6
 };
 function  calculerAire(rect) {
    return rect.longueur * rect.largeur ;
 }
 const aire = calculerAire(rectangle);
 console.log(`l'aire du rectangle est : ${aire}`)