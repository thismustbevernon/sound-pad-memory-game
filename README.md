# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **OWENGA VERNON OTIENO**

Time spent: **7** hours spent in total.

Link to project: https://glitch.com/~sound-pad-memory-game-v-owenga

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Clock countdown for each clue.
- [ ] High score feature.
- [ ] Volume slider.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

                **Winning the mistakes**
![](https://i.imgur.com/bKDx4Fj.gif)

                **Losing to time**
![](https://i.imgur.com/9LdzsX1.gif)

                **Winning the game**
![](https://i.imgur.com/oWMOoyR.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I read the www.w3schools.com documentation on CSS styling for different elements including buttons and heading tags. I frequently referred to www.stackoverflow.com for assistance with my Javascript code which came in handy when it comes to adding the timer functions. I also acquired a custom font from www.cdnfonts.com.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The greatest challenge I faced during implementation of additional features was writing the code for custom sounds. I had trouble connecting the button clicks to the added sounds. I tried specifying the absolute path for each file, which without, the game doesn't have any sound, yet still didn't work.
Finally, I resorted to using the frequencies specified in basic requrements with a little tweak to make them higher.
Another challenge was finding bugs while working on the game's primary logic. Some of the functions didn't work as planned when I was writing the script for the game's core logic. For example, the mistake function wasn't subtracting lives, therefore I had to break it down to fix it.
I also found trouble following through the nested if functions used in the original code belt for the game logic. I overcame this by adding multiple comments for every step thereby providing very good documentation for debugging.
Declaring the data type of a variable has almost become second nature to me. Another stumbling block was being aware of useful built-in features. It would have been more difficult to figure out the necessary methods without the advice provided in the tutorial (for example, to use setInterval and clearInterval for the timer).

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I am particularly curious about how the backend of a web application works because I wanted to add a login feature for different players and that would require additional things like a database. It was very interesting developing this user end web application. However, I am specifically curious about how far I can go. To call a spade a spade, I recently came up with a custom web-scraper written in Python. It basically outputs stats about instagram and youtube posts from pasted URLs. Assuming I only want to show the output without storing it in a database, could I implement this web-scraper with Javascript and make it run on the user's end? Also is it more important to do web frameworks than learn the actual languages?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Given more time, I'd add user-selectable difficulty levels, the ability to play the game for as long as the user wishes (the user can determine the pattern's length, which might be unlimited). I would also like to add a scoreboard that shows the length of the longest pattern the user has learned.
Another interesting feature would be to include a volume slider to control the volume of the sounds from within the game itself. This would greatly sharpen my javascript skills.
To be able to play the game on a mobile device, I would tweak the html and CSS to make it more responsive. Also to make it more interesting, I would add a feature where the computer generates a whole pattern of beats then the player tries to replicate the entire pattern.
Some extra features like backgound images and button animations would be amazing to add.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://northwestern.zoom.us/rec/share/wA1U2XZdtNnUMTHtNHtUcD8Fup5WpmJUPIo_z7p9EIra5tWmnbW5K5UakpmjMf1n.fZ54on_t7fuM8gfi)


## License

    Copyright OWENGA VERNON OTIENO

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.