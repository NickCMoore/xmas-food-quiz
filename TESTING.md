# __Testing__ #

## Table of Contents

* [**User Testing**](<#user-testing>)
    * [Testing User Stories](<#testing-user-stories>)
* [**Browser Testing**](<#browser-testing>)
    * [Testing User Stories](<#testing-user-stories>)
         * [User Goals](<#user-goals>)
* [**Compatability and Responsiveness Testing**](<#compatability-responsiveness-testing>)
* [**Code Validation Testing**](<#code-validation-testing>)
    * [W3C HTML Validator Results](<#w3c-html-results>)
    * [W3C CSS Validator Results](<#w3c-css-results>)
* [**Bugs**](<#bugs>)
    * [Resolved](<#resolved-bugs>)
    * [Unresolved](<#unresolved-bugs>)
* [**Further Testing**](<#known-bugs>)

## User Testing  <a name="user-testing"></a>
I sent a deployed link to the quiz to many family members and friends who provide constructive feedback and also simulated the user goals (listed at the beginning of the Readme document). I encouraged them to think from the perspective of a potential user who might visit the site. This testing gave me an opportunity to see how the website would perform on a range of devices. No major display and navigation issues were encountered.

### Testing User Stories from User Experience (UX) Section of [ReadMe](README.md) <a name="testing-user-stories"></a>

* __User Goals__ <a name="user-goals"></a>

| **User Goal**                                                                                         | **Goal met?**        | **Image**                                                          |
|-------------------------------------------------------------------------------------------------------|----------------------|--------------------------------------------------------------------|
| To quickly identify the purpose of the site as a Christmas Food Quiz.                                 | Yes                  | ![Home screen entry point](assets/ReadMe%20images/home_screen.png) |
| To easily access rules on how to play the game and easily exit the rules without disrupting the game. | Yes                  | ![Rules popup](assets/ReadMe%20images/rules_popup.png)             |
| To exit the game at any point and, when finished, to be able to try again.                            | Yes                  | ![Navigation options](assets/ReadMe%20images/navigation.png)       |
| To quickly get feedback on how I am performing (through the scoring system).                          | Yes                  | ![Scoring counter](assets/ReadMe%20images/scoring.png)             |
| If I get a wrong answer, to be able to see what is the correct answer.                                | Yes                  | ![Incorrect option](assets/ReadMe%20images/incorrect_option.png)   |
| To see my final score and get feedback on whether this is a good score.                               | Yes                  | ![Results screen (pass)](assets/ReadMe%20images/results_pass.png)  |

## Browser Testing <a name="browser-testing"></a>
The website was tested by myself on a range of modern browsers including Chrome, Edge and Brave. Load times were generally quick and no specific issues were encountered during this phase of testing.

- Chrome testing
![Chrome test](assets/Testing%20images/chrome_testing.png)

- Edge testing
![Edge test](assets/Testing%20images/edge_testing.png)

- Brave testing
![Brave test](assets/Testing%20images/brave_testing.png)

## Compatability and Responsiveness Testing <a name="compatability-responsiveness-testing"></a>
The website was tested on various monitors including a 27 inch monitor (3840 x 2160), a laptop (1920 x 1080), an iPhone 13 Pro (390 x 844) and an iPad (1536 x 2048). All media queries coded in CSS executed correctly when required.

I also tested the quiz at different resolutions throughout the build process on Google Chrome Dev Tools. The following simulated devices were tested on Dev Tools - Galaxy Fold (280 x 653), iPhone 12 Pro (390 x 844), iPad Air (820 x 1180). In Dev Tools, I also tested the devices at the following common resolutions - 1280 x 720 (HD), 1920 X 1080 (FHD), 2560 X 1440 (QHD) and 3840 X 2160 (4K).

To double check the responsiveness and use an alternative to Dev Tools, I used the [Responsive Design Checker](https://www.responsivedesignchecker.com/) site to test all of the above resolutions.

## Code Validation Testing <a name="code-validation-testing"></a>
The website was run through both the [W3C HTML Validator](https://validator.w3.org/) and the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

### W3C HTML Validator Results <a name="w3c-html-results"></a>
Further details on all bugs can be found in the Bugs section.

[Home Page](https://nickcmoore.github.io/xmas-food-quiz/) - following on from this testing, the home page had 1 error and no warnings.

![W3C HTML Validator](assets/Testing%20images/W3C_HTML.png)

This error was easily rectified through the removal of the stray </p> tag!

### W3C CSS Validator Results <a name="w3c-css-results"></a>
No errors were found using this CSS valildator.

![W3C CSS Validator](assets/Testing%20images/W3C_CSS.png)

### JSHint JavaScript Linter Results <a name="linter-results"></a>

![JavaScript testing main page - JSHint](assets/Testing%20images/jshint_main.png)

![JavaScript testing report - JSHint](assets/Testing%20images/jshint_report.png)

## Bugs <a name="known-bugs"></a>

### Resolved <a name="resolved-bugs"></a>

During the build phase of the project, I resolved a number of bugs encountered with the quiz. These resolved bugs were recorded in GitHub Commit messages.

I performed HTML Validation testing on the site and found the following errors with the home page.

![HTML Validator testing](assets/Testing%20images/W3C_HTML.png)

* Error: No p element in scope but a p end tag seen. There was a stray </p> tag which was removed.

Upon resolving this error in the W3C Validator, no further errors remain.

### Unresolved <a name="resolved-bugs"></a>

* 

## Further Testing <a name="further-testing"></a>

To further validate the website from a performance, accessibility, best practices and SEO perspective, I ran the site through the Lighthouse testing suite in Google Chrome Dev Tools.

The results were as follows:

__Desktop__

![Lighthouse]()

__Mobile__

![Lighthouse mobile]()

[def]: media/lighthouse.png

Click [here](README.md) to return to the ReadMe file.