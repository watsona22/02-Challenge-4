
var countEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#startScreen");
var gameScreen = document.querySelector("#gameScreen");
var question = document.querySelector("#question");
var answers = document.querySelector('#answers');
var quiz = document.querySelector('.innerHTML');
var appear = document.querySelector('#display');
var twoBtn = document.querySelector("#one");
var threeBtn = document.querySelector("#two");
var fourBtn = document.querySelector("#three");
var fiveBtn = document.querySelector("#four");
//const quizEl = document.querySelector('innerHTML');


// createElement('button') to create a button and use appendChild() method to make the element appear on the html.

var questions = [
    {
        ques: ["The DOM allows us to use ______ to interact with HTML elements."],
        choice: ["Javascript", "CSS", "HTML", "All the above"],
        ans: ["Javascript"],
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
        ans: ["addEventListener()"],
        choice: ["handleEvent()", "preventDefault()", "addEventListener()", "abort()"],

    },
];

let currentQuestion = 0;
let submitted = false;
var choice = "";
var score = 0;
var answerWrong = '';
var submitAnswer;
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
    submitted = false;
    //quiz.textContent = questions.ques;

    quiz.innerHTML = questions.ques;
    document.body.appendChild(quiz);

    twoBtn.innerHTML = choice[0];
    document.body.appendChild(twoBtn);


    threeBtn.innerHTML = choice[1];
    document.body.appendChild(threeBtn);

    fourBtn.innerHTML = choice[2];
    document.body.appendChild(fourBtn);


    fiveBtn.innerHTML = choice[3];
    document.body.appendChild(fiveBtn);

    var currentQuestion = questions[currentQuestion];
    const isLast = currentQuestion === questions.length;
    if (isLast) {
        //stop function and end the quiz (maybe call endQuiz function)
        return;
    };
    outcome();
    endQuiz();

};

function endQuiz() {
    //print quiz result to card results class
    //create prompt for user to enter initials
    outcome();
};


function outcome() {
    result = ""
    for (var i = 0, length = choice.length; i < length; i++) {
        if (answers = choice[i].ans) {
            break;
        }
        return result();
    }
    if (choice.includes("Javascript", "appendChild()", "clearInterval()", "addEventListener()")) {
        score++;
        outcome();
    } else {
        alert('incorrect');
        answerWrong++;
        timer -= 5;
    };
    answers.addEventListener("click", function () {
    })

};

//multiple choice format from stack overflow: https://stackoverflow.com/questions/34084048/creating-a-multiple-choice-option-in-javascript
var responses = [];


startBtn.addEventListener("click", function () {
    if (timer == 60) {

        startTimer();
        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        renderQuestion();
    }
}, 1000);

// answers.addEventListener("click", function () {
//     if (twoBtn == questions.ans)
//         alert('correct!')
//     else ('')
//     alert('wrong answer!');
// })

// answers.addEventListener("click", function () {
//     if (threeBtn == questions.ans)
//         alert('correct!');
//     else ('')
//     alert('wrong answer!');
// })

// answers.addEventListener("click", function () {
//     if (fourBtn == questions.ans)
//         alert('correct!');
//     else ('')
//     alert('wrong answer!');
// })

// answers.addEventListener("click", function () {
//     if (fiveBtn == questions.ans)
//         alert('correct!');
//     else ('')
//     alert('wrong answer!');
// })




//add event listener to answers (in global scope)
//create buttons and put them in answers div (on html page); see what the target is and check if it is a button. check to see if the text matches answers. if it doesn proceed to next question. call function each time the - Erik Hirsch

// In the javascript, you can create elements using document.createElement('button') to create a button and use appendChild() method to make the element appear on the html. So you can dynamically create the elements from the javascript and append them to the html.  I find w3 schools is a good quick refesher on javascript tools https://www.w3schools.com/jsref/met_document_createelement.asp (edited) - David Gaither