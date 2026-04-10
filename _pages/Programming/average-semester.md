---
title: "The Average Semester"
tags:
    - Programming
    - Web-Dev
date: "2024-02-11"
thumbnail: "/assets/img/Programming/heatmap_thumbnail_dark.png"
---
# Background

To register for classes at Texas A&M, you had to use their schedule builder program, which looked like this:

![Default Fall 2022 Schedule](/assets/img/Programming/default_schedule.png)
*My Junior Fall schedule, provided by Texas A&M*

While this works well for planning out classes, I found it unhelpful as a reference tool. Early in the semester, I would need to check my schedule often to figure out where and when my next class was. On this schedule though, the text was small and hard to read, the colors were muted and the horizontal format didn't work well for my phone. So every semester I would made my own version using [paint.net](https://www.getpaint.net/features.html) which was I made to have a higher resolution, more readable text, and was vertical to fit better on my phone, while also included my work schedule.

![Fall 2022 Schedule](/assets/img/Programming/fall_2022.png)
*My Junior Fall schedule, re-created in paint.net*

While I was taking a class on Data Visualization, which focused on using programs like Javascript and D3 to make data more interactive and digestable, I thought it would be an interesting idea to make a heatmap of all eight of my schedules, and see what insights I could gain from it. 

# Insights

* During 6 of my 8 semesters, I had classes between 9:10 - 10:00 on Wednesdays, and 11:10 - 12:25 on Tuesdays and Thursdays.
* During 5 of my 8 semesters, I had classes at 8 am.
* During 3 semesters I had no classes on Fridays, and during 3 semesters I only had one class on Fridays.
* About 20% of my classes were Virtual, mostly due to Covid.
* About 30% of my classes were in the [Zachry Engineering Building](https://zachry.tamu.edu/).
    * Of those classes, about 40% (7 different classes) were all in the same room, ZACH 350. 
* About 15% of my classes were in buildings I only ever took one class out of. 

# The Average Semester

The code for The Average Semester can be found [here on Github](https://github.com/Wheirdo/The-Average-Semester), where you can read more about the implementation. Of note, small updates were made to the code to fit better within this website, like switching the checkboxes to buttons, or support for different rendering for Light Mode vs Dark Mode. You can find the Javascript code for this website's version on this website's [Github Repo](https://github.com/Wheirdo/wheirdo.github.io), under [/assets/js](https://github.com/Wheirdo/wheirdo.github.io/tree/main/assets/js).

<body>
    <div class="body-text">
        <div class="container">
            
            <div class="top-buttons" id="TopRow"></div>
            <div class="bottom-buttons" id="BottomRow"></div>

            <div class="schedule">
                <img id="backgroundImage" class="background" src="/assets/img/Programming/average-semester/background.png"/>
            </div>

        </div>
    </div>

    <script src="/assets/js/average-semester-init.js"></script>
    <script src="/assets/js/average-semester-controls.js"></script>
    <script src="/assets/js/average-semester-render.js"></script>
    <script>
    currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'default') {
        document.querySelector('.thumbnail').style.backgroundImage = "url('/assets/img/Programming/heatmap_thumbnail.png')";
    }
    </script>
</body>