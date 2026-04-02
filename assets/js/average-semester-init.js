//init.js
//Initalizes constants, variables, and loads the iamges



const schedule_directories = [
    "/assets/img/Programming/average-semester/schedule1.png",
    "/assets/img/Programming/average-semester/schedule2.png",
    "/assets/img/Programming/average-semester/schedule3.png",
    "/assets/img/Programming/average-semester/schedule4.png",
    "/assets/img/Programming/average-semester/schedule5.png",
    "/assets/img/Programming/average-semester/schedule6.png",
    "/assets/img/Programming/average-semester/schedule7.png",
    "/assets/img/Programming/average-semester/schedule8.png",
];
const all_schedule_images = schedule_directories.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

const rendered_schedule = document.getElementById("backgroundImage");
rendered_schedule.src = currentTheme === 'dark'
    ? "/assets/img/Programming/average-semester/background_dark.png"
    : "/assets/img/Programming/average-semester/background.png";
const original_background = new Image();
original_background.src = "/assets/img/Programming/average-semester/background.png"
const original_background_dark = new Image();
original_background_dark.src = "/assets/img/Programming/average-semester/background_dark.png"


//RGB of the brightest color of the heatmap
const RED = 6;
const GREEN = 200;
const BLUE = 125;

//Not constants because they need to be initalized later 
let WIDTH = 0;                    //Width of all images
let HEIGHT = 0;                   //Height of all images
let pixel_layer_count_array;      //2D Array (width x height), stores the number of layers of schedules that overlap on that pixel

function waitForImage(img) {
    if (img.complete && img.naturalWidth !== 0) {
        return Promise.resolve();
    }
    return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
    });
}

//Preload all the images
async function preloadAllImages() {
    const all_images = [...all_schedule_images, rendered_schedule, original_background, original_background_dark];
    await Promise.all(all_images.map(waitForImage));
}

async function initialize() {
    await preloadAllImages();
    WIDTH = rendered_schedule.naturalWidth;
    HEIGHT = rendered_schedule.naturalHeight;
    pixel_layer_count_array = new Uint8Array(WIDTH * HEIGHT);
    pixel_layer_count_array.fill(0);
}
initialize();