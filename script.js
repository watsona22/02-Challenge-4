
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
//console.log(questions[0].choice[0]);
let currentQuestion = 0;
let submitted = false;
var submitAnswer;
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


// submitted = false;

// quiz.innerHTML = questions[0].ques[0];
// document.body.appendChild(quiz);

// twoBtn.innerHTML = questions[0].choice[0];
// document.body.appendChild(twoBtn);


// threeBtn.innerHTML = questions[0].choice[1];
// document.body.appendChild(threeBtn);

// fourBtn.innerHTML = questions[0].choice[2];
// document.body.appendChild(fourBtn);


// fiveBtn.innerHTML = questions[0].choice[3];
// document.body.appendChild(fiveBtn);

// //var currentQuestion = questions[currentQuestion];
function renderQuestion() {
    question.textContent = questions[currentQuestion].ques
    console.log(questions[currentQuestion].ques);

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

function submitAnswers(selectAnswers) {
    var selectAnswers = questions[currentQuestion].choice;
    if (selectAnswers === questions[currentQuestion].ans) {
        score++;
        alert('correct!');


    } else {
        score--;
        alert('incorrect');
        timer -= 5;


    }
    currentQuestion++;
    if (questions[currentQuestion] !== questions.length)
        renderQuestion();
    endQuiz();
    // submitAnswers();


};

//compare currentQuestion compared to length of array)  
//either renderQuiz or endQuiz
//call submitAnswer function ()

// function runningQuiz() {
//     choices.addEventListener("click", function () {
//         if (choices === questions[currentQuestion].ans); {
//             score++;
//             alert('correct!');
//             currentQuestion++;

//         } (choices !== questions[currentQuestion].ans)
//         {
//             score--;
//             alert('incorrect');
//             timer -= 5;
//             currentQuestion++;
//         }
//         for (let i = 0; i < questions.choice; i++) {
//             if (choice = choice[i].ans) {

//             }
//             return result();

//         }
//         currentQuestion++;
//         outcome();
//     });


// function finalScore() {
//     //choices = event.target;
//     // document.getElementById("one").disabled = true;
//     // document.getElementById("two").disabled = true;
//     // document.getElementById("three").disabled = true;
//     // document.getElementById("four").disabled = true;
//     {
//         var result = '';
//         for (i = 0; i < questions[currentQuestion].choice.length; i++) {
//             answers.innerHTML += score;
//         }
//         if (currentQuestion !== questions[currentQuestion].ans)
//             score--;
//         alert('incorrect');
//         timer -= 5;

//     }
//     return result;

// };


;

function endQuiz() {
    //print quiz result to card results class
    //create prompt for user to enter initials
    // finalScore();
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