'use strict';

const modal = document.querySelector('.modal');
// console.log(modal);
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const openModal = document.querySelectorAll('.show-modal');
// console.log(openModal);

function modalShow(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function modal_overlay_close(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function keyboard(e){

    if (e["key"] == "Escape") {
        if (!(modal.classList.contains('hidden') || overlay.classList.contains('hidden'))) {
            modal_overlay_close();
        } 
        
    }
}

for (let index = 0; index < openModal.length; index++) {
    
    openModal[index].addEventListener("click", modalShow);

}

closeModal.addEventListener("click", modal_overlay_close);

overlay.addEventListener("click", modal_overlay_close);

document.addEventListener('keydown', keyboard);
