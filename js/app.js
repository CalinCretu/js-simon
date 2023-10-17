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