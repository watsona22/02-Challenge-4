
var countEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#startScreen");
var gameScreen = document.querySelector("#gameScreen");
var question = document.querySelector("#question");
var answers = document.querySelector('#answers');
var quiz = document.querySelector('.innerHTML');
var appear = document.querySelector('#display');
// var twoBtn = document.querySelector("#one");
// var threeBtn = document.querySelector("#two");
// var fourBtn = document.querySelector("#three");
// var fiveBtn = document.querySelector("#four");
var choices = document.querySelector('choices');
//const quizEl = document.querySelector('innerHTML');


// createElement('button') to create a button and use appendChild() method to make the element appear on the html.

var questions = [
    {
        ques: ["The DOM allows us to use ______ to interact with HTML elements."],
        choice: ["Javascript", "CSS", "HTML", "All above"],
        ans: ["All above"],
    },
    {
        ques: ["Which method adds a node to the end of the list of children of a specified parent node?"],
        choice: ["includes()", "appendChild()", "append()", "reduce()"],
        ans: ["appendChild()"],
    },
    {
        ques: ["Which method stops a setInterval()?"],
        choice: ["slice()", "reverse()", "clearTimeout()", "clearInterval()"],
        ans: ["clearInterval()"],
    },
    {
        ques: ["The ______ method is used to call a function whenever the specified event is delivered to the target."],
        choice: ["handleEvent()", "preventDefault()", "addEventListener()", "abort()"],
        ans: ["addEventListener()"],
    },
];

let currentQuestion = 0;
let submitted = false;
// var submitAnswer;
//var choice = "";
var score = 0;
//var answerWrong = 0;

var timer = 60;

function startTimer() {

    var timePassed = setInterval(function () {
        if (timer > 1) {
            countEl.textContent = timer + ' seconds remaining';
            timer--;
        } else if (timer === 1) {
            countEl.textContent = timer + ' second remaining';
            timer--;
        } else {
            countEl.textContent = '' + ' Time is up';
            clearInterval(timePassed);
        }

    }, 1000);

}
function renderQuestion() {
    question.textContent = questions[currentQuestion].ques
    answers.innerHTML = '';

    for (let i = 0; i < questions[currentQuestion].choice.length; i++) {
        //console.log(questions[currentQuestion].choice);
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = questions[currentQuestion].choice[i];
        choiceBtn.addEventListener("click", function (event) {
            submitAnswers(event.target.textContent);
        })
        answers.appendChild(choiceBtn);

    }
};

function submitAnswers(selectedAnswer) {
    var correctAnswer = questions[currentQuestion].ans;
    console.log(questions[currentQuestion].ans);
    var selectedAnswer;

    console.log(selectedAnswer);
    if (selectedAnswer == correctAnswer) {
        score++;
        alert('correct!');


    } else {
        score--;
        alert('incorrect');
        timer -= 5;

    }
    currentQuestion++;
    // if (questions[currentQuestion] !== questions.length)
    renderQuestion();
    endQuiz();
    // submitAnswers();
    console.log(score);
    console.log(timer);
};

//compare currentQuestion compared to length of array)  
//either renderQuiz or endQuiz
//call submitAnswer function ()
function endQuiz() {
    //print quiz result to card results class
    //create prompt for user to enter initials

};

function writeScore() {

    var results = document.getElementById('results');
    // results.innerHTML = "Your score is: " + score;
    results.textContent = score;
    {
        var result = '';
        for (i = 0; i < questions[currentQuestion].choice.length; i++) {
            answers.innerHTML += score;
        }
        if (time <= 0) {
            endQuiz();
            writeScore();
        }

    }
    return result;
    window.localStorage.getItem("answers", JSON.stringify(results));

};
// var resultScreen = document.querySelector("results");
//multiple choice format from stack overflow: https://stackoverflow.com/questions/34084048/creating-a-multiple-choice-option-in-javascript


startBtn.addEventListener("click", function () {
    if (timer == 60) {

        startTimer();
        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        // resultScreen.classList.remove("hidden");
        renderQuestion();
    }
}, 1000);


//add event listener to answers (in global scope)
//create buttons and put them in answers div (on html page); see what the target is and check if it is a button. check to see if the text matches answers. if it doesn proceed to next question. call function each time the - Erik Hirsch

// In the javascript, you can create elements using document.createElement('button') to create a button and use appendChild() method to make the element appear on the html. So you can dynamically create the elements from the javascript and append them to the html.  I find w3 schools is a good quick refesher on javascript tools https://www.w3schools.com/jsref/met_document_createelement.asp (edited) - David Gaither