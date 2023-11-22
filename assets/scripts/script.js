/**
 * DOM elements for the quiz
 */
const startButton = document.querySelector('.start-button');
const rulesDisplay = document.querySelector('.rules-display');
const quitButton = document.querySelector('.quit-button');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continue-button');
const questionDisplay = document.querySelector('.question-display');
const nextButton = document.querySelector('.next-button');
const questionQuitButton = document.querySelector('.question-quit-button');
const scoringTally = document.getElementById('player-score');
const questionPic = document.getElementById('question-pic');
const finalUserScoreMessage = document.querySelector('.final-user-score-message');
const finalUserScore = document.querySelector('.final-user-score');
const resultsDisplay = document.querySelector('.results-display');
const exitButton = document.querySelector('.exit-button');
const tryAgainButton = document.querySelector('.try-again-button');

/**
 * Event handler for the "Start" button click.
 * Displays game rules.
 */
startButton.onclick = () => {
    console.log('Start button clicked');
    rulesDisplay.classList.add('active');
    main.classList.add('active');
};

/**
 * Event handler for the "Quit" button in the rules screen.
 * Option available to quit to the home screen.
 */
quitButton.onclick = () => {
    console.log('Quit button clicked');
    rulesDisplay.classList.remove('active');
    main.classList.remove('active');
};

/**
 * Event handler for the "Continue" button in the rules screen.
 * Starts the quiz and displays the first question.
 */
continueButton.onclick = () => {
    console.log('Continue button clicked');
    questionDisplay.classList.add('active');
    rulesDisplay.classList.remove('active');
    showQuestions(0);
};

/**
 * Event handler for leaving quiz and returning to the home screen.
 */
questionQuitButton.onclick = () => {
    console.log('Question Quit button clicked');
    questionDisplay.classList.remove('active');
    main.classList.remove('active');

    clearInterval(myInterval);
};

/**
 * Event handler for the "Exit" button in the results screen.
 * Quits from the results page to the home screen, resets score and shows the first question again.
 */
exitButton.onclick = () => {
    console.log('Exit button clicked');
    resultsDisplay.classList.remove('active');
    main.classList.remove('active');

    clearInterval(myInterval);

    score = 0;
    questionCount = 0;

    updateScore();

    showQuestions(0);
};

/**
 * Event handler for the "Try Again" button in the results screen.
 * Quits from the results page to the question screen, resets score and shows the first question again.
 */
tryAgainButton.onclick = () => {
    console.log('Try again button clicked');
    resultsDisplay.classList.remove('active');
    questionDisplay.classList.add('active');
    score = 0;
    questionCount = 0;
    updateScore();
    showQuestions(0);
};

/**
 * Event handler for the "Next" button.
 * Allows the player to move to the next question.
 */
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
};

/**
 * Variables to track the quiz and user's progress.
 */
let stopOptionsOnClick = false;
let optionClicked = false;
let questionCount = 0;
let score = 0;
let counter = 0;
let myInterval;
let timeRemaining = 20;

/**
 * Starting the timer
 */
function startTimer() {
    myInterval = setInterval(timer, 1000);
}

/**
 * Timer function
 */

function timer() {
    console.log('Time is counting down');
    counter++;


    if (counter <= timeRemaining) {
        document.getElementById('timer').textContent = (timeRemaining - counter);
    } else {
        timeout();
        clearInterval(myInterval);
    }
}

/**
 * Function for if user runs out of time
 */
function timeout() {
    console.log('You have no time left!');

    document.querySelector('.question').textContent = ('You are out of time!');

    const optionButtons = document.querySelectorAll('.answer-option');
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    if (!optionClicked) {
        console.log('No answer selected. Updating score to 0.');
        score = 0;
        updateScore();
    }

    optionClicked = true;
    stopOptionsOnClick = false;
}

/**
 * Event listeners for option buttons (A, B, C, D).
 */
document.getElementById('optionA').addEventListener('click', function () { answerSelect('A'); });
document.getElementById('optionB').addEventListener('click', function () { answerSelect('B'); });
document.getElementById('optionC').addEventListener('click', function () { answerSelect('C'); });
document.getElementById('optionD').addEventListener('click', function () { answerSelect('D'); });

/**
 * Displays the current question.
 */
function showQuestions(index) {
    console.log('Showing question:', index + 1);

    clearInterval(myInterval);
    counter = 0;

    questionPic.setAttribute('src', "assets/images/" + questions[index].img);
    startTimer();

    const optionButtons = document.querySelectorAll('.answer-option');

    optionButtons.forEach(button => {
        button.style.backgroundColor = '';
        button.disabled = false;
    });

    //Resets background colours for the option buttons
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

    stopOptionsOnClick = false;

    console.log('Finished showing question.');
}

/**
 * Updates the displayed score on the page.
 */
function updateScore() {
    scoringTally.textContent = score;
    console.log('Score updated:', score);
}

/**
 * Deals with the selection of an answer.
 */
function answerSelect(selectedOption) {
    console.log('Selected Option: ' + selectedOption);

    if (stopOptionsOnClick) {
        const optionStop = document.querySelectorAll('.answer-option');
        optionStop.forEach(button => {
            button.disabled = true;
        });
        return;
    }

    const selectedOptionElement = document.getElementById(`option${selectedOption}`);

    if (optionClicked) {
        console.log('Answer already selected. Ignoring further clicks.');
        return;
    }

    if (selectedOption === questions[questionCount].correctAnswer) {
        selectedOptionElement.style.backgroundColor = '#4CAF50';
        score += 10;

        updateScore();
        console.log('Correct. Current score: ' + score);
    } else {
        const correctAnswer = document.getElementById(`option${questions[questionCount].correctAnswer}`);
        correctAnswer.style.backgroundColor = '#4CAF50';
        selectedOptionElement.style.backgroundColor = '#FF5252';
        console.log('Wrong. Current score: ' + score);
    }

    const optionButtons = document.querySelectorAll('.answer-option');
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    optionClicked = true;
    stopOptionsOnClick = false;
}

/**
 * Deals with the end of the game.
 * Moves to the results page, displays the final score and provides an appropriate message based on the score.
 */
function endGame() {
    console.log("Moving to results page");
    questionDisplay.classList.remove('active');
    resultsDisplay.classList.add('active');

    if (score <= 100) {
        finalUserScoreMessage.innerHTML = `Oh no! You only scored ${score}. Better luck next time!`;
        document.getElementById('results-page-image').src = 'assets/images/sad_dinner.webp';
    } else {
        finalUserScoreMessage.innerHTML = ` Congratulations! Your final score is:`;
        document.getElementById('results-page-image').src = 'assets/images/happy_dinner_v2.webp';
    }
    finalUserScore.innerHTML = `${score}`;
}