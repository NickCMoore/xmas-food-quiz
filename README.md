# Christmas Food Quiz

This website is aimed at users who want to play a fun, interactive multiple choice quiz during the Christmas period. The aim of the website is to get users into the Christmas spirit but testing their knowledge of various Christmas foods from around the world.

The purpose of the project is to demonstrate knowledge of how to produce a user friendly, responsive and interactive quiz using predominantly JavaScript, but supported with HTML and CSS.

[Link to live website](https://nickcmoore.github.io/xmas-food-quiz/)

![Site responsiveness](assets/ReadMe%20images/responsive.png)

## Contents

* [**User Experience (UX)**](<#user-experience-ux>)
    * [User Stories](<#user-stories>)
* [**Design**](<#design>)
    * [Wireframes](<#wireframes>)
    * [Colour Scheme](<#colour-scheme>)
    * [Typography](<#typography>)
* [**Technologies Used**](<#technologies-used>)
* [**Testing**](<#testing>)
* [**Current Features**](<#current-features>)
* [**Future Features**](<#future-features>)
* [**Deployment**](<#deployment>)
    * [Deploying](<#deploying>)
    * [Forking](<#forking>)
    * [Cloning](<#cloning>)
* [**Credits**](<#credits>)
    * [Code](<#code>)
    * [Content](<#content>)
    * [Media](<#media>)
    * [Design](<#design-credits>)
    * [Acknowledgements](<#acknowledgements>)

## User Experience (UX) <a name="user-experience-ux"></a>

### User Stories <a name="user-stories"></a>

- To quickly identify the purpose of the site as a Christmas Food Quiz.
- To easily access rules on how to play the game and easily exit the rules without disrupting the game.
- To exit the game at any point and, when finished, to be able to try again.
- To quickly get feedback on how I am performing (through the scoring system).
- If I get a wrong answer, to be able to see what is the correct answer.
- To see my final score and get feedback on whether this is a good score.
- To have fun playing the game and feel a positive Christmas spirit having played!

## Design <a name="design"></a>

**Wireframes** <a name="wireframes"></a>

I used [Balsamiq](https://balsamiq.com/) to create wireframes for the various pages in the site. The quiz was planned and eventually designed with mobile first in mind with a layout that wouldn't require any scrolling or complex navigation. The wireframes reflect a home page, a set of rules, the questions and then a results screen which is dependent on the user's final score.

### Mobile

*Home screen*

![alt text](assets/ReadMe%20images/Home_page%20(mobile).png)

*Rules screen*

![alt text](assets/ReadMe%20images/rules%20(mobile).png)

*Questions screen*

![alt text](assets/ReadMe%20images/questions%20(mobile).png)

*Pass result screen*

![alt text](assets/ReadMe%20images/pass_result%20(mobile).png)

*Fail result screen*

![alt text](assets/ReadMe%20images/fail_result%20(mobile).png)

### Desktop

*Home screen*

![alt text](assets/ReadMe%20images/Home_page%20(desktop).png)

*Rules screen*

![alt text](assets/ReadMe%20images/rules%20(desktop).png)

*Questions screen*

![alt text](assets/ReadMe%20images/questions%20(desktop).png)

*Pass result screen*

![alt text](assets/ReadMe%20images/pass_result%20(desktop).png)

*Fail result screen*

![alt text](assets/ReadMe%20images/fail_result%20(desktop).png)

**Colour Scheme** <a name="colour-scheme"></a>

By using the [Coolors](https://coolors.co/08415c-cc2936-6b818c-f1bf98) website, I was able to select a colour palette that would be suitable for all users and visually appealing. The scheme contains colours which are traditionally associated with Christmas, particularly #08415C and #CC2936. #6B818C was useful for providing user feedback on button hovers. These colours work well together to immerse the user in the game, strengthening that association with Christmas.

![Colour Scheme](assets/ReadMe%20images/colour_scheme.png)

**Typography** <a name="typography"></a>

Google Fonts was used to select a blend of fonts which would compliment each other and be accessible for all. Caveat was used for all headers and content text. This font was chosen as it provides a classical, 'Christmassy' feeling to help immerse the reader in the quiz.

![Caveat font](assets/ReadMe%20images/caveat.png)

## Technologies Used <a name="technologies-used"></a>

* [HTML5](https://en.wikipedia.org/wiki/HTML5) - HTML5 used to generate the site structure.

* [CSS3](https://en.wikipedia.org/wiki/CSS) - CSS3 used to implement styling for the quiz.

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - JavaScript used for game functions and logic.

* [Github](https://github.com/) - GitHub was used to store, manage, track and control code changes for the quiz.

* [Gitpod](https://www.gitpod.io/) - Gitpod was used for website deployment.

* [Balsamiq](https://balsamiq.com/) - Balsamiq was used to generate initial wireframes for the project.

* [VSCode](https://code.visualstudio.com/) - VSCode was used to build and edit the source-code for the quiz.

## Testing <a name="testing"></a>

For a detailed breakdown of testing, please see [Testing](TESTING.md) file.

## Current Features <a name="current-features"></a>

### Home Screen

On loading the quiz, the user is presented with a full page background of Christmas foods and items. This is designed to immerse the user immediately in the feel of the game. A short welcome message is also present with a start button that enables the user to immediately navigate to the quiz (once they have seen the rules). There are no other distracting buttons or items on the screen in order to make the user journey as seamless as possible.

![Home screen entry point](assets/ReadMe%20images/home_screen.png)

### Rules Screen

Upon clicking the previous 'start quiz' button, the user is taken to a rules popup. This is designed to quickly familiarise the user with the mechanics of the game and not be confused once the game commences. The background is blurred out to provide further focus for the user. At this point, buttons are available to either start the quiz or return to the home screen if necessary.

![Rules popup](assets/ReadMe%20images/rules_popup.png)

### Question Screen

Forming the core of the quiz, the user is immediately presented with a question and four clickable multiple choice option answers, a relevant Christmas food image, a countdown timer, a scoring counter and navigation options.

![Question area](assets/ReadMe%20images/question_popup.png)

**Questions**

The user is shown one question and the question number from an array of questions. Above the question, the question number updates when the user moves on to the next question.

![Questions](assets/ReadMe%20images/question_and_number.png)

**Countdown Timer**

To provide some fun pressure when answering the questions, the user is given 20 seconds in the form of a countdown timer to answer the questions.

![Countdown timer](assets/ReadMe%20images/countdown_timer.png)

Once the clock reaches zero and if the user hasn't selected any options, the options will be disabled and theu will be given a score of zero. The user is still able to exit the quiz or go on to the next question after this if they want.

![Greyed out options](assets/ReadMe%20images/out_of_time.png)

**Multiple choice options**

As mentioned above, if the user doesn't select an answer within the timeframe, the four answer options are greyed out.
If they select a correct answer, this option turns green and they can move forwards:

![Correct option](assets/ReadMe%20images/correct_option.png)

If the user select the wrong option, this selection turns red and the correct answer is shown in green. Once this happens, the user is able to select next to move forwards.

![Incorrect option](assets/ReadMe%20images/incorrect_option.png)

**Scoring system**

To provide the user with instant feedback on how they are getting on, there is a scoring system which is displayed and updated for every question. If the user gets the answer correct, they are awarded 10 points, which is which displayed at the bottom of the question area.

![Scoring counter](assets/ReadMe%20images/scoring.png)

**Navigation**

The user is able to click exit upon entering the question screen, but they are unable to click next until they select an answer option or the timer runs out.

![Navigation options](assets/ReadMe%20images/navigation.png)

### Results Screen

**Fail result**

If the user score less than 100 points (10 correct questions out of 20), they will be presented with the fail screen. This is intended to be light hearted and presents the user with a consoling message and also a picture of some sad people around the Christmas table!

![Results screen (fail)](assets/ReadMe%20images/results_fail.png)

**Pass result**

If the user score less more than 100 points, (11 or more questions correct out of 20), they will be presented with a pass screen. Once again, this is intended to be fun and the user is congratulated on their score and shown a picture of some VERY happy people around the Christmas table!

![Results screen (pass)](assets/ReadMe%20images/results_pass.png)

**Results screen navigation**

Once the user is presented with either results screen, they may immediately exit the quiz and return to the home screen or try again which will take them to the start of the quiz (after the rules screen). The intention of this is to give the user choice and the ability to dive back in to the quiz right away if they want.

![Results screen navigation](assets/ReadMe%20images/results_nav.png)

## Future Features <a name="future-features"></a>

- Random ordering of the questions to provide more variety on repeated playthroughs.
- Implementation of a leaderboard so users can see how they compare to their peers.
- Use of music to further immerse the user into the Christmas Quiz.

## Deployment <a name="deployment"></a>

### Deploying The Project <a name="deploying"></a>

The site was deployed to GitHub pages. The steps to deploy a site are as follows:

* In the GitHub repository, navigate to the Settings tab.
* Once in Settings, navigate to the Pages tab down the side menu.
* Under Source, select the branch to master, then click save.
* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate a successful deployment.
* The GitHub repository live link is here - [Christmas Food Quiz](https://nickcmoore.github.io/xmas-food-quiz/)

### Forking The Repository Using GitHub <a name="forking"></a>

A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and changes can be made to the copy without affecting the original repository. Take the following steps to fork the repository:

* Log in to **GitHub** and locate the repository.
* On the right hand side of the page inline with the repository name is a button called **'Fork'**, click on the button to create a copy of the original repository in your GitHub Account.

### Creating A Local Clone Of The Project <a name="cloning"></a>

The method from cloning a project from GitHub is below:

* Under the repository’s name, click on the **Code** tab.
* In the **Clone with HTTPS** section, click on the clipboard icon to copy the given URL.
* In your IDE of choice, open **Git Bash**.
* Change the current working directory to the location where you want the cloned directory to be made.
* Type **git clone**, and then paste the URL copied from GitHub.
* Press **Enter** and the local clone will be created.

## Credits <a name="credits"></a>

### Code <a name="code"></a>

* Code for displaying the quiz questions, keeping score and displaying the quiz results was adapted from and article by Yaphi Berhanu amd James Hibbard on [SitePoint](https://www.sitepoint.com/simple-javascript-quiz/)
* Code on how to create a JavaScript timer was adapted from [Stack Overflow](https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript)

### Content <a name="content"></a>

* Content for the quiz questions was adapted from the [Best Quiz Questions](https://bestquizquestions.com/christmas-food-quiz/) website.
* Tutorials on how to create a quiz game with JavaScript were found on Youtube, such as [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) and [Coding Nepal](https://www.youtube.com/watch?v=pQr4O1OITJo).
* Information on hiding and showin divs was adapted from [W3Schools](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp).
* The favicon was created courtesy of https://favicon.io/
* Guide on how to insert tables into markdown files used from [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables#)

### Design <a name="design-credits"></a>

* [Balsamiq](https://balsamiq.com/) - was used to generate the wireframes for the project.
* The colour palette for the site was chosen with accessibility in mind from the [Coolors]() site.
* The following fonts used throughout the site and were imported from Google Fonts - Caveat.

### Media <a name="media"></a>

* Photos used were either from the [Pexels](https://www.pexels.com/) website.
* All of the question images were compressed using [Convertio](https://convertio.co/)

### Acknowledgments <a name="acknowledgements"></a>

* My mentor, Jack Wachira, for his continious helpful feedback. I would like to thank the Slack community and all at the Code Institute for their help and support. Thanks also go to my friends and family for providing feedback and help with the user testing cases.
