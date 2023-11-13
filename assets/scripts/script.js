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
    resultsDisplay.classList.add('active');
    main.classList.remove('active');
}

// Returns player to first question in quiz
tryAgainButton.onclick = () => {
    main.classList.remove('active');
}

//Questions

let questions = [
    {
        question: "What is the main meat dish traditionally served on Christmas in the United States?",
        optionA: "Ham",
        optionB: "Turkey",
        optionC: "Roast Beef",
        optionD: "Lamb",
        img: ""
    },

    {
        question: "Which popular Christmas beverage is made from eggs, sugar, milk, and nutmeg?",
        optionA: "Hot Chocolate",
        optionB: "Eggnog",
        optionC: "Mulled Wine",
        optionD: "Apple Cider",
        img: ""
    },

    {
        question: "In which country did the tradition of gingerbread houses originate?",
        optionA: "Germany",
        optionB: "France",
        optionC: "Sweden",
        optionD: "Italy",
        img: ""
    },

    {
        question: "Which popular Christmas beverage is made from eggs, sugar, milk, and nutmeg?",
        optionA: "Hot Chocolate",
        optionB: "Eggnog",
        optionC: "Mulled Wine",
        optionD: "Apple Cider",
        img: ""
    },

    {
        question: "What is the name of the special cake traditionally eaten in Italy during the Christmas season?",
        optionA: "Stollen",
        optionB: "Panettone",
        optionC: "Yule Log",
        optionD: "Fruit Cake",
        img: ""
    },

    {
        question: "What is a Christmas pudding also known as in the UK?",
        optionA: "Figgy Pudding",
        optionB: "Plum Pudding",
        optionC: "Mince Pie",
        optionD: "Christmas Cake",
        img: ""
    },

    {
        question: "What type of nuts are commonly associated with Christmas and are often roasted and enjoyed during the holiday season?",
        optionA: "Walnuts",
        optionB: "Almonds",
        optionC: "Pecans",
        optionD: "Chestnuts",
        img: ""
    },

    {
        question: "What is the main ingredient in the traditional Swedish Christmas dish 'Janssons frestelse'?",
        optionA: "Salmon",
        optionB: "Herring",
        optionC: "Potatoes",
        optionD: "Meatballs",
        img: ""
    },

    {
        question: "Which spice is a key ingredient in the classic gingerbread cookie?",
        optionA: "Cinnamon",
        optionB: "Nutmeg",
        optionC: "Cloves",
        optionD: "Ginger",
        img: ""
    },

    {
        question: "What is the name of the French Christmas dessert that consists of puff pastry layers filled with almond cream?",
        optionA: "Yule Log",
        optionB: "Bûche de Noël",
        optionC: "Galette des Rois",
        optionD: "Pain d'épices",
        img: ""
    },

    {
        question: "What is the traditional meat for a British Christmas dinner?",
        optionA: "Chicken",
        optionB: "Turkey",
        optionC: "Pork",
        optionD: "Goose",
        img: ""
    },

    {
        question: "What is the primary ingredient in the dish 'latkes', often enjoyed during Hanukkah?",
        optionA: "Zucchini",
        optionB: "Potatoes",
        optionC: "Sweet Potatoes",
        optionD: "Carrots",
        img: ""
    },

    {
        question: "In which country is the Christmas delicacy 'turrón' commonly enjoyed?",
        optionA: "Italy",
        optionB: "Spain",
        optionC: "Mexico",
        optionD: "Greece",
        img: ""
    },

    {
        question: "What is the main ingredient in the Italian dish 'Feast of Seven Fishes,' a traditional Christmas Eve dinner?",
        optionA: "Lobster",
        optionB: "Shrimp",
        optionC: "Cod",
        optionD: "Salmon",
        img: ""
    },

    {
        question: "Which spice is a key component of the Scandinavian mulled wine known as 'glögg'?",
        optionA: "Cinnamon",
        optionB: "Cardamon",
        optionC: "Nutmeg",
        optionD: "Cloves",
        img: ""
    },

    {
        question: "What type of cake is typically served during the celebration of the Christian holiday Epiphany on January 6th?",
        optionA: "King Cake",
        optionB: "Buche de Noel",
        optionC: "Rosca de Reyes",
        optionD: "Pandoro",
        img: ""
    },

    {
        question: "Which fruit is a common ingredient in the Christmas dish 'cranberry sauce'?",
        optionA: "Blueberries",
        optionB: "Raspberries",
        optionC: "Strawberries",
        optionD: "Cranberries",
        img: ""
    },

    {
        question: "What is the name of the German Christmas bread that is often filled with nuts and dried fruits?",
        optionA: "Pfeffernusse",
        optionB: "Stollen",
        optionC: "Lebkuchen",
        optionD: "Springerle",
        img: ""
    },

    {
        question: "In the United States, what type of pie is a popular dessert during the Christmas season?",
        optionA: "Pumpkin Pie",
        optionB: "Pecan Pie",
        optionC: "Apple Pie",
        optionD: "Cherry Pie",
        img: ""
    },

    {
        question: "What is the name of the traditional Japanese Christmas cake made with sponge cake, whipped cream, and strawberries?",
        optionA: "Mochi",
        optionB: "Matcha Roll",
        optionC: "Castella",
        optionD: "Strawberry Shortcake",
        img: ""
    },
]



