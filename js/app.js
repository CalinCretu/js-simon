console.log('prova')

const randomNumbersDOMElement = document.querySelector('.random-numbers');

// Genera 5 numeri casuali in un array
const randomNumbers = [];
for (let i = 0; randomNumbers.length < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
  randomNumbersDOMElement.innerHTML = randomNumbers;
}


// Crea il Timer una volta generato i 5 numeri
// Svuota la stringa finito il timer
var timer = setInterval(function () {
  document.querySelector(".random-numbers").innerHTML = "";
}, 30000);



// Conta quanti numeri sono stati indovinati
// var indovinate = 0;
// for (var i = 0; i < numeri.length; i++) {
//   if (numeri[i] == numeriUtente[i]) {
//     indovinate++;
//   }
// }