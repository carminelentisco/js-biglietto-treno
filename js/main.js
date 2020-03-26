// CONTROLLO INSERIMENTO JS

console.log(' -- Il file JavaScript main.js è stato inserito correttamente --');


// VARIABILI 

var km = parseInt( prompt('Inserisci i Km da percorrere : ') );
console.log('Km Inseriti : ' + km);

var age = parseInt( prompt('Inserisci la tua età : ') );
console.log('Anni Inseriti : ' + age);

var priceKm = 0.21;
var finalPrice = 0;

// CALCOLO DEL PREZZO 

if (age < 18) {
    finalPrice += ((( km * priceKm ) * 20) / 100);
    console.log(finalPrice);
} else if (age > 65) {
    finalPrice += ((( km * priceKm ) * 40) / 100);
    console.log(finalPrice);
} else {
    finalPrice += km * priceKm
    console.log(finalPrice);
}





