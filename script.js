
var countEl = document.querySelector("#countdown");
var startBtn = document.querySelector("#startBtn");
var startScreen = document.querySelector("#startScreen");
var gameScreen = document.querySelector("#gameScreen");
var question = document.querySelector("#question");
var answers = document.querySelector('#answers');
var quiz = document.querySelector('innerHTML');
var twoBtn = document.querySelector("#two");
var threeBtn = document.querySelector("#three");
var fourBtn = document.querySelector("#four");
var fiveBtn = document.querySelector("#five");
const quizEl = document.querySelector('innerHTML');

const questions = [{
    ques: 'The DOM allows us to use ______ to interact with HTML elements.',
    ans: "Javascript",
    choice: [{ title: "Javascript" }, { title: "CSS" }, { title: "HTML" }, { title: "All the above" }],
}, {
    ques: 'Which method adds a node to the end of the list of children of a specified parent node?',
    ans: "appendChild()",
    choice: [{ title: "includes()" }, { title: "appendChild()" }, { title: "append()" }, { title: "reduce()" }],
}, {
    ques: 'Which methods stops a setInterval()?',
    ans: "clearInterval()",
    choice: [{ title: "slice()" }, { title: "reverse()" }, { title: "clearTimeout()" }, { title: "clearInterval()" }],

}, {
    ques: 'The ______ method is used to call a function whenever the specified event is delivered to the target.',
    ans: "addEventListener()",
    choice: [{ title: "handleEvent()" }, { title: "preventDefault()" }, { title: "addEventListener()" }, { title: "abort()" }],

}];
let currentQuestion = 0;
let submitted = false;
var choice = "";
var score = 0;
var answerWrong;
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
            countEl.textContent = '' + ' time is up';
            clearInterval(timePassed);
        }

    }, 1000);



    // if (questions.choice.includes(questions.ans)) {
    //     alert('correct!');
    // } else {
    //     alert('incorrect');
    //     answerWrong++;
    //     timer -= 5;
    // };
}


var quiz = function renderQuestion() {
    submitted = false;
    const currentQuestion = questions[currentQuestion];
    const isLast = currentQuestion === questions.length;

    if (isLast) {
        //stop function and end the quiz (maybe call endQuiz function)
    }

    question.textContent = question.ques


}


//to call object to display on multiple pages?
// var querep = ques.map(function(val, index){
//   return [val, ans[index]]
// });

//multiple choice format from stack overflow: https://stackoverflow.com/questions/34084048/creating-a-multiple-choice-option-in-javascript
function outcome() {
    result = ""
    for (var i = 0, length = choice.length; i < length; i++) {
        score += answerWrong;
        //console.log(result)
        return result();
    }
}

//      if (answer == "" ) {
//          alert('please select choice answer');
//       } else if ( answer == "Scripting" ) {
//          alert('Answer is correct !');
//        } else {
//          alert('Answer' + answerWrong + 'is wrong');

//          answer += score
//          return result(document.querySelector("#page_5"));
//       }
//const answerContainers = quizContainer.querySelectorAll(".answers");

var responses = [];

//getScore();
// var choice = document.getElementsByName('choice');
//     console.log();
//     var answer= "";
//      for (var i = 0, length = choice.length; i < length; i++) {
//          if (choice[i].checked) {
//             answer = choice[i].answer;
//            break;
//           }}
startBtn.addEventListener("click", function () {
    if (timer == 60) {

        startTimer();
        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        renderQuestion();
    }
}, 1000);
answers.addEventListener("click", function () {
    if (twoBtn == questions.ans)
        alert('correct!')
    else ('')
    alert('wrong answer!');
})

answers.addEventListener("click", function () {
    if (threeBtn == questions.ans)
        alert('correct!');
    else ('')
    alert('wrong answer!');
})

answers.addEventListener("click", function () {
    if (fourBtn == questions.ans)
        alert('correct!');
    else ('')
    alert('wrong answer!');
})

answers.addEventListener("click", function () {
    if (fiveBtn == questions.ans)
        alert('correct!');
    else ('')
    alert('wrong answer!');
})




//add event listener to answers (in global scope)
//create buttons and put them in answers div (on html page); see what the target is and check if it is a button. check to see if the text matches answers. if it doesn proceed to next question. call function each time the 