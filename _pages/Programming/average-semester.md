---
title: "The Average Semester"
tags:
    - Programming
    - Web-Dev
date: "2024-02-11"
thumbnail: "/assets/img/Programming/heatmap_thumbnail_dark.png"
---

<script>
    currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'default') {
        document.querySelector('.thumbnail').style.backgroundImage = "url('/assets/img/Programming/heatmap_thumbnail.png')";
    }
</script>

During my time at Texas A&M, I found the schedule calendar the school provided to not be very helpful.

![Default Fall 2022 Schedule](/assets/img/Programming/default_schedule.png)


The text was small and hard to read, the colors were muted and the horizontal format didn't work well for on my cell phone. So I made my own version using [paint.net](https://www.getpaint.net/features.html) which was I made to have a high resolution, dark themed, readable text, verticle to fit better on my phone, and also included my work schedule. I kept it favorited on my phone to use as a quick reference:

![Fall 2022 Schedule](/assets/img/Programming/fall_2022.png)


During my last semester at A&M, I had a simple question: "What if I made a heatmap of all my schedules"? I figured it would be a fun data visualization project, and I was able to do it in paint.net pretty easily. However, it doesn't work super well as a data visualization tool unless you can toggle layers on an off. 


So I programmed the same functionality in Javascript! Here it is:

<body>
    <div class="body-text">
        <div class="container">
            
            <div class="buttons" id="allButtons"></div>

            <div class="schedule">
                <img id="backgroundImage" class="background" src="/assets/img/Programming/average-semester/background.png"/>
            </div>

        </div>
    </div>

    <script src="/assets/js/average-semester-init.js"></script>
    <script src="/assets/js/average-semester-controls.js"></script>
    <script src="/assets/js/average-semester-render.js"></script>
</body>