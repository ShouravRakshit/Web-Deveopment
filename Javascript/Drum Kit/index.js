const element = document.querySelectorAll(".drum");
console.log(element)


var myKey;

document.addEventListener("keypress", function(event) {
  // This function will be called whenever a key is pressed
  myKey = event.key;
  // Now I can call any other functions or do any other tasks that rely on myKey here
  
  doSomethingWithMyKey(myKey);
});

function doSomethingWithMyKey(myKey) {
  // You can use myKey here or perform any other operations with it
  return myKey;
}


for (let index = 0; index < element.length; index++) {
    element[index].addEventListener("click", function(){
      
        var myButton =  this.textContent;
        
        switch(myButton) {
          case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
          case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
          case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
          case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
          case "j":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
          case "k":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
          case "l":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;


          default:
            // code block
        }
     
      });
    
}


