// CONTROLLO INSERIMENTO JS

console.log(' -- Il file JavaScript main.js è stato inserito correttamente --');


// VARIABILI 

var name = prompt('Inserisci il tuo nome : ');
var surname = prompt('Inserisci il tuo cognome : ');
var age = parseInt( prompt('Inserisci la tua età : ') );
var km = parseInt( prompt('Inserisci i Km da percorrere : ') );
var priceKm = 0.21;
var finalPrice = 0;

// CALCOLO DEL PREZZO 

if (age < 18) {
    finalPrice += ((( km * priceKm ) * 20) / 100);
} else if (age > 65) {
    finalPrice += ((( km * priceKm ) * 40) / 100);
} else {
    finalPrice += km * priceKm
}

// STAMPA SU PAGINA 

// dati utente 
document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('age').innerHTML = age;

// dati destinazione
document.getElementById('km').innerHTML = km;

// dati prezzo