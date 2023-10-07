var choice = "";
var score = 0;
var timer;
var timerCount;
var one = document.querySelector("page_1")
var two = document.querySelector("page_2")
var three = document.querySelector("page_3")
var four = document.querySelector("page_4")
var five = document.querySelector("page_5")

//multiple choice format from stack overflow: https://stackoverflow.com/questions/34084048/creating-a-multiple-choice-option-in-javascript

var submitAnswer = function() {

    var choice = document.getElementsByName('choice');
    var answer= "";
    for (var i = 0, length = choice.length; i < length; i++) {
        if (choice[i].checked) {
           answer = choice[i].answer; 
           break;
         }
    }

    if (windows.main.includes('')) {
        let currentQuestion = answer[0]
    
    if (answer == "" ) {
      alert('please select choice answer');
    } else if ( answer == "Javascript" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }

    if (answer == "" ) {
        alert('please select choice answer');
      } else if ( answer == "Scripting" ) {
        alert('Answer is correct !');
      } else {
        alert('Answer is wrong');
      }

    if (answer == "" ) {
        alert('please select choice answer');
      } else if ( answer == "Scripting" ) {
        alert('Answer is correct !');
      } else {
        alert('Answer is wrong');
      }

    if (answer == "" ) {
        alert('please select choice answer');
      } else if ( answer == "Scripting" ) {
        alert('Answer is correct !');
      } else {
        alert('Answer is wrong');
      }
  };

var responses = [];


function init() {
  getScore();
}

// WHEN I click the start button
var startBtn = document.querySelector("start");

function startQuiz() {
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderQuiz()
    startTimer()
  }

function startTimer() {
    // Sets timer
    timer = setInterval(function() {

      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  
// The startGame function is called when the start button is clicked



//document.addEventListener("keydown", function(event) {
    // If the count is zero, exit function
    //if (timerCount === 0) {
    //   return;
    // }

startBtn.addEventListener("click", startQuiz);
// THEN a timer starts and I am presented with a question
var startQuiz = document.querySelector("start")

// WHEN I answer a question
    //create object for each question and reference
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
//THEN I can save my initials and score.