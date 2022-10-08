var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
//var startQuiz = document.querySelector(".quiz");
var secondsLeft = 75;
var highScores = document.querySelector(".view-highscores");

var body = document.body;
var firstQuestion = document.createElement("div");
var firstQuestionList = document.createElement("ol");
var wrongAnswerOne = document.createElement("button");
var wrongAnswerTwo = document.createElement("button");
var wrongAnswerThree = document.createElement("button");
var correctAnswerFour = document.createElement("button");
//adding second question elements
var secondQuestion = document.createElement("div");
var twoFirstQuestionList = document.createElement("ol");
var twoWrongAnswerOne = document.createElement("button");
var twoCorrectAnswerTwo = document.createElement("button");
var twoWrongAnswerThree = document.createElement("button");
var twoWrongAnswerFour = document.createElement("button");
//adding end screen elements
var allDone = document.createElement("div");
var finalScore = document.createElement("h2");
var instructions = document.createElement("h3");
var initials = document.createElement("form");
var initialsButton = document.createElement("button");
//add high scores elements........."go back" and "clear high scores"

//starts after the start quiz button is clicked
function startQuiz() {
    firstQuestion.textContent = "What was the name of Beyonce's first solo album?";
    body.appendChild(firstQuestion);
    wrongAnswerOne.textContent = "B'Day";
    wrongAnswerTwo.textContent = "I Am... Sasha Fierce";
    wrongAnswerThree.textContent = "Beyonce";
    correctAnswerFour.textContent = "Dangerously in Love";
    body.appendChild(wrongAnswerOne);
    body.appendChild(wrongAnswerTwo);
    body.appendChild(wrongAnswerThree);
    body.appendChild(correctAnswerFour);
};

//takes you to the next question once you have selected an answer
wrongAnswerOne.addEventListener("click", partTwo);
wrongAnswerTwo.addEventListener("click", partTwo);
wrongAnswerThree.addEventListener("click", partTwo);
correctAnswerFour.addEventListener("click", partTwo);

//starts after you have made a selection on the first question
function partTwo() {
    body.removeChild(firstQuestion);
    body.removeChild(wrongAnswerOne);
    body.removeChild(wrongAnswerTwo);
    body.removeChild(wrongAnswerThree);
    body.removeChild(correctAnswerFour);
    secondQuestion.textContent = "What is Beyonce's favorite number?";
    body.appendChild(secondQuestion);
    twoWrongAnswerOne.textContent = "22";
    twoCorrectAnswerTwo.textContent = "4";
    twoWrongAnswerThree.textContent = "7";
    twoWrongAnswerFour.textContent = "13";
    body.appendChild(twoWrongAnswerOne);
    body.appendChild(twoCorrectAnswerTwo);
    body.appendChild(twoWrongAnswerThree);
    body.appendChild(twoWrongAnswerFour);
}
//takes you to the end screen once you have selected an answer
twoWrongAnswerOne.addEventListener("click", partThree);
twoCorrectAnswerTwo.addEventListener("click", partThree);
twoWrongAnswerThree.addEventListener("click", partThree);
twoWrongAnswerFour.addEventListener("click", partThree);

//end screen with all done, place to add initials, and submit button
function partThree() {
    body.removeChild(secondQuestion);
    body.removeChild(twoWrongAnswerOne);
    body.removeChild(twoCorrectAnswerTwo);
    body.removeChild(twoWrongAnswerThree);
    body.removeChild(twoWrongAnswerFour);
    allDone.textContent = "All Done!"
    body.appendChild(allDone);
    finalScore.textContent = "Your final score is: "
    body.appendChild(finalScore);
    instructions.textContent = "Enter your initials:"
    body.appendChild(instructions);
    body.appendChild(initials);
    initials.textContent = "initials here"
    initialsButton.textContent = "Submit"
    body.appendChild(initialsButton);
}


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