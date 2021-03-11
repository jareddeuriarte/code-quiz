var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var questionContainer = document.createElement("div")

// WHEN I click the start button ✅
// THEN a timer starts ❌ and I am presented with a question ✅

// QUESTION SCREEN AND BUTTONS SHOULD APPEAR
function startQuestions(){
    console.log("QUIZ STARTS!");
    questionContainer.textContent = "Am I doing this right?";
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




// Question 1:
// Commonly used data types DO NOT include:
// strings
// booleans
// alerts
// numbers
// Answer is alerts
// Question 2:
// The condition in an if / else statement is enclosed within ____.
// quotes
// curly brackets
// parentheses
// square brackets
// Answer is parentheses
// Question 3:
// Arrays in JavaScript can be used to store ____.
// numbers and strings
// other arrays
// booleans
// all of the above
// Answer is all of the above
// Question 4:
// String values must be enclosed within ____ when being assigned to variables.
// commas
// curly brackets
// quotes
// parentheses
// Answer is quotes
// Question 5:
//   A very useful tool used during development and debugging for printing content to the debugger is:
// JavaScript
// terminal / bash
// for loops
// console.log
// Answer is console.log