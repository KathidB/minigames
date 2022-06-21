const rpsChoices = document.querySelectorAll(".btn-rps-choice");
const rpsBtnReset = document.querySelector(".btn-rps-reset");
const userPickImg = document.querySelector(".user-pick-img");
const computerPickImg = document.querySelector(".pc-pick-img");
const rpsResults = document.querySelector(".rps-result");
const userPoints = document.querySelector(".rps-user-points");
const computerPoints = document.querySelector(".rps-computer-points");
const finalResults = document.querySelector(".finalResults");
const rock = "./dist/img/1.png";
const paper = "./dist/img/2.png";
const scissors = "./dist/img/3.png";
let uPoints = 0;
let cPoints = 0;

//Rock Paper Scissors | RPS
//Zależnie od tego na jaki guzik klikniemy, taki zostanie dodany do
// pola Twój wybór - a losowy zostanie przydzielony do pola komputera.
rpsChoices.forEach((e) => {
  e.addEventListener("click", () => {
    let computerPick = Math.floor(Math.random() * rpsChoices.length) + 1;
    if (e.classList.contains("btn-rock")) {
      userPickImg.src = rock;
      userPickImg.setAttribute("data-src", "rock");
      computerPickImg.src = `./dist/img/${computerPick}.png`;
      checkTheScore();
    } else if (e.classList.contains("btn-paper")) {
      userPickImg.src = paper;
      userPickImg.setAttribute("data-src", "paper");
      computerPickImg.src = `./dist/img/${computerPick}.png`;
      checkTheScore();
    } else {
      userPickImg.src = scissors;
      userPickImg.setAttribute("data-src", "scissors");
      computerPickImg.src = `./dist/img/${computerPick}.png`;
      checkTheScore();
    }
  });
});

// funkcja dodaje odpowiedzni atrybut do wyboru komputera w celi
// późniejszego jego porównania z wyborem gracza
const checkTheScore = () => {
  const addDataToPcChoice = () => {
    if (computerPickImg.src.includes("1.png")) {
      computerPickImg.setAttribute("data-src", "rock");
    } else if (computerPickImg.src.includes("2.png")) {
      computerPickImg.setAttribute("data-src", "paper");
    } else {
      computerPickImg.setAttribute("data-src", "scissors");
    }
  };
  addDataToPcChoice();

  // funkcja poruwnuje wybory gracza i komputera i ustala kto wygrał
  const checkWhoWon = () => {
    let checkUserData = userPickImg.getAttribute("data-src");
    let checkComputerData = computerPickImg.getAttribute("data-src");
    if (checkUserData === checkComputerData) {
      rpsResults.textContent = "REMIS";
      rpsResults.style.color = "white";
    } else if (
      (checkUserData === "paper" && checkComputerData === "rock") ||
      (checkUserData === "rock" && checkComputerData === "scissors") ||
      (checkUserData === "scissors" && checkComputerData === "paper")
    ) {
      rpsResults.textContent = "WYGRANA";
      rpsResults.style.color = "lime";
      uPoints++;
      userPoints.textContent = uPoints;
      userPointsCounter();
    } else {
      rpsResults.textContent = "PRZEGRANA";
      rpsResults.style.color = "tomato";
      cPoints++;
      computerPoints.textContent = cPoints;
      userPointsCounter();
    }
  };
  checkWhoWon();
};

const userPointsCounter = () => {
  if (uPoints >= 10) {
    finalResults.textContent = "ZWYCIĘSTWO!  ZAGRAJ PONOWNIE!";
    rpsResults.style.color = "lime";
    rpsBtnReset.classList.toggle("active");
    disableButtons();
  } else if (cPoints >= 10) {
    finalResults.textContent = "PRZEGRAŁEŚ! ZAGRAJ PONOWNIE!";
    rpsResults.style.color = "tomato";
    rpsBtnReset.classList.toggle("active");
    disableButtons();
  }
};

// przycisk reset, resetuje całą grę i ponownie umożliwia
// używanie przycisków i liczenie punktów od zera.

rpsBtnReset.addEventListener("click", () => {
  finalResults.textContent = "";
  rpsResults.textContent = "";
  userPickImg.src = "";
  computerPickImg.src = "";
  uPoints = 0;
  cPoints = 0;
  userPoints.textContent = 0;
  computerPoints.textContent = 0;
  enableButtons();
  rpsBtnReset.classList.remove("active");
  rpsBtnReset.classList.add("hide");
});

// wyłączenie  buttonów po osiągnieciu 10 ptk
const disableButtons = () => {
  rpsChoices.forEach((e) => {
    e.disabled = true;
  });
};

const enableButtons = () => {
  rpsChoices.forEach((e) => {
    e.disabled = false;
  });
};
