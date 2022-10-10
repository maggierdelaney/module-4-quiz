var startButton = document.querySelector(".start-button");
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector(".quiz");
var secondsLeft = 75;
var highScores = document.querySelector(".view-highscores");
var questionContainer = document.querySelector("#question-container");
var questionTitle = document.querySelector("#question-title");
var feedback = document.querySelector("#feedback");

var results = document.querySelector("#results");
var answer = document.getElementById("correct");

//putting questions in an array
//consdier making just one question container, then using textContent to change the questions to the second one, the h2 and buttons need separate ids
//starts after the start quiz button is clicked

    // questionContainer.style.display = 'none';
    // results.style.display = 'none';
    // feedback.style.display = 'none';

//most recently trying to get the display nones to reverse to show something!

//to make them display later, can put display block, inline block etc

var blankQuestions = [];

var questionsArray = [
    {
        question:"What is Beyonce's first solo album called?",
        choices:["B'Day","Dangerously in Love","Beyonce","I Am... Sasha Fierce"],
        answer:1
    },
    {
        question:"What is Beyonce's favorite number?",
        choices:["4","7","13","22"],
        answer:0
    },
]

  // Randomly picks word from words array
function renderBlanks() {
  // Uses loop to push blanks to blankLetters array
  blankQuestions = []
  for (var i = 0; i < questionsArray; i++) {
    blankQuestions.push("");
  }
  // Converts blankLetters array into a string and renders it on the screen
  questionContainer.textContent = blankQuestions.join(" ")
}


function startQuiz() {
    questionContainer text.Content = questionsArray[0];
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



renderBlanks();
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);
//startButton.addEventListener("click", firstQuestion());