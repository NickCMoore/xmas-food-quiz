const startButton = document.querySelector('.start-button');
const rulesDisplay = document.querySelector('.rules-display');
const quitButton = document.querySelector('.quit-button');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continue-button');
const questionDisplay = document.querySelector('.question-display')
const questionQuitButton = document.querySelector('.question-quit-button')


startButton.onclick = () => {
    rulesDisplay.classList.add('active');
    main.classList.add('active');
}

quitButton.onclick = () => {
    rulesDisplay.classList.remove('active');
    main.classList.remove('active');
}

continueButton.onclick = () => {
    questionDisplay.classList.add('active');
    rulesDisplay.classList.remove('active');
}

questionQuitButton.onclick = () => {
    questionDisplay.classList.remove('active')
    main.classList.remove('active');
}
