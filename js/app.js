const randomNumbers = [];
for (let i = 0; randomNumbers.length < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
document.querySelector(".random-numbers").innerHTML = randomNumbers.join(" ");
timer = setTimeout(function () {
  // Nasconde i numeri casuali
  document.querySelector(".random-numbers").innerHTML = "";
}, 30000);
timer = setTimeout(userGuess, 30500)
function userGuess() {
  let guessedNumbers = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    let userNumber = prompt("Inserisci un numero:");
    if (randomNumbers[i] == userNumber[i]) {
      guessedNumbers++;
    }
  }
  document.querySelector(".result").innerHTML = "Hai indovinato " + guessedNumbers + " numeri.";
}




















// console.log('prova')

// const randomNumbersDOMElement = document.querySelector('.random-numbers');

// // Genera 5 numeri casuali in un array
// const randomNumbers = [];
// for (let i = 0; randomNumbers.length < 5; i++) {
//   randomNumbers.push(Math.floor(Math.random() * 100));
// }

// randomNumbersDOMElement.innerHTML = randomNumbers.join(" ");


// // Crea il Timer una volta generato i 5 numeri
// // Svuota la stringa finito il timer
// timer = setTimeout(function () {
//   document.querySelector(".random-numbers").innerHTML = "";
// }, 9000);


// timer = setTimeout(indovina, 10000)
// // Gestisce la risposta dell'utente
// function indovina() {
//   // Ottiene i numeri inseriti dall'utente
//   let userNumbers = prompt("Inserisci i 5 numeri mostrati prima");



//   // Conta quanti numeri sono stati indovinati
//   let guessedNumbers = 0;
//   for (let i = 0; i < randomNumbers.length; i++) {
//     randomNumbers[i] == userNumbers[i]
//     guessedNumbers++;

//   }

//   // Visualizza il risultato
//   document.querySelector(".risultato").innerHTML = "Hai indovinato " + guessedNumbers + " numeri";
// }

// const randomNumbersDOMElement = document.querySelector('.random-numbers');

// // Genera 5 numeri casuali in un array
// const randomNumbers = [];
// for (let i = 0; randomNumbers.length < 5; i++) {
//   randomNumbers.push(Math.floor(Math.random() * 100));
// }

// randomNumbersDOMElement.innerHTML = randomNumbers;

// // Gestisce la risposta dell'utente
// function indovina() {
//   let guessedNumbers = 0;

//   // Itera attraverso l'array dei numeri random
//   for (let i = 0; i < randomNumbers.length; i++) {
//     // Chiede all'utente di inserire un numero
//     let userNumber = prompt("Inserisci un numero:");

//     // Confronta il numero inserito con l'elemento corrente dell'array
//     if (randomNumbers.indexOf(userNumber)) {
//       guessedNumbers++;
//     }
//   }

//   // Visualizza il numero di numeri indovinati
//   document.querySelector(".risultato").innerHTML += " Hai indovinato " + guessedNumbers + " numeri";
// }

// // Crea il Timer una volta generato i 5 numeri
// timer = setTimeout(indovina, 9000);