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

var timeInterval;

//consider making just one question container, then using textContent to change the questions to the second one, the h2 and buttons need separate ids

var blankQuestions = [];

var questionsArray = [
    {
        question: "What is Beyonce's first solo album called?",
        choices: ["B'Day", "Dangerously in Love", "Beyonce", "I Am... Sasha Fierce"],
        answer: 1
    },
    {
        question: "What is Beyonce's favorite number?",
        choices: ["4", "7", "13", "22"],
        answer: 0
    },
]

// To hide the questions
function renderBlanks() {
    // Uses loop to push blanks to blankQuestions array
    blankQuestions = []
    for (var i = 0; i < questionsArray; i++) {
        blankQuestions.push("");
    }
    // Converts blankQuestions array into a string and renders it on the screen
    questionContainer.textContent = blankQuestions.join(" ")
}

renderBlanks();

var reduceTime = 10;

function startTimer() {
    timeInterval = setInterval(function () {
        if (secondsLeft > 1) {
            timer.textContent = 'Time: ' + secondsLeft + ' seconds remaining';
            secondsLeft--;
        } else if (secondsLeft === 1) {
            timer.textContent = 'Time: ' + secondsLeft + ' second remaining';
            secondsLeft--;
        } else {
            timer.textContent = '';
            clearInterval(timeInterval);
            quizComplete();
            timer.textContent = 'Out of time!'
            //consider changing out of time to a function taking you to next step
        }
    }, 1000);
};

startButton.onclick = () => {
    startQuestions();
};

var currentQuestion = 0;

function startQuestions() {
    questionContainer.innerHTML = "";
    var questionTitle = document.createElement("h2");
    questionTitle.textContent = questionsArray[currentQuestion].question;
    questionTitle.setAttribute('id', 'question-title');
    var orderedList = document.createElement("ol");
    for (var i = 0; i < questionsArray[currentQuestion].choices.length; i++) {
        var button = document.createElement("button")
        button.textContent = questionsArray[currentQuestion].choices[i]
        orderedList.appendChild(button)
        button.addEventListener("click", function () {
            currentQuestion++;
            console.log(currentQuestion);
            if (currentQuestion < questionsArray.length) {
                startQuestions();
            } else {
                quizComplete();
                clearInterval(timeInterval);
            };
        })
    };
    questionContainer.append(questionTitle, orderedList);
};


var score = 0;

function calculateScore() {
    for (var i = 0; i < blankQuestions.length; i++) {
        var userResponse = blankQuestions[i].choices;
        if (userReponse == blankQuestions[i].answer) {
            score++;
            alert("correct!");
        } else {
            alert("wrong!");;
        }
    };

    alert("Youre score = " + score + "/" + blankQuestions.length);
};

function quizComplete() {
    document.getElementById('results').style.display= "block";
};


startButton.addEventListener("click", startTimer);