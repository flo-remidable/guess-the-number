const btn = document.querySelector("#btn");
let bonneReponse = document.getElementById("bonne-reponse");
let plusGrand = document.getElementById("plus-grand");
let plusPetit = document.getElementById("plus-petit");
let number = Math.floor(Math.random() * 100 + 1);
let resetBtn = document.getElementById("reset");
let form = document.querySelector("form");
let numberTry = document.querySelector("#number-try");

console.log(number);

btn.onclick = function guessTheNumber() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let guessNumber = document.querySelector("#guess-number").value;

    if (guessNumber == number) {
      bonneReponse.style.display = "block";
      plusPetit.style.display = "none";
      plusGrand.style.display = "none";
      numberTry.innerHTML = "Le nombre était bien " + guessNumber + " !!";
    } else if (number < guessNumber) {
      plusPetit.style.display = "block";
      bonneReponse.style.display = "none";
      plusGrand.style.display = "none";
      numberTry.innerHTML = "Vous vener d'essayer " + guessNumber;
    } else {
      plusGrand.style.display = "Block";
      plusPetit.style.display = "none";
      bonneReponse.style.display = "none";
      numberTry.innerHTML = "Vous vener d'essayer " + guessNumber;
    }
  });
};

resetBtn.onclick = function guessTheNumber() {
  location.reload(true);
};
