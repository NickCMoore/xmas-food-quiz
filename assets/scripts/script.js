const startButton = document.querySelector('.start-button');
const rulesDisplay = document.querySelector('.rules-display');

startButton.onclick = () => {
    rulesDisplay.classList.add('active');
}
