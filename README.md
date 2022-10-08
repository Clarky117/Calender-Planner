# Calender-Planner

Have been given the HTML and CSS framework so I could code a simple daily planner app using JQuery and Moment.<br><br>

## Key Points

Whilst on the job at times we can be entrenched with busy moments. With the aid of a simple desktop app available on your personal work station, you as a user are able to plan out your 8 hour work day, hour by hour with an easy visual representation of what the current hour is, thus letting you know how you are tracking.<br><br>

## Skills Used

For this project we use 2 server side API's. These are libraries of code publicly available to us that we simply link the HTML document. In this case we are working in real world time, so we use a library called Moment, and this can only by used with Jquery so for this assignment they go hand in hand.<br><br>

Upon opening the app, in the header the user is presented with the current date and a clock updating second by second, these are both coded in via the Moment API.<br>
![DateAndTime](/assets/images/DateAndTime.png)<br>

Once the user scrolls down they are met with 8 timeblocks representing each hour of the work day, these are dynamically updated through Javascript to represent one of 3 classes/colours;<br>
- Grey - Past hours
- Red - Current hour
- Green - Future hours<br>
![TimeBlocks](/assets/images/TimeBlocks.png)<br>

These timeblocks were made dynamically through using a for loop in Javascript as to not repeat yourself in the HTML file, hence reducing the lines of code written, they are then styled by linking the CSS classes with logic via JQuery.<br><br>

When clicking on the text area you are then able to write yourself a to do note which then saves in local storage by then by clicking on the Save button, now it is available for you next time you load up the app.<br><br>

## Things i want to work on

I've found myself enjoying designing aesthetically pleasing websites whilst making the best user interface with my current skill set, so with having the starter code for this particular assignment i wanted to let what i enjoy take a back seat to focus on the knitty gritty of JQuery and Moment. If i were to do this assignment again i would create the time blocks with HTML as that is what i am most comfortable with, and then fill the contents using Javascript. However, i have followed Sam's lead on this one by taking the opposite approach and force myself to learn how to make the entire contents of the timeblocks with JQuery. I'd like to spend more time around that, and vanilla Javascript with the same concept to become a more versatile coder.<br><br>

## Links to Repository and Deployed Site

- Repository - https://github.com/Clarky117/Calender-Planner
- Live URL - https://clarky117.github.io/Calender-Planner/
