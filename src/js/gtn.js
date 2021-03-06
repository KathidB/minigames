const gtnInput = document.querySelector(".gtn-input");
const btnCheck = document.querySelector(".btn-check");
const btnReset = document.querySelector(".btn-reset");
const gtnStatus = document.querySelector(".gtn-status");
const gtnResult = document.querySelector(".gtn-result");
const gtnMoves = document.querySelector(".gtn-moves");
let randomNumber;
let counter = 0;

const generateRandomNumber = () => {
  randomNumber = Number((Math.random() * 100).toFixed(0));
};
generateRandomNumber();

const checkTheNumber = () => {
  if (gtnInput.value < 0 || gtnInput.value > 100) {
    gtnStatus.textContent = "Podaj liczbę z przedziału 0 do 100";
    gtnStatus.style.color = "tomato";
    gtnInput.value = "";
  } else if (gtnInput.value.length === 0) {
    gtnStatus.textContent = "Musisz podać liczbę.";
    gtnStatus.style.color = "tomato";
  } else {
    counter++;
    gtnMoves.textContent = `${counter} ruch`;
    if (gtnInput.value > randomNumber) {
      gtnStatus.textContent = `${gtnInput.value} to za duża liczba.`;
      gtnStatus.style.color = "white";
      gtnInput.value = "";
    } else if (gtnInput.value < randomNumber) {
      gtnStatus.textContent = `${gtnInput.value} to za mała liczba.`;
      gtnStatus.style.color = "white";
      gtnInput.value = "";
    } else {
      gtnStatus.textContent = "";
      gtnResult.textContent = `Zwycięstwo!`;
      gtnResult.style.color = "lime";
      gtnMoves.textContent = `Wykonano ${counter} ruchów.`;
      btnCheck.classList.toggle("hide");
      btnReset.classList.toggle("active");
    }
  }
};

const restartTheGame = () => {
  gtnStatus.textContent = "";
  gtnMoves.textContent = "";
  gtnResult.textContent = "";
  gtnInput.value = "";
  btnCheck.classList.toggle("hide");
  btnReset.classList.toggle("active");
  counter = 0;
  generateRandomNumber();
};

const enterKeyCheck = (e) => {
  e.key === "Enter" ? checkTheNumber() : false;
};

btnCheck.addEventListener("click", checkTheNumber);
gtnInput.addEventListener("keyup", enterKeyCheck);
btnReset.addEventListener("click", restartTheGame);
