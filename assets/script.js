var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var questionContainer = document.createElement("div")
var answerContainer = document.createElement("div")


// This is my list of questions, choices of 
var questionsList = [

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

var currentQuestionIndex = 0
var currentChoices = 0



function startQuestions() {
    // creating a new button called "next question"
    var button = document.createElement("button")
    // going into the new button and making the "label"
    button.textContent = "Next Question";
    // Adding event listening to the new button to call the funtion nextQuestion
    button.addEventListener("click", nextQuestion);
    // Adding the question texts to the div, which i created in the DOM
    questionContainer.textContent = questionsList[currentQuestionIndex].question;
    console.log(questionsList[currentQuestionIndex])
    document.body.appendChild(questionContainer);
    document.body.appendChild(button);
    //Looping through all choices for the currentQuestionIndex
    answerContainer.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        questionsList[currentQuestionIndex].choices[i]
        console.log(questionsList[currentQuestionIndex].choices[i])
        var button = document.createElement("button")
        button.textContent = questionsList[currentQuestionIndex].choices[i];
        button.addEventListener("click", checkAnswer);
        // adding buttons to the answer container
        answerContainer.appendChild(button);
        // adding the answer container to the DOM body
        document.body.appendChild(answerContainer);
    }

}

function nextQuestion() {
    // Incrementing the index by 1 to move to the next question in the array of questionsList. 
    currentQuestionIndex = currentQuestionIndex + 1;
    questionContainer.textContent = questionsList[currentQuestionIndex].question;
    //Looping through all choices for the currentQuestionIndex
    answerContainer.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        questionsList[currentQuestionIndex].choices[i]
        console.log(questionsList[currentQuestionIndex].choices[i])
        var button = document.createElement("button")
        button.textContent = questionsList[currentQuestionIndex].choices[i];
        button.addEventListener("click", checkAnswer);
        // adding buttons to the answer container
        answerContainer.appendChild(button);
        // adding the answer container to the DOM body
        document.body.appendChild(answerContainer);
    }
    //Populating and looping  answer buttons
    // questionsList[currentQuestionIndex].choices.forEach(function(choice) {
    // console.log(choice)
    // })

    // for(var i = 0; i < questionsList[currentQuestionIndex].choices.length)

}

function checkAnswer() {
    console.log("checkAnswer");
}


startButton.addEventListener("click", function () {
    startScreen.setAttribute("style", "display:none;")
    startQuestions();
})



var timerDisplay = document.querySelector("#time-left")
timeLeft = 60
setInterval(function () {
    if (timeLeft <= 0) {
        clearInterval(timeLeft = 0)
    }
    timerDisplay.innerHTML = timeLeft
    timeLeft -= 1
}, 1000);





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

