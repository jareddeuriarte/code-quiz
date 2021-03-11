var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var questionContainer = document.createElement("div")

var questions = [

    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts",

    },

    {
        question: "The condition in an if/else statement is enclosed within ____.",
        choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
        correctAnswer: "Parentheses",

    },

    {
        question: "Arrays in Javascript can be used to store ____ 😉.",
        choices: ["Numbers & strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above",

    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        correctAnswer: "Quotes",


    },

    {
        question: "A very usefyl tool used during development and debugging for printing content to the debugger is:",
        choices: ["Terminal/bash", "For loops", "console.log", "Javascript"],
        correctAnswer: "console.log",
    }
]

var currentQuestion = 0
var currentChoices = 0





//TIMER

document.addEventListener('DOMContentLoaded', () => {
    var timerDisplay = document.querySelector("#time-left")
    timeLeft = 60
    function countDown(){
        setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(timeLeft = 0)
        }
        timerDisplay.innerHTML = timeLeft 
        timeLeft -= 1
        }, 1000)
    }
})


function startQuestions() {
    var button = document.createElement("button")
    button.textContent = "Next Question";
    button.addEventListener("click", nextQuestion);
    questionContainer.textContent = questions[currentQuestion].question;
    document.body.appendChild(questionContainer);
    document.body.appendChild(button);

}

function nextQuestion() {
    currentQuestion++;
    questionContainer.textContent = questions[currentQuestion].question;

}


startButton.addEventListener("click", function () {
    startScreen.setAttribute("style", "display:none;")
    startQuestions();




    
})



// WHEN I click the start button ✅
// THEN a timer starts ❌ and I am presented with a question ✅

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score




//Timer

