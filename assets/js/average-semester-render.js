//render.js
// Handles the actual rendering process for the heatmap and color schedule generation



async function updateLayerCount(scheduleNumber, wasAdded) {
    let update = -1
    if (wasAdded == true) {
        update = 1;
    }

    const temp_canvas = document.createElement('canvas');
    temp_canvas.width = WIDTH;
    temp_canvas.height = HEIGHT;
    const temp_ctx = temp_canvas.getContext('2d');

    const a_schedule_image = all_schedule_images[scheduleNumber - 1];
    await waitForImage(a_schedule_image);

    temp_ctx.clearRect(0, 0, WIDTH, HEIGHT);
    temp_ctx.drawImage(a_schedule_image, 0, 0, WIDTH, HEIGHT);
    const overlayData = temp_ctx.getImageData(0, 0, WIDTH, HEIGHT).data;

    for (let y = 0, p = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++, p++) {
            const alpha = overlayData[(p * 4) + 3];
            if (alpha >= 250) {
                pixel_layer_count_array[p] = pixel_layer_count_array[p] + update;
            }
        }
    }

    return;
}

async function render() {
    currentTheme = localStorage.getItem('theme');

    if (is_heatmap_active == true) {
        await renderHeatmap();
    }
    else {
        await renderColor();
    }
}

async function renderHeatmap() {
    const overlay_canvas = document.createElement('canvas');
    overlay_canvas.width = WIDTH;
    overlay_canvas.height = HEIGHT;

    const overlay_ctx = overlay_canvas.getContext('2d');
    const overlay_image_data = overlay_ctx.createImageData(WIDTH, HEIGHT);
    const overlay_pixels = overlay_image_data.data;
    
    //It's capped at 6 because my schedule has no time where more than 6 classes overlap
    let max_layers = selected_schedules.length;
    if (selected_schedules.length > 6) {
        max_layers = 6;
    }

    //Pre-compute the blended heatmap based on pixel_layer_count_array
    const colors = [];
    if (currentTheme === 'dark') {
        console.log("Dark Mode");
        for (let c = 0; c < max_layers; c++) {
            let this_red   = (RED   / max_layers) * (c+1);
            let this_green = (GREEN / max_layers) * (c+1);
            let this_blue  = (BLUE  / max_layers) * (c+1);

            colors[c] = [this_red, this_green, this_blue];
        }
    }
    else {
        console.log("Light Mode");
        for (let c = 0; c < max_layers; c++) {
            let this_red   = (RED   / max_layers) * ((max_layers - c)+1);
            let this_green = (GREEN / max_layers) * ((max_layers - c)+1);
            let this_blue  = (BLUE  / max_layers) * ((max_layers - c)+1);

            colors[c] = [this_red, this_green, this_blue];
        }
    }

    console.log("Colors: ", colors);

    for (let i = 0; i < pixel_layer_count_array.length; i++) {
        const count = pixel_layer_count_array[i];

        if (count <= 0) {
            //Skip pixels with no layers
            continue; 
        }

        const pixel_index = i * 4;
        overlay_pixels[pixel_index + 0] = colors[count - 1][0];
        overlay_pixels[pixel_index + 1] = colors[count - 1][1];
        overlay_pixels[pixel_index + 2] = colors[count - 1][2];
        overlay_pixels[pixel_index + 3] = 255;
    }

    //Update the canvas with the rendered result
    overlay_ctx.putImageData(overlay_image_data, 0, 0);
    
    const final_canvas = document.createElement('canvas');
    final_canvas.width = WIDTH;
    final_canvas.height = HEIGHT;
    const final_ctx = final_canvas.getContext('2d');

    //Draw the original background first, then overlay the blended schedules on top
    if (currentTheme === 'dark') {
        final_ctx.drawImage(original_background_dark, 0, 0);
    }
    else {
        final_ctx.drawImage(original_background, 0, 0);
    }
    
    final_ctx.drawImage(overlay_canvas, 0, 0);
    final_ctx.globalAlpha = 1;
    rendered_schedule.src = final_canvas.toDataURL();
}

async function renderColor() {
    const canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');

    // Draw the base background first
    if (currentTheme === 'dark') {
        ctx.drawImage(original_background_dark, 0, 0);
    }
    else {
        ctx.drawImage(original_background, 0, 0);
    }

    // Draw each selected schedule image on top of the background
    for (const scheduleNumber of selected_schedules) {
        const scheduleImage = all_schedule_images[scheduleNumber - 1];
        await waitForImage(scheduleImage);
        ctx.drawImage(scheduleImage, 0, 0, WIDTH, HEIGHT);
    }

    rendered_schedule.src = canvas.toDataURL();
}