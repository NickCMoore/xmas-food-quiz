/**
 * Event handler for the "Start" button click.
 * Displays game rules.
 */
startButton.onclick = () => {
    console.log('Start button clicked');
    rulesDisplay.classList.add('active');
    main.classList.add('active');
}

/**
 * Event handler for the "Quit" button in the rules screen.
 * Option available to quit to the home screen.
 */
quitButton.onclick = () => {
    console.log('Quit button clicked');
    rulesDisplay.classList.remove('active');
    main.classList.remove('active');
}

/**
 * Event handler for the "Continue" button in the rules screen.
 * Starts the quiz and displays the first question.
 */
continueButton.onclick = () => {
    console.log('Continue button clicked');
    questionDisplay.classList.add('active');
    rulesDisplay.classList.remove('active');
    showQuestions(0);
}

/**
 * Event handler for leaving quiz and returning to the home screen.
 */
questionQuitButton.onclick = () => {
    console.log('Question Quit button clicked');
    questionDisplay.classList.remove('active')
    main.classList.remove('active');
}

/**
 * Event handler for the "Exit" button in the results screen.
 * Quits from the results page to the home screen, resets score and shows the first question again.
 */
exitButton.onclick = () => {
    console.log('Exit button clicked');
    resultsDisplay.classList.remove('active');
    main.classList.remove('active');

    score = 0;
    questionCount = 0;

    updateScore();

    showQuestions(0);
}

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
}

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
}

/**
 * Displays the current question.
 */
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

        updateScore();
        console.log('Correct. Current score: ' + score);
    } else {
        const correctAnswer = document.getElementById(`option${questions[questionCount].correctAnswer}`);
        correctAnswer.style.backgroundColor = '#4CAF50';

        selectedOptionElement.style.backgroundColor = '#FF5252';
        console.log('Wrong. Current score: ' + score);
    }
    optionClicked = true;
    stopOptionsOnClick = true;
}

/**
 * Deals with the end of the game.
 * Moves to the results page, displays the final score and provides an appropriate message based on the score.
 */
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