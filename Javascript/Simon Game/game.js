let gamePattern =[];
const buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];

function nextSequence() {
    
    return Math.floor(Math.random() * 4);
}

// This function allows me to add the grey background color after I click the button.
// The grey background stays for .1s seconds.
function animatePress(currentColour){
    currentColour = "#" + currentColour;
    console.log(currentColour);
    $(`${currentColour}`).addClass("pressed");
    setTimeout(function() {
        $(`${currentColour}`).removeClass("pressed");
      }, 100);
}

// 
function playSound(randomChosenColour){
    $(`#${randomChosenColour}`).click(function(){
        
        $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
        var audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
        audio.play();
});

}


let randomNumber = nextSequence();
let randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

function startGame() {
    $(document).on("keypress", function() {
        $("#level-title").text("Level 1");
        animatePress(randomChosenColour);
    
    });
}


$(".btn").click(function(event){
    
    let userChosenColour = event.target.id;
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    
})

startGame();
playSound(randomChosenColour);
