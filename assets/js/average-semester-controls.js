//controls.js
// Creates the button and checkboxes, along with the functions those buttons use



const container = document.getElementById("allButtons");

//
// Initialize Heatmap Button
//
const heatmap_button = document.createElement("input");
let is_heatmap_active = false;
heatmap_button.type = "button";
heatmap_button.value = "Switch to Heatmap";
heatmap_button.addEventListener("click", function() {
    toggleHeatmap(!is_heatmap_active);
});

async function toggleHeatmap(isActive) {
    is_heatmap_active = isActive;
    if (is_heatmap_active == true) {
        heatmap_button.value = "Switch to Color";
    }
    else {
        heatmap_button.value = "Switch to Heatmap";
    }
    await render();
}

container.appendChild(heatmap_button);



//
// Initialize "Select Add" Button
//
const select_all_button = document.createElement("input");
select_all_button.type = "button";
select_all_button.value = "Select All";
select_all_button.addEventListener("click", function() {
    selectAll();
});

async function selectAll() {
    for (let i = 1; i <= schedule_directories.length; i++) {
        const checkbox = document.getElementById(`image${i}`);
        if (!checkbox.checked) {
            checkbox.checked = true;
            await updateSelectedSchedules(i, true);
        }
    }
    //No need to call render since it is called in updateSelectedSchedules
}

container.appendChild(select_all_button);


//
// Initialize "Deselect Add" Button
//
const deselect_all_button = document.createElement("input");
deselect_all_button.type = "button";
deselect_all_button.value = "Deselect All";
deselect_all_button.addEventListener("click", function() {
    deselectAll();
});

async function deselectAll() {
    pixel_layer_count_array.fill(0);
    selected_schedules = [];

    for (let i = 1; i <= schedule_directories.length; i++) {
        const checkbox = document.getElementById(`image${i}`);
        checkbox.checked = false;
    }

    await render();
}

container.appendChild(deselect_all_button);
container.appendChild(document.createElement("br"));


//Initialize Schedule Checkboxes
//1D Array, stores which schedules are selected (i.e [1,2,4])
let selected_schedules = [];

//Names of the schedules (for the checkboxes)
const schedule_names =  ["Freshman Fall", "Freshman Spring",
                        "Sophomore Fall", "Sophomore Spring",
                        "Junior Fall", "Junior Spring",
                        "Senior Fall", "Senior Spring"
]

                    
//Generate checkboxes and put them inside of "allButtons"
for (let i = 1; i <= schedule_directories.length; i++) {
    const a_checkbox = document.createElement("input");

    a_checkbox.type = "checkbox";
    a_checkbox.id = `image${i}`;
    a_checkbox.addEventListener("change", function() {
        updateSelectedSchedules(i, a_checkbox.checked);
    });

    const label = document.createElement("label");
    label.htmlFor = `image${i}`;
    label.textContent = schedule_names[i-1];

    container.appendChild(a_checkbox);
    container.appendChild(label);
    
    if (i % 4 == 0) {
        container.appendChild(document.createElement("br"));
    }
}



//Updates list of schedules everytime a checkbox is clicked
async function updateSelectedSchedules(scheduleNumber, isChecked) {
    if (isChecked) {
        selected_schedules.push(scheduleNumber);
    }
    else {
        const index = selected_schedules.indexOf(scheduleNumber);
        if (index !== -1) {
            selected_schedules.splice(index, 1);
        }
    }

    await updateLayerCount(scheduleNumber, isChecked);
    await render();
}