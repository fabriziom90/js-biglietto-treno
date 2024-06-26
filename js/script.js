// Realizzare una variabile alla quale assegno un prompt per chiedere i km da percorrere
let km = prompt('Inserisci i km da percorrere');

// Realizzare una variabile alla quale assegno un prompt per chiedere l'età da percorrere
let eta = prompt('Inserisci la tua età');

// Realizzo una variabile per contenere il prezzo base
let prezzo_base = km * 0.21;

// Dichiaro una variabile che mi conterrà il prezzo finale
let prezzo_finale = prezzo_base;

// SE l'età è inferiore a 18 => applico uno sconto del 20%
if (eta < 18) {
    // Calcolo a partire dal prezzo base lo sconto
    // let sconto = prezzo_base * 20 / 100;
    let sconto = prezzo_base * 0.2;
    // calcolo il prezzo finale
    prezzo_finale = prezzo_base - sconto;
    // prezzo_finale = prezzo_base * 0.8;
}
// : ALTRIMENTI SE l'età è superiore a 65 => applico uno sconto del 40%
else if (eta > 65) {
    // Calcolo a partire dal prezzo base lo sconto
    let sconto = prezzo_base * 0.4;
    // calcolo il prezzo finale
    prezzo_finale = prezzo_base - sconto;
    // prezzo_finale = prezzo_base * 0.6
}
// Creo una nuova variabile
let prezzo = prezzo_finale.toFixed(2);
console.log(prezzo);

document.getElementById('prezzo_finale').innerText = `Il prezzo finale è di: ${prezzo}€`;