'use strict';


let player_one_score = document.querySelector('#score--0').textContent = 0;
// console.log(typeof(player_one_score));
let player_two_score = document.querySelector('#score--1').textContent = 0;



function playPig(){
    let current_player = 0
    
    if (current_player) {
        const dice_number = Math.floor(Math.random() * 6) + 1;
        player_one_score 
    } else {
        
    }
    console.log(dice_number);
   
}

const roll_dice = document.querySelector('.btn--roll');

roll_dice.addEventListener("click", playPig);