'use strict';

let random_number = Math.floor(Math.random() * 10 + 1);
console.log(`The random number is ${random_number}`);

let lives = Number(document.querySelector('.score').textContent);
let high_score = 0;

function checkNumber() {
    let my_input = Number(document.querySelector('.guess').value);
    console.log(my_input);
        
    if (random_number < my_input) {
        document.querySelector('.message').textContent = "Too High";
        lives = lives - 1;
        document.querySelector('.score').textContent = lives;  
    } 
    else if(random_number > my_input) {
        document.querySelector('.message').textContent = "Too Low";
        lives = lives - 1;
        document.querySelector('.score').textContent = lives;
    }
    else{
        document.querySelector('.message').textContent = "Gotcha!";
        document.querySelector('.number').textContent = random_number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (high_score < lives) {
            high_score = lives;
            document.querySelector('.highscore').textContent = high_score;
        }
    }

    if (lives == 0) {
        document.querySelector('.message').textContent = "Game Over!";
    } 

}

function resetGame() {
    random_number = Math.floor(Math.random() * 10 + 1);
    console.log(`The random number is ${random_number}`);
    lives = 20;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = lives;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}   

document.querySelector(".check").addEventListener("click", checkNumber);

document.querySelector(".again").addEventListener("click", resetGame);


