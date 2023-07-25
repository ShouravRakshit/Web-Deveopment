function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function checkWinner(player1, player2) {
    if (player1 === player2) {
        document.querySelector("h1").textContent = "Draw 🤣";
    } else if(player1 > player2){
        document.querySelector("h1").textContent = "PLayer 1 Wins 👌";
    }else{
        document.querySelector("h1").textContent = "PLayer 2 Wins ❌";
    }
}

const randomNumber1 = getRandomNumber();
const randomNumber2 = getRandomNumber();

checkWinner(randomNumber1, randomNumber2);
document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;

