// DOM element selection
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

// Access multiple choice area in DOM
let optionList = document.querySelector('.multiple-choice-area');

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

// Stops further option selection until user clicks 'Next'
let stopOptionsOnClick = false;

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

    stopOptionsOnClick = true;
}

// Allows player to move to next question
nextButton.onclick = () => {
    console.log('Next button clicked');
    stopOptionsOnClick = false;
    questionCount = (questionCount + 1) % questions.length;
    showQuestions(questionCount);
}

// Variable for updating the score
let score = 0;

// Updates score
function updateScore() {
    scoringTally.textContent = score;
    console.log('Score updated:', score);
}

// Logs question being displayed to user
let questionCount = 0;

// Question bank

let questions = [
    {
        num: 1,
        question: "What is the main meat dish traditionally served on Christmas in the United States?",
        optionA: "Ham",
        optionB: "Turkey",
        optionC: "Roast Beef",
        optionD: "Lamb",
        correctAnswer: "B",
        img: "turkey.jpg",
    },

    {
        num: 2,
        question: "Which popular Christmas beverage is made from eggs, sugar, milk, and nutmeg?",
        optionA: "Hot Chocolate",
        optionB: "Eggnog",
        optionC: "Mulled Wine",
        optionD: "Apple Cider",
        correctAnswer: "B",
        img: "drinks.jpg"
    },

    {
        num: 3,
        question: "In which country did the tradition of gingerbread houses originate?",
        optionA: "Germany",
        optionB: "France",
        optionC: "Sweden",
        optionD: "Italy",
        correctAnswer: "A",
        img: "gingerbread.jpg"
    },

    {
        num: 4,
        question: "What is the name of the special cake traditionally eaten in Italy during the Christmas season?",
        optionA: "Stollen",
        optionB: "Panettone",
        optionC: "Yule Log",
        optionD: "Fruit Cake",
        correctAnswer: "B",
        img: "panetonne.jpg"
    },

    {
        num: 5,
        question: "What is a Christmas pudding also known as in the UK?",
        optionA: "Figgy Pudding",
        optionB: "Plum Pudding",
        optionC: "Mince Pie",
        optionD: "Christmas Cake",
        correctAnswer: "B",
        img: "pudding.jpg"
    },

    {
        num: 6,
        question: "What type of nuts are commonly associated with Christmas and are often roasted and enjoyed during the holiday season?",
        optionA: "Walnuts",
        optionB: "Almonds",
        optionC: "Pecans",
        optionD: "Chestnuts",
        correctAnswer: "D",
        img: "nuts.jpg"
    },

    {
        num: 7,
        question: "What is the main ingredient in the traditional Swedish Christmas dish 'Janssons frestelse'?",
        optionA: "Salmon",
        optionB: "Herring",
        optionC: "Potatoes",
        optionD: "Meatballs",
        correctAnswer: "C",
        img: "Janssons frestelse.jpg"
    },

    {
        num: 8,
        question: "Which spice is a key ingredient in the classic gingerbread cookie?",
        optionA: "Cinnamon",
        optionB: "Nutmeg",
        optionC: "Cloves",
        optionD: "Ginger",
        correctAnswer: "D",
        img: "cookie.jpg"
    },

    {
        num: 9,
        question: "What is the name of the French Christmas dessert that consists of puff pastry layers filled with almond cream?",
        optionA: "Yule Log",
        optionB: "Bûche de Noël",
        optionC: "Galette des Rois",
        optionD: "Pain d'épices",
        correctAnswer: "B",
        img: "buche.jpg"
    },

    {
        num: 10,
        question: "What is the traditional meat for a British Christmas dinner?",
        optionA: "Chicken",
        optionB: "Turkey",
        optionC: "Pork",
        optionD: "Goose",
        correctAnswer: "B",
        img: "dinner.jpg"
    },

    {
        num: 11,
        question: "What is the primary ingredient in the dish 'latkes', often enjoyed during Hanukkah?",
        optionA: "Zucchini",
        optionB: "Potatoes",
        optionC: "Sweet Potatoes",
        optionD: "Carrots",
        correctAnswer: "B",
        img: "latkes.jpg"
    },

    {
        num: 12,
        question: "In which country is the Christmas delicacy 'turrón' commonly enjoyed?",
        optionA: "Italy",
        optionB: "Spain",
        optionC: "Mexico",
        optionD: "Greece",
        correctAnswer: "B",
        img: "turron.jpg"
    },

    {
        num: 13,
        question: "What is the main ingredient in the Italian dish 'Feast of Seven Fishes,' a traditional Christmas Eve dinner?",
        optionA: "Lobster",
        optionB: "Shrimp",
        optionC: "Cod",
        optionD: "Salmon",
        correctAnswer: "C",
        img: "feast.jpg"
    },

    {
        num: 14,
        question: "Which spice is a key component of the Scandinavian mulled wine known as 'glögg'?",
        optionA: "Cinnamon",
        optionB: "Cardamon",
        optionC: "Nutmeg",
        optionD: "Cloves",
        correctAnswer: "B",
        img: "glogg.jpg"
    },

    {
        num: 15,
        question: "What type of cake is typically served during the celebration of the Christian holiday Epiphany on January 6th?",
        optionA: "King Cake",
        optionB: "Buche de Noel",
        optionC: "Rosca de Reyes",
        optionD: "Pandoro",
        correctAnswer: "C",
        img: "rosca.jpg"
    },

    {
        num: 16,
        question: "What is the traditional Christmas dessert in Mexico, often filled with nuts and dried fruits?",
        optionA: "Tamales",
        optionB: "Rosca de Reyes",
        optionC: "Buñuelos",
        optionD: "Fruitcake",
        correctAnswer: "C",
        img: "Bunuelos.jpg"
    },

    {
        num: 17,
        question: "Which fruit is a common ingredient in the Christmas dish 'cranberry sauce'?",
        optionA: "Blueberries",
        optionB: "Raspberries",
        optionC: "Strawberries",
        optionD: "Cranberries",
        correctAnswer: "D",
        img: "cranberry.jpg"
    },

    {
        num: 18,
        question: "What is the name of the German Christmas bread that is often filled with nuts and dried fruits?",
        optionA: "Pfeffernusse",
        optionB: "Stollen",
        optionC: "Lebkuchen",
        optionD: "Springerle",
        correctAnswer: "B",
        img: "stollen.jpg"
    },

    {
        num: 19,
        question: "In the United States, what type of pie is a popular dessert during the Christmas season?",
        optionA: "Pumpkin Pie",
        optionB: "Pecan Pie",
        optionC: "Apple Pie",
        optionD: "Cherry Pie",
        correctAnswer: "B",
        img: "pecan.jpg"
    },

    {
        num: 20,
        question: "What is the name of the traditional Japanese Christmas cake made with sponge cake, whipped cream, and strawberries?",
        optionA: "Mochi",
        optionB: "Matcha Roll",
        optionC: "Castella",
        optionD: "Strawberry Shortcake",
        correctAnswer: "D",
        img: "japanese.jpg"
    },
]



