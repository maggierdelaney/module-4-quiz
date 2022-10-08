AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

***do not use jquery***

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
- add event listener for click start button that both starts the timer and populates the first question
- HTML will require <button class=start-quiz>Start Quiz</button>
- Call the class start-quiz with the document.query
- add event listener goes at the bottom of the code, tell event listener to call multiple functions(start quiz, then within start quiz, have a function to also start timer and render blanks)
- Consider Activity 7 create append to add additional divs to the html
- EXAMPLE: 
// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}
startButton.addEventListener("click", startGame);
***may consider init() as well***
- will need a function for start timer, and a function for start quiz
- function that populates first question: function that rendered the blanks and revealed the letters
- setTimer in 9 & 10, alos mini-project
- EXAMPLE:
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}
- EXAMPLE:
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

- EXAMPLE: to render a blank questiont to populate
// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ")
}


WHEN I answer a question
THEN I am presented with another question
- add event listener to a click on any answer even if incorrect
- additional an event listeners for correct answers, then incorrect answers (incorrect answer will decrement the time)
- the event listener will need to call a function for the next question, a function for the page feedback (if right or wrong), and then store the answer, and decrement the timer if it was wrong
***consider setting all answer variables to false, then use lines 129-135 example from mini project to convert the right answer to "true"***
- if statements.....
    if question right function(pull up next question)
        function display feedback
        store answer
    if question wrong function(pull up next question)
        function display feedback
        function decrement timer
        store answer
- consider a for loop to store the right or wrong answers
- may consider having the questions stored in an array? vs HTML, or consider question as a function...etc
- EXAMPLE: for correct vs incorrect answers
// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    wordBlank.textContent = blanksLetters.join(" ");
  }
}

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
- wrong answers decrement the timer
- if statement specifying answer incorrect
- if answer wrong function {would need to subtract a certain amount of time from the current time}
- possibly a new setInterval?
- add an else if within the same setInterval function: https://github.com/cfoster121/timed-astronomy-quiz/blob/main/script.js
- W3 on timing events may be helpful: https://www.w3schools.com/js/js_timing.asp
- EXAMPLE CODE: may be useful?
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}


WHEN all questions are answered or the timer reaches 0
THEN the game is over
- if statements? with an "or" between the two ||
- if (all questions answered || timer up)
    return (the function displaying the questions);
- return to return the answers or score

WHEN the game is over
THEN I can save my initials and score
- Can perhaps display a "game over" page
- local storage: refer to lines 93-127 for this score calculation
- function for setwins to set the item (setItem)
function for getwins that gets the item (getItem)
- For the initials storage, consider an if statement that ensures they must put letters in and not numbers or symbols
- For the text box where they enter their initials, the box must have a class in the html that is document.query'd at the top
- Consider looking at ACtivity 22 for local storage of text content
- EXAMPLE:
function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
- EXAMPLE: using getItem for local storage
// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}


hideAttributes used for the correct answers

