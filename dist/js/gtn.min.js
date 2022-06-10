const gtnInput = document.querySelector(".gtn-input");
const btnCheck = document.querySelector(".btn-check");
const btnReset = document.querySelector(".btn-reset");
const gtnStatus = document.querySelector(".gtn-status");
const gtnResult = document.querySelector(".gtn-result");
const gtnMoves = document.querySelector(".gtn-moves");

let randomNumber = Number((Math.random() * 100).toFixed(0));
let counter = 0;

const checkTheNumber = () => {
  if (gtnInput.value < 0 || gtnInput.value > 100) {
    gtnStatus.textContent = "Podaj liczbę z przedziału 0 do 100";
    gtnStatus.style.color = "tomato";
  } else if (gtnInput.value.length === 0) {
    gtnStatus.textContent = "Musisz podać liczbę.";
    gtnStatus.style.color = "tomato";
  } else {
    counter++;
    gtnMoves.textContent = `${counter} ruch`;
    if (gtnInput.value > randomNumber) {
      gtnStatus.textContent = "Podano za duża liczbę.";
      gtnStatus.style.color = "white";
    } else if (gtnInput.value < randomNumber) {
      gtnStatus.textContent = "Podano za małą liczbę.";
      gtnStatus.style.color = "white";
    } else {
      counter;
      gtnStatus.textContent = "";
      gtnResult.textContent = `Zwycięstwo!`;
      gtnResult.style.color = "lime";
      gtnMoves.textContent = `Wykonano ${counter} ruchów.`;
      btnCheck.disabled = true;
      btnCheck.classList.toggle("hide");
      btnReset.classList.toggle("active");
    }
  }
};

btnCheck.addEventListener("click", checkTheNumber);

gtnInput.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    checkTheNumber();
  }
});
