const buttonList = document.querySelectorAll(".drum");

for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}
