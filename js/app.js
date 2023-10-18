const randomNumbers = [];
for (let i = 0; randomNumbers.length < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
document.querySelector(".random-numbers").innerHTML = randomNumbers.join(" ");
timer = setTimeout(function () {
  // Nasconde i numeri casuali
  document.querySelector(".random-numbers").innerHTML = "";
}, 5000);
timer = setTimeout(userGuess, 5500)
numeriUtente = []
function userGuess() {
  let guessedNumbers = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    let userNumber = parseInt(prompt("Inserisci un numero:"));
    numeriUtente.push(userNumber);
    if (randomNumbers[i] == numeriUtente[i]) {
      guessedNumbers++;
    }
  }
  document.querySelector(".result").innerHTML = "Hai indovinato " + guessedNumbers + " numeri.";
}
