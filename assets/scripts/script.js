// DOM element selection
const startButton = document.querySelector('.start-button');
const rulesDisplay = document.querySelector('.rules-display');
const quitButton = document.querySelector('.quit-button');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continue-button');
const questionDisplay = document.querySelector('.question-display');
const optionList = document.querySelector('.multiple-choice-area');
const nextButton = document.querySelector('.next-button');
const questionQuitButton = document.querySelector('.question-quit-button');
const scoringTally = document.getElementById('player-score');
const questionPic = document.getElementById('question-pic');
const finalUserScoreMessage = document.querySelector('.final-user-score-message');
const finalUserScore = document.querySelector('.final-user-score');
const resultsDisplay = document.querySelector('.results-display');
const exitButton = document.querySelector('.exit-button');
const tryAgainButton = document.querySelector('.try-again-button');

// Variable for updating the score
let score = 0;

// Logs question being displayed to the user
let questionCount = 0;

// Stops further option selection until user clicks 'Next'
let stopOptionsOnClick = false;

// Checks whether an option has been clicked
let optionClicked = false;

//Event handlers

// Shows game rules
startButton.onclick = () => {
    console.log('Start button clicked');
    rulesDisplay.classList.add('active');
    main.classList.add('active');
}

// Quits to home screen
quitButton.onclick = () => {
    console.log('Quit button clicked');
    rulesDisplay.classList.remove('active');
    main.classList.remove('active');
}

// Starts quiz
continueButton.onclick = () => {
    console.log('Continue button clicked');
    questionDisplay.classList.add('active');
    rulesDisplay.classList.remove('active');
    showQuestions(0);
}

// Quits to home screen
questionQuitButton.onclick = () => {
    console.log('Question Quit button clicked');
    questionDisplay.classList.remove('active')
    main.classList.remove('active');
}

// Quits from results page to home screen
exitButton.onclick = () => {
    console.log('Exit button clicked');
    resultsDisplay.classList.remove('active');
    main.classList.remove('active');

    score = 0;
    questionCount = 0;

    updateScore();

    showQuestions(0);
}

// Quits from results page to home screen
tryAgainButton.onclick = () => {
    console.log('Try again button clicked');
    resultsDisplay.classList.remove('active');
    questionDisplay.classList.add('active');

    score = 0;
    questionCount = 0;

    updateScore();

    showQuestions(0);
}

// Event handlers based on option selected by player

document.getElementById('optionA').addEventListener('click', function () {
    AnswerSelect('A');
});

document.getElementById('optionB').addEventListener('click', function () {
    AnswerSelect('B');
});

document.getElementById('optionC').addEventListener('click', function () {
    AnswerSelect('C');
});

document.getElementById('optionD').addEventListener('click', function () {
    AnswerSelect('D');
});

// Allows player to move to next question
nextButton.onclick = () => {
    if (optionClicked) {
        console.log('Next button clicked');
        stopOptionsOnClick = false;

        if (questionCount === questions.length - 1) {
            endGame(); // Call the function to display results
        } else {
            questionCount = (questionCount + 1) % questions.length;
            showQuestions(questionCount);
        }
        optionClicked = false;
    } else {
        console.log('Click an answer before moving forwards');
    }
}

// Quiz changes based on user interaction
function showQuestions(index) {
    console.log('Showing question:', index + 1);

    questionPic.setAttribute('src', "assets/images/" + questions[index].img)
    // Updates the background colour for the option buttons
    document.getElementById('optionA').style.backgroundColor = '';
    document.getElementById('optionB').style.backgroundColor = '';
    document.getElementById('optionC').style.backgroundColor = '';
    document.getElementById('optionD').style.backgroundColor = '';

    // Updates the text in the questions
    let questionText = document.querySelector('.question');
    questionText.textContent = `${questions[index].question}`;

    // Updates the question number at the top
    let questionNumberElement = document.querySelector('.question-number');
    questionNumberElement.textContent = `Question ${questions[index].num}`;

    document.querySelector('#optionA').textContent = `${questions[index].optionA}`;
    document.querySelector('#optionB').textContent = `${questions[index].optionB}`;
    document.querySelector('#optionC').textContent = `${questions[index].optionC}`;
    document.querySelector('#optionD').textContent = `${questions[index].optionD}`;

    console.log('Finished showing question.');
}

// Scoring section

// Updates score
function updateScore() {
    scoringTally.textContent = score;
    console.log('Score updated:', score);
}

function AnswerSelect(selectedOption) {
    console.log('Selected Option: ' + selectedOption);

    if (stopOptionsOnClick) {
        const optionStop = document.querySelectorAll('.answer-option')
        optionStop.forEach(button => {
            button.disabled = true;
        });
        return;
    }

    // Accesses the option element by ID
    const selectedOptionElement = document.getElementById(`option${selectedOption}`);

    // Checks if answer is right and provides feedback based on user selection
    if (selectedOption === questions[questionCount].correctAnswer) {
        selectedOptionElement.style.backgroundColor = '#4CAF50';
        score += 10;

        // Path for correct and incorrect user answers
        updateScore();
        console.log('Correct Current score: ' + score);
    } else {
        const correctAnswer = document.getElementById(`option${questions[questionCount].correctAnswer}`);
        correctAnswer.style.backgroundColor = '#4CAF50';

        selectedOptionElement.style.backgroundColor = '#FF5252';
        console.log('Wrong Current score: ' + score);
    }
    optionClicked = true;
    stopOptionsOnClick = true;
}

function endGame() {
    console.log("Moving to results page");
    questionDisplay.classList.remove('active');
    resultsDisplay.classList.add('active');
    finalUserScoreMessage.innerHTML = ` Congratulations! Your final score is:`;
    finalUserScore.innerHTML = `${score}`;

    if (score <= 100) {
        finalUserScoreMessage.innerHTML = `Oh no! You only scored ${score}. Better luck next time!`;
    }
}

