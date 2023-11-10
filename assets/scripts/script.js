// DOM element selection
const startButton = document.querySelector('.start-button');
const rulesDisplay = document.querySelector('.rules-display');
const quitButton = document.querySelector('.quit-button');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continue-button');
const questionDisplay = document.querySelector('.question-display')
const questionQuitButton = document.querySelector('.question-quit-button')
const nextButton = document.querySelector('.next-button');
const resultsDisplay = document.querySelector('.results-display')
const exitButton = document.querySelector('.exit-button')
const tryAgainButton = document.querySelector('.try-again-button')

//Event handlers

// Shows game rules
startButton.onclick = () => {
    rulesDisplay.classList.add('active');
    main.classList.add('active');
}

// Quits to home screen
quitButton.onclick = () => {
    rulesDisplay.classList.remove('active');
    main.classList.remove('active');
}

// Starts quiz
continueButton.onclick = () => {
    questionDisplay.classList.add('active');
    rulesDisplay.classList.remove('active');
}

// Quits to home screen
questionQuitButton.onclick = () => {
    questionDisplay.classList.remove('active')
    main.classList.remove('active');
}

// Moves to next question
nextButton.onclick = () => {
    questionDisplay.classList.remove('active')
    resultsDisplay.classList.add('active');
}

// Shows player final score
resultsDisplay.onclick = () => {
    questionDisplay.classList.remove('active');
    resultsDisplay.classList.add('active')
}

// Quits to home screen
exitButton.onclick = () => {
    resultsDisplay.classList.remove('active');
    main.classList.add('active');
}

// Returns player to first question in quiz
tryAgainButton.onclick = () => {
    resultsDisplay.classList.remove('active');
    questionDisplay.classList.add('active');
}