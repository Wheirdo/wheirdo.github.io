---
title: "Laser-Cut 3D-Benchy"
tags:
    - 3D Modeling
    - Laser Cut
date: "2024-03-19"
thumbnail: "/assets/img/thumbnail/lasercut_benchy.jpg"
---

# What's a Benchy?

The [3D Benchy](https://www.3dbenchy.com/) is a benchmark test used to test 3D Printers. It has many design features that are challenging to print, which makes it an excellent (and very cute) first print and testing tool for anyone with a 3D printer.

The Benchy is an iconic piece of 3D Printer culture. It has been turned into a [Battle Ship](https://www.printables.com/model/1202320-battle-ship-benchy-with-rotating-turret), a [full chess set](https://www.printables.com/model/1201664-iconic-benchy-chess-game), people compete to [speedrun printing it as fast as possible](https://www.youtube.com/watch?v=rbLPCK5fKhc), and someone has even 3D printed one large enough to [ride as an actual boat](https://www.youtube.com/watch?v=ilIubT7ands).

During my time at university, I wanted to add to that legacy and create my own Benchy. What better way to idolize the legacy of this 3D Printed benchmark test would be then to not even 3D print it?

# V1 - Vertically Sliced

This was my first attempt at that goal. It was created by horizontally cutting horizontal slices of the boat each a quarter of an inch thick, and stacking them on top of each other.

![Laser-Cut Benchy V1](/assets/img/3D-Modeling/benchyproject_V1.jpg)

The result does vaguely look like a boot, but there are clearly many improvements to be made.


# V2 - Hand Sliced

My plan for V2 was to slice the hull of the boat vertically in both X and Y directions, and interlock the pieces together. Then, I would manually create the pieces for the doorframe, chimney, and cargo box. Instead of trying to trace slices of the official model for hours, I figured it would be less tedious to recreate the entire model in CAD, then use that model to automatically create traces using the project tool.

So I started this version by recreating the Benchy in Autodesk Inventor, using the STL’s dimensions as reference to keep it as close as possible. Below, you can see a comparison between the official model and mine:

<div class="side-by-side">
    <img
    class="small-img"
    src="/assets/img/3D-Modeling/benchyproject_mybenchy.png"
    alt="Benchy, recreated by me">
    <img
    class="small-img"
    src="/assets/img/3D-Modeling/benchyproject_benchystl.png"
    alt="Benchy, official STL">
</div>

My model is on the left. It isn’t perfect, but it is close enough for this project. 

The reason I went through this process is because CAD softwares don't work well with files that are meshes, and the Benchy could only be downloaded as an STL file, which is a mesh. However, in February of 2025, the 3D Benchy was moved into the public domain, and with it official STEP files were released. The process of recreating the model took me about two weeks of work in 2022, which I wouldn't have had to do if I had started this project three years later.


With my STEP file version created, I used it to create 36 different 3D models, each a single slice of the boat. With those models, I created an assembly of half of the boat as a proof of concept. The picture shown below is that model, V2.

![Laser-Cut Benchy V2 Half](/assets/img/3D-Modeling/benchyproject_V2.png)


## V2.5

V2 was a successful proof of concept, but the next problem is that all the pieces are intersecting one another in the assembly shown above. The next step was to update the models with slots, pegs, and holes so that the boat could actually exist in real life, along with mirroring the boat so it isn’t just a half. This version was laser cut out of cardboard as a physical proof of concept.

![Laser-Cut Benchy V2.5 Cardboard](/assets/img/3D-Modeling/benchyproject_V2.5_cardboard.jpg)

From this cardboard version, I learned that parts like the hull of the ship fit together great, but many of the other parts did not. The biggest problem was that the bridge door frames didn't have anything holding them to each other. Similarly, the cargo box and chimney were still just stacked horizontally and had nothing holding them together.

# V3 - Connection Overhaul

V3 was all about fixing connection issues that were found in the previous version. The bridge walls now all had tabs that held them all together. The cargo box was reworked to make the pieces vertical, and fit into the back of the bridge. The chimney is still stacked, but two tiny support pieces were added to secure them into the top of the bridge quite snuggly.

V3 was cut out of cardboard, and a few more issues were found with it. Extra pins were added to part of the Hull to support the floors of the ship, and tabs were added to all the pieces of the deck to fit them together better. Finally, I added my name into the back wall of the bridge, and laser cut V3.5 out of nice birch wood.

![Laser-Cut Benchy V3.5](/assets/img/3D-Modeling/benchyproject_V3.5_wood.jpg)

I was very happy with how 3.5 turned out, and wasn't planning on making more updates. However, a team from the Office of the Dean Of Engineering at Texas A&M had a tour of my work place, and they wanted to take my boat to use as a display piece in their office. With V3.5 gone, I wanted to cut another one as a display piece at the FEDC as a part of my legacy before I graduated. But if I was going to make another one, there were a few things I wanted to change.

## V3.75

Since there were only a few small changes I wanted to make, it wasn't enough to call this V4. The largest change was making all pieces of the bridge have two points connected to the floor of the ship, increasing stability and making it easier to assemble together. Then I adjusted some of the text and finally added the fillet to the top of the ship.

![Laser-Cut Benchy V3.5](/assets/img/3D-Modeling/benchyproject_V3.75.jpg)

This is currently the final version, and sits proudly at the Prototyping Center in the Fisher Engineering Design Center at Texas A&M University.


# Final Notes

This is one of my favorite projects I've ever done. V2/2.5 alone took 9 months, and from start to finish, V1 -> V3.75, spanned almost 2.5 years of off and on work. I'm really happy with how it turned out, so much so that it is featured as my banner image on my [Linkedin](https://www.linkedin.com/in/andrew-wheir).

The versions of the Laser-Cut Benchy made of wood are scaled up by a factor of 2.5, since the material used was 1/8th inch birch. The cardboard versions were scaled by a factor of 4, to account for the thickness of the cardboard. I could theoretically make a 1 to 1 scale model, but the material would need to be 0.05 inches thick, which is impractically thin for most laser cutters. 

## V4 - Structure Overhaul?

I do have tentative plans for a V4. The next step would be learning about [living hinges](https://www.ponoko.com/blog/how-to-make/how-to-design-a-living-hinge/) as a way to cover up the interlocking pieces of the hull to get a smooth curve across the hull. Small details like a continuous gunwall, the fishing pole hole in the back, and the two small port holes in the hull, which are details I'd like to add in a new version as well. Honestly I'm tempted to recreate the whole thing from scratch using what I learned with this one and using the official  STEP file, but we'll see if that ever happens. 