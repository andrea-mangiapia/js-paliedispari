// PALINDROMA
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// chiediamo all'utente di inserire una parola
const userText = prompt('Inserisci una parola')
// varie
let palindromaText = palindroma(userText);

// creo funzione per capire se la parola inserita è palindroma
function palindroma(text) {
    // SE il text è uguale a text splitterato (split), invertiamo la parola (con reverse) e restituisce la stringa (join) il valore ottenuto è palindroma
    if(text === text.split('').reverse().join('')) {
        alert("La parola " + userText + " è palindroma")
    } 
    // ALTRIMENTI non è palindroma
    else {
        alert("La parola " + userText + " non è palindroma" )
    }
}