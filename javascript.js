let choice = "rock paper scissors";
let computerSelection = "";
let playerSelection = "";
function getComputerChoice() {
  let choices = choice.split(" ");
  let random = Math.floor(Math.random() * choices.length);
  computerSelection = choices[random];
}

let btn1 = document.querySelector(".rock");
let btn2 = document.querySelector(".paper");
let btn3 = document.querySelector(".scissors");

btn1.addEventListener("click", () => {
  playerSelection = "rock";
  getComputerChoice();
  game();
});
btn2.addEventListener("click", () => {
  playerSelection = "paper";
  getComputerChoice();
  game();
});
btn3.addEventListener("click", () => {
  playerSelection = "scissors";
  getComputerChoice();
  game();
});
let pScore = 0;
let cScore = 0;
function playRound(playerSelection, computerSelection) {
  if (computerSelection === "paper" && playerSelection === "rock") {
    cScore = cScore + 1;
    return "You lose! Paper beats Rock.";
  } else if (computerSelection === "paper" && playerSelection === "scissors") {
    pScore = pScore + 1;
    return "You win! Scissors beat Paper.";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    pScore = pScore + 1;
    return "You win! Paper beats Rock.";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    cScore = cScore + 1;
    return "You lose! Rock beats Scissors.";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    cScore = cScore + 1;
    return "You lose! Scissors beat Paper.";
  } else if (computerSelection === "scissors" && playerSelection === "rock") {
    pScore = pScore + 1;
    return "You win! Rock beats Scissors";
  } else {
    pScore = pScore;
    cScore = cScore;
    return "Tie";
  }
}

// let i = 0;
function game() {
  const ans = playRound(playerSelection, computerSelection);
  // if (cScore === 5 || pScore === 5) {
  //   document.open("");
  //   let myDiv = document.createElement("div");
  //   let b = document.createElement("button");
  //   let text = document.createTextNode("Button");
  //   b.appendChild(text);
  //   myDiv.appendChild(b);
  // }
  if (cScore === 5 || pScore === 5) {
    setTimeout(function () {
      if (cScore > pScore) {
        alert("Oops! You lost. 😢 😕");
        window.location.reload();
      } else {
        alert("Hurray! You won. 🥳 🎉");
        window.location.reload();
      }
    }, 300);
  }
  let list1 = document.querySelector("#one");
  let item = document.createElement("li");
  let textNode1 = document.createTextNode(ans);
  item.appendChild(textNode1);
  list1.appendChild(item);

  let list2 = document.querySelector("#two");
  let compS = document.createElement("li");
  let textNode2 = document.createTextNode(cScore);
  compS.appendChild(textNode2);
  list2.appendChild(compS);

  let list3 = document.querySelector("#three");
  let playS = document.createElement("li");
  let textNode3 = document.createTextNode(pScore);
  playS.appendChild(textNode3);
  list3.appendChild(playS);

  // let playS = document.querySelector(".pscore");
  // let textNode3 = document.createTextNode(pScore);
  // playS.appendChild(textNode3);
  // if (cScore > pScore) {
  //   console.log("You lose the game.");
  // } else if (pScore > cScore) {
  //   console.log("You win the game.");
  // }
}
