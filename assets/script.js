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



// WHEN I click the start button ✅
// THEN a timer starts ❌ and I am presented with a question ✅

// QUESTION SCREEN AND BUTTONS SHOULD APPEAR
function startQuestions(){
    console.log("QUIZ STARTS!");
    questionContainer.textContent = "Am I doing this right?"; // Put big object of questions here.
    document.body.appendChild(questionContainer);
}




startButton.addEventListener("click", function() {
    // console.log("CLICKED!");
    startScreen.setAttribute("style", "display:none;")
    startQuestions();

})






// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
