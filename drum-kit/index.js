function playSound(soundName) {
    let audio = new Audio("sounds/" + soundName + ".mp3");
    audio.play().then();
}

function playSoundByLetter(letter) {
    switch (letter) {

        case "w":
            playSound("tom-1");
            break;
        case "a":
            playSound("tom-2");
            break;
        case "s":
            playSound("tom-3");
            break;
        case "d":
            playSound("tom-4");
            break;
        case "j":
            playSound("snare");
            break;
        case "k":
            playSound("crash");
            break;
        case "l":
            playSound("kick-bass");
            break;
        default:
            console.log(this);
    }
}

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed")
    }, 100)

}

// Detect button click
const buttonList = document.querySelectorAll(".drum");

for (let i = 0; i < buttonList.length; i++) {

    buttonList[i].addEventListener("click", function () {
        playSoundByLetter(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Detect keyboard press
document.addEventListener("keydown", function (event) {
    playSoundByLetter(event.key);
    buttonAnimation(event.key);
});