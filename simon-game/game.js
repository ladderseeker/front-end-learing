const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function nextSequence() {

    let randomNumber = Math.floor(4 * Math.random());
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++;
    $("#level-title").text("Level " + level);

}

function playSound(name) {
    new Audio("sounds/" + name + ".mp3").play().then();
}

function animatePress(currentColour) {

    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {

    return gamePattern[currentLevel] === userClickedPattern[currentLevel];
}

function restart() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    $("#level-title").text("Press A Key to Start!");
}

$(".btn").click(function () {

    let userChosenColour = $(this).attr("id");

    animatePress(userChosenColour);
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);

    let result = checkAnswer(userClickedPattern.length - 1);
    if (result) {
        if (userClickedPattern.length === level) {
            userClickedPattern = [];
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over")
        playSound("wrong")
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        restart();
    }
})

$(document).keydown(function () {

    if (gamePattern.length === 0) {
        nextSequence();

        console.log("Game starts!!!")
    }
});


