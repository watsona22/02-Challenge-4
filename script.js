
var countEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#startScreen");
var gameScreen = document.querySelector("#gameScreen");
var question = document.querySelector("#question");
var answers = document.querySelector('#answers');
var quiz = document.querySelector('.innerHTML');
var appear = document.querySelector('#display');
var choices = document.querySelector('choices');
var scoreResults = document.querySelector('#scoreResults');
var initials = document.querySelector('#initials');
var submitInitials = document.querySelector('#submit');
var results = document.querySelector('#results');
//created global variables to manipulate elements using the DOM - Erik Hirsch, Imyez


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
var score = 0;
var timePassed;
var timer = 60;
//created a timer function and variables to initiate the test and added the event Listener at the button so that it starts on a button push. - Erik Hirsch

function startTimer() {

    timePassed = setInterval(function () {
        if (timer > 1) {
            countEl.textContent = timer + ' seconds remaining';
            timer--;
        } else if (timer === 1) {
            countEl.textContent = timer + ' second remaining';
            timer--;
        } else {
            countEl.textContent = '' + ' Time is up';
            clearInterval(timePassed);
            endQuiz();
        }

    }, 1000);

}

//render each question for as long as there are questions that have not been called. If there are no more questions, the quiz ends.
function renderQuestion() {
    if (questions[currentQuestion]) {
        question.textContent = questions[currentQuestion].ques
        answers.innerHTML = '';
        // createElement('button') to create a button and use appendChild() method to make the element appear on the html, once a button is clicked on the page. - Tory
        for (let i = 0; i < questions[currentQuestion].choice.length; i++) {
            var choiceBtn = document.createElement("button");
            choiceBtn.textContent = questions[currentQuestion].choice[i];
            choiceBtn.addEventListener("click", function (event) {
                submitAnswers(event.target.textContent);
            })
            answers.appendChild(choiceBtn);

        }
    } else {
        endQuiz();
    }

};

//evaluate whether the submitted answers is correct based on comparison logic that refers to values in the array. - Imyez
function submitAnswers(selectedAnswer) {
    var correctAnswer = questions[currentQuestion].ans;
    console.log(questions[currentQuestion].ans);
    var selectedAnswer;

    console.log(selectedAnswer);
    if (selectedAnswer == correctAnswer) {
        score++;
        alert('correct!');


    } else {
        // score--;
        alert('incorrect');
        timer -= 5;

    }
    currentQuestion++;
    renderQuestion();
};


//once the endQuiz function is called, it hides the other screens and calls the scoreResult screen which houses the score and a place for player to enter initials.
function endQuiz() {
    gameScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    clearInterval(timePassed);
    scoreResults.textContent = score;
};

//event listeners created at the onset to initiate test and timer. Second event listener to write score to local storage, change the type to array and then string so that the score and initials can be called/displayed.- Erik Hirsch
startBtn.addEventListener("click", function () {
    if (timer == 60) {

        startTimer();
        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        renderQuestion();
    }
}, 1000);
submitInitials.addEventListener("click", function () {
    var previousScore = JSON.parse(localStorage.getItem("previousScore")) || []
    previousScore.push({ initials: initials.value, score })
    localStorage.setItem("previousScore", JSON.stringify(previousScore));
    initials.classList.add("hidden");
    submitInitials.classList.add("hidden");
    results.classList.remove("hidden");
    for (var i = 0; i < previousScore.length; i++) {
        var highScore = previousScore[i];
        var line = document.createElement("p");
        line.textContent = "initials: " + highScore.initials + " score: " + highScore.score;
        results.append(line);
    }
})



// "Create buttons and put them in answers div (on html page); see what the target is and check if it is a button. check to see if the text matches answers. if it doesn proceed to next question. call function each time" - Erik Hirsch

// "In the javascript, you can create elements using document.createElement('button') to create a button and use appendChild() method to make the element appear on the html. So you can dynamically create the elements from the javascript and append them to the html.  I find w3 schools is a good quick refesher on javascript tools https://www.w3schools.com/jsref/met_document_createelement.asp (edited)" - David Gaither
// Other resources referenced:
// https://developer.mozilla.org/en-US/docs/Web/API/Event/target
// https://stackoverflow.com/questions/66917427/javascript-instead-of-mapping-to-an-array-returning-one-value-at-a-time-instead
// https://www.educba.com/javascript-values/
// https://www.geeksforgeeks.org/javascript-multidimensional-array/
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

