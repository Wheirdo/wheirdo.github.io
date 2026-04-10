---
title: "Arbitrarily Oriented Minimum Bounding Box"
tags:
    - Programming
date: "2023-05-01"
thumbnail: "/assets/img/thumbnail/bounding-box_thumbnail.jpg"
---


A Bounding Box is the smallest possible box that fully encompasses an N-Dimensional object. Specifically, it is the minimum rectangular volume for any arbitrary 3D shape, otherwise known as minimum-volume arbitrarily-oriented bounding box of a three-dimensional object. This project took inspiration  Joseph O'Rourke's paper [Finding Minimal Enclosing Boxes](https://www.science.smith.edu/~jorourke/Papers/MinVolBox.pdf), who details an algorithm to find such a bounding box in quadratic time. 

The algorithm used by O'Rourke is called “rotating calipers”, and it is a type of brute force algorithm used, in this case, to loop around the x-axis and the z-axis to find the closest points. The original paper used this in conjunction with a Gaussian Sphere, which my code attempts to emulate as well. This was my attempt at adapting his paper into C++, using OpenGL and GLSL for shading. 

This project firstly let me learn more about 3D graphics, where I learned about shaders, the graphics pipeline, and all the interesting linear algebra that goes along with that. I also have an interest in Bounding Boxes, especially with how they apply to 3D printing; this project let me learn more about how they work, and the interesting processes that go about creating and optimizing them. 

I go into more detail about my process and the results in the [GitHub Repo](https://github.com/Wheirdo/AOMBB), and you can see the results of the project in the video below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/i_IG2ffdVrI?si=-yuYm31LxWvfHjhR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>