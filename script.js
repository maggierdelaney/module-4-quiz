var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector(".quiz");
var secondsLeft = 75;
var highScores = document.querySelector(".view-highscores");
var divTags = document.querySelectorAll(".hide");


//add high scores elements........."go back" and "clear high scores"

//starts after the start quiz button is clicked
hideQuestions() {
    var divTags = document.getElementByClassName("hide");
    for (var i = o; i < divTags.length; i++) {
        divTags[i].style.display = 'none';
    }
};





function startQuiz() {
};




function startTimer() {
    var timeInterval = setInterval(function () {
        if (secondsLeft > 1) {
            timer.textContent = 'Time: ' + secondsLeft + ' seconds remaining';
            secondsLeft--;
        } else if (secondsLeft === 1) {
            timer.textContent = 'Time: ' + secondsLeft + ' second remaining';
            secondsLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            timer.textContent = 'Out of time!'
            //consider changing out of time to a function taking you to next step
        }
    }, 1000);
};




startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);

//startButton.addEventListener("click", firstQuestion());