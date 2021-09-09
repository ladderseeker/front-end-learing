function getRandomDice(number) {
    let randomNumber
    randomNumber = 1 + Math.round(5 * Math.random());
    console.log("RandomNumber" + number + " is " + randomNumber);

    document.querySelector(".img" + number).setAttribute("src", "images/dice" + randomNumber + ".png");

    return randomNumber;
}

function showWinner(firstPlayerScore, secondPlayerScore) {

    if(firstPlayerScore > secondPlayerScore) {
        document.querySelector("h1").textContent = "😊 Player1 Wins！";
    } else if (firstPlayerScore < secondPlayerScore) {
        document.querySelector("h1").textContent = "Player2 Wins！😘";
    } else {
        document.querySelector("h1").textContent = "Draw";
    }
}

let firstPlayerScore = getRandomDice(1);
let secondPlayerScore = getRandomDice(2);

showWinner(firstPlayerScore, secondPlayerScore);

