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

### Testing User Stories from User Experience (UX) Section <a name="testing-user-stories"></a>

* __User Goals__ <a name="user-goals"></a>

| **User Goal**                                                                                         | **Goal met?**        | **Image**                                                          |
|-------------------------------------------------------------------------------------------------------|----------------------|--------------------------------------------------------------------|
| To quickly identify the purpose of the site as a Christmas Food Quiz.                                 | Yes                  | ![Home screen entry point](assets/ReadMe%20images/home_screen.png) |
| To easily access rules on how to play the game and easily exit the rules without disrupting the game. | Yes                  | ![Rules popup](assets/ReadMe%20images/rules_popup.png)             |
| To exit the game at any point and, when finished, to be able to try again.                            | Yes                  | ![Navigation options](assets/ReadMe%20images/navigation.png)       |
| To quickly get feedback on how I am performing (through the scoring system).                          | Yes                  | ![Scoring counter](assets/ReadMe%20images/scoring.png)             |
| If I get a wrong answer, to be able to see what is the correct answer.                                | Yes                  | ![Incorrect option](assets/ReadMe%20images/incorrect_option.png)   |
| To see my final score and get feedback on whether this is a good score.                               | Yes                  | ![Results screen (pass)](assets/ReadMe%20images/results_pass.png)  |
| To have fun playing the game and feel a positive Christmas spirit having played!                      | Dependent on player! |                                                                    |


## Browser Testing <a name="browser-testing"></a>
The website was tested by myself on a range of modern browsers including Chrome, Edge, Brave and Firefox. Load times were quick and no specific issues were encountered during this phase of testing.

## Compatability and Responsiveness Testing <a name="compatability-responsiveness-testing"></a>
The website was tested on various monitors including a 27 inch monitor (3840 x 2160), a laptop (1920 x 1080), an iPhone 13 Pro (390 x 844) and an iPad (1536 x 2048). All media queries coded in CSS executed correctly when required.

I also tested the website at different resolutions throughout the build process on Google Chrome Dev Tools. The following simulated devices were tested on Dev Tools - Galaxy Fold (280 x 653), iPhone 12 Pro (390 x 844), iPad Air (820 x 1180). In Dev Tools, I also tested the devices at the following common resolutions - 1280 x 720 (HD), 1920 X 1080 (FHD), 2560 X 1440 (QHD) and 3840 X 2160 (4K).

To double check the responsiveness and use an alternative to Dev Tools, I used the [Responsive Design Checker](https://www.responsivedesignchecker.com/) site to test all of the above resolutions.

## Code Validation Testing <a name="code-validation-testing"></a>
The website was run through both the [W3C HTML Validator](https://validator.w3.org/) and the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

### W3C HTML Validator Results <a name="w3c-html-results"></a>
Further details on all bugs can be found in the Bugs section.

[Home Page](https://nickcmoore.github.io/beeston-castle/index.html) - following on from this testing, the home page had 9 errors and 3 warnings.

[History](https://nickcmoore.github.io/beeston-castle/history.html) - following on from this testing, the History page had 1 error.

[Visit](https://nickcmoore.github.io/beeston-castle/visit.html) - following on from this testing, the Visit page had 1 error.

[Contact](https://nickcmoore.github.io/beeston-castle/contact.html) - following on from this testing, the Contact page had 1 error.

### W3C CSS Validator Results <a name="w3c-css-results"></a>
No errors were found using this CSS valildator.

![W3C CSS Validator](media/css.png)

## Bugs <a name="known-bugs"></a>

### Resolved <a name="resolved-bugs"></a>

During the build phase of the project, I resolved a number of bugs encountered with the site. These resolved bugs were recorded in GitHub Commit messages.

I performed HTML Validation testing on the site and found the following errors with the home page.

![Beeston Castle Home Page HTML Validator testing](media/w3c-html.png)

* Error: Stray end tag i. From line 24, column 27; to line 24, column 30 - removed
* Error: End tag section seen, but there were open elements. From line 62, column 5; to line 62, column 14 - added closing </div> tag
* Error: Unclosed element div. From line 57, column 9; to line 57, column 34 - linked to bug 2 (added </div> tag)
* Error: Duplicate ID hr-divider. From line 103, column 21; to line 103, column 40 - changed from ID to a Class
* Error: Bad value tel:01234 567890 for attribute href on element a: Illegal character in scheme data: space is not allowed. From line 107, column 31; to line 107, column 57 - added spacing to the a element. 
* Error: Attribute input not allowed on element button at this point. From line 132, column 29; to line 133, column 47 - removed 'input' wording from submit section.
* Error: Duplicate ID notice-copy. From line 140, column 33; to line 140, column 55 - changed these from ID to classes.
* Error: End tag section seen, but there were open elements. From line 145, column 13; to line 145, column 22 - added missing </div> to code.
* Error: Unclosed element div. From line 118, column 13; to line 119, column 56 - linked to the above, Added missing </div> tag.

The same 1 remaining error occurred across all of the other site pages and was as follows:

* Error: Stray end tag i. - this tag was removed from the HTML Header in the remaining pages.

Upon resolving these errors in the W3C Validators, no further errors remain.

### Unresolved <a name="resolved-bugs"></a>

* Some CSS code which has been formatted correctly in VS Code, the alignment of some CSS properties are unintentionally indented when it appears in GitHub. Spoke with mentor about this and we were unable to resolve the bug. (UPDATE - VSCode formatting settings were incorrectly configured. Amended these and now looks fine on GitHub)
* The Book Now CTA button on the home page does not work on smaller mobiles. The same is the case for the Facebook link in the footer. Mentor tried and was unable to resolve this. (UPDATE - now resolved by increasing width of button - clickable)
* Email address box in the Subscribe form goes beyond the container edge in the smallest mobile resolutions.
* Order of the navigation menu links to the other pages switches around at mobile resolutions.
* Main banner images do not display fully at 3840 X 2160 (4K) and above.

## Further Testing <a name="further-testing"></a>

To further validate the website from a performance, accessibility, best practices and SEO perspective, I ran the site through the Lighthouse testing suite in Google Chrome Dev Tools.

The results were as follows:

__Desktop__

![Lighthouse](media/lighthouse.png)

__Mobile__

![Lighthouse mobile](media/lighthouse-mobile.png)

Click [here](https://github.com/NickCMoore/beeston-castle/blob/main/TESTING.md) to return to the ReadMe file.


[def]: media/lighthouse.png