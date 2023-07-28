$("h1").css("color", "green");

$("button").css("color", "blue");

$(document).keypress(function (event) { 
    $("h1").text(`${event.key}`);

 })


$("h2").addClass("big-text");
$("h2 p").addClass("big-text");