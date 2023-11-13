// DOM element selection
const startButton = document.querySelector('.start-button');
const rulesDisplay = document.querySelector('.rules-display');
const quitButton = document.querySelector('.quit-button');
const main = document.querySelector('.main');
const continueButton = document.querySelector('.continue-button');
const questionDisplay = document.querySelector('.question-display')
const nextButton = document.querySelector('.next-button')
const questionQuitButton = document.querySelector('.question-quit-button')

//Event handlers

let questionCount = 0;

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
    showQuestions(0);
}

// Quits to home screen
questionQuitButton.onclick = () => {
    questionDisplay.classList.remove('active')
    main.classList.remove('active');
}

nextButton.onclick = () => {
    questionCount = (questionCount + 1) % questions.length;
    showQuestions(questionCount);
}

let optionList = document.querySelector('.multiple-choice-area');

function showQuestions(index) {
    let questionText = document.querySelector('.question');
    questionText.textContent = `${questions[index].num}. ${questions[index].question}`;
    document.querySelector('#optionA').textContent = `A. ${questions[index].optionA}`;
    document.querySelector('#optionB').textContent = `B. ${questions[index].optionB}`;
    document.querySelector('#optionC').textContent = `C. ${questions[index].optionC}`;
    document.querySelector('#optionD').textContent = `D. ${questions[index].optionD}`;
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

let score = 0;


function AnswerSelect(selectedOption) {
    console.log('Selected Option: ' + selectedOption);

    if (selectedOption === questions[questionCount].correctAnswer) {
        score += 10;
        console.log('Correct! Current score: ' + score);
    } else {
        console.log('Wrong! Current score: ' + score);
    }
}


//Questions

let questions = [
    {
        num: 1,
        question: "What is the main meat dish traditionally served on Christmas in the United States?",
        optionA: "Ham",
        optionB: "Turkey",
        optionC: "Roast Beef",
        optionD: "Lamb",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 2,
        question: "Which popular Christmas beverage is made from eggs, sugar, milk, and nutmeg?",
        optionA: "Hot Chocolate",
        optionB: "Eggnog",
        optionC: "Mulled Wine",
        optionD: "Apple Cider",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 3,
        question: "In which country did the tradition of gingerbread houses originate?",
        optionA: "Germany",
        optionB: "France",
        optionC: "Sweden",
        optionD: "Italy",
        correctAnswer: "A",
        img: ""
    },

    {
        num: 4,
        question: "What is the name of the special cake traditionally eaten in Italy during the Christmas season?",
        optionA: "Stollen",
        optionB: "Panettone",
        optionC: "Yule Log",
        optionD: "Fruit Cake",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 5,
        question: "What is a Christmas pudding also known as in the UK?",
        optionA: "Figgy Pudding",
        optionB: "Plum Pudding",
        optionC: "Mince Pie",
        optionD: "Christmas Cake",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 6,
        question: "What type of nuts are commonly associated with Christmas and are often roasted and enjoyed during the holiday season?",
        optionA: "Walnuts",
        optionB: "Almonds",
        optionC: "Pecans",
        optionD: "Chestnuts",
        correctAnswer: "D",
        img: ""
    },

    {
        num: 7,
        question: "What is the main ingredient in the traditional Swedish Christmas dish 'Janssons frestelse'?",
        optionA: "Salmon",
        optionB: "Herring",
        optionC: "Potatoes",
        optionD: "Meatballs",
        correctAnswer: "C",
        img: ""
    },

    {
        num: 8,
        question: "Which spice is a key ingredient in the classic gingerbread cookie?",
        optionA: "Cinnamon",
        optionB: "Nutmeg",
        optionC: "Cloves",
        optionD: "Ginger",
        correctAnswer: "D",
        img: ""
    },

    {
        num: 9,
        question: "What is the name of the French Christmas dessert that consists of puff pastry layers filled with almond cream?",
        optionA: "Yule Log",
        optionB: "Bûche de Noël",
        optionC: "Galette des Rois",
        optionD: "Pain d'épices",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 10,
        question: "What is the traditional meat for a British Christmas dinner?",
        optionA: "Chicken",
        optionB: "Turkey",
        optionC: "Pork",
        optionD: "Goose",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 11,
        question: "What is the primary ingredient in the dish 'latkes', often enjoyed during Hanukkah?",
        optionA: "Zucchini",
        optionB: "Potatoes",
        optionC: "Sweet Potatoes",
        optionD: "Carrots",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 12,
        question: "In which country is the Christmas delicacy 'turrón' commonly enjoyed?",
        optionA: "Italy",
        optionB: "Spain",
        optionC: "Mexico",
        optionD: "Greece",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 13,
        question: "What is the main ingredient in the Italian dish 'Feast of Seven Fishes,' a traditional Christmas Eve dinner?",
        optionA: "Lobster",
        optionB: "Shrimp",
        optionC: "Cod",
        optionD: "Salmon",
        correctAnswer: "C",
        img: ""
    },

    {
        num: 14,
        question: "Which spice is a key component of the Scandinavian mulled wine known as 'glögg'?",
        optionA: "Cinnamon",
        optionB: "Cardamon",
        optionC: "Nutmeg",
        optionD: "Cloves",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 15,
        question: "What type of cake is typically served during the celebration of the Christian holiday Epiphany on January 6th?",
        optionA: "King Cake",
        optionB: "Buche de Noel",
        optionC: "Rosca de Reyes",
        optionD: "Pandoro",
        correctAnswer: "C",
        img: ""
    },

    {
        num: 16,
        question: "What is the traditional Christmas dessert in Mexico, often filled with nuts and dried fruits?",
        optionA: "Tamales",
        optionB: "Rosca de Reyes",
        optionC: "Buñuelos",
        optionD: "Fruitcake",
        correctAnswer: "C",
        img: ""
    },

    {
        num: 17,
        question: "Which fruit is a common ingredient in the Christmas dish 'cranberry sauce'?",
        optionA: "Blueberries",
        optionB: "Raspberries",
        optionC: "Strawberries",
        optionD: "Cranberries",
        correctAnswer: "D",
        img: ""
    },

    {
        num: 18,
        question: "What is the name of the German Christmas bread that is often filled with nuts and dried fruits?",
        optionA: "Pfeffernusse",
        optionB: "Stollen",
        optionC: "Lebkuchen",
        optionD: "Springerle",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 19,
        question: "In the United States, what type of pie is a popular dessert during the Christmas season?",
        optionA: "Pumpkin Pie",
        optionB: "Pecan Pie",
        optionC: "Apple Pie",
        optionD: "Cherry Pie",
        correctAnswer: "B",
        img: ""
    },

    {
        num: 20,
        question: "What is the name of the traditional Japanese Christmas cake made with sponge cake, whipped cream, and strawberries?",
        optionA: "Mochi",
        optionB: "Matcha Roll",
        optionC: "Castella",
        optionD: "Strawberry Shortcake",
        correctAnswer: "D",
        img: ""
    },
]



