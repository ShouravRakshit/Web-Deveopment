$("h1").css("color", "green");

$("button").css("color", "blue");

$(document).keypress(function (event) { 
    $("h1").text(`${event.key}`);

 })


$("h2").addClass("big-text");
$("h2 p").addClass("big-text");

const taskOne = () => {
    console.log("I am good! one")
}

const taskTwo = () => {
    setTimeout(dataloading, 3000)
}

const dataloading = () => {
    console.log("Data Loadiing!")
}

const taskThree = () => {
    console.log("I am good! three")
}


const taskFour = () => {
    console.log("I am good! fourth")
}

taskOne();
taskTwo();
taskThree();
taskFour();

