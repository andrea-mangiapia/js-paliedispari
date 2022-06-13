// PARI E DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// l'utente sceglie tra pari o dispari
const userEvenOrOdd = prompt('Digita tra pari o dispari');
// l'utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt('Digita un numero da 1 a 5'));

console.log('Pari o dispari?', userEvenOrOdd);
console.log('Numero utente', userNumber);

// Dichiariamo chi ha vinto
// Variabile messageResult = alla somma dei numeri che indica se e pari o dispari:
const messageResult = sumEvenOrodd(userNumber);

// Creo il messaggio output
if(messageResult === 'pari' && userEvenOrOdd === 'pari') {
    alert ('Hai vinto!');
} else {
    alert ('Hai perso!');
}

// FUNCTION
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
const computerNumber = getRndInteger(1, 5);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log('Numero del computer', computerNumber);

//  Sommiamo i due numeri
let sum = userNumber + computerNumber;

console.log('Somma numero tra utente e computer', sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sumEvenOrodd(sum) {
    if (sum % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }  
}