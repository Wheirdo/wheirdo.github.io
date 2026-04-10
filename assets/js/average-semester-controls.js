//controls.js
// Creates the button and checkboxes, along with the functions those buttons use



const container_top = document.getElementById("TopRow");

//
// Initialize Heatmap Button
//
const heatmap_button = document.createElement("input");
let is_heatmap_active = true;
heatmap_button.type = "button";
heatmap_button.value = "Switch to Color";
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

container_top.appendChild(heatmap_button);



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
        const button = document.getElementById(`image${i}`);

        if (!button.classList.contains("selected")) {
            button.classList.add("selected");
            await updateSelectedSchedules(i, true);
        }
    }
    //No need to call render since it is called in updateSelectedSchedules
}

container_top.appendChild(select_all_button);


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
        const button = document.getElementById(`image${i}`);
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
        }
    }

    await render();
}
container_top.appendChild(deselect_all_button);


//Initialize Schedule Buttons
const container_bottom = document.getElementById("BottomRow");
//1D Array, stores which schedules are selected (i.e [1,2,4])
let selected_schedules = [];

//Names of the schedules (for the checkboxes)
const schedule_names =  ["Freshman Fall", "Freshman Spring",
                        "Sophomore Fall", "Sophomore Spring",
                        "Junior Fall", "Junior Spring",
                        "Senior Fall", "Senior Spring"
]

                    
//Generate buttons and put them inside of "allButtons"
for (let i = 1; i <= schedule_directories.length; i++) {
    const a_button = document.createElement("input");

    a_button.type = "button";
    a_button.id = `image${i}`;
    a_button.addEventListener("click", function() {
        const isSelected = a_button.classList.toggle("selected");
        updateSelectedSchedules(i, isSelected);
    });

    a_button.value = schedule_names[i-1];

    //Alternate the grid row so that Freshman Fall and Freshman Spring are on different rows
    if (i % 2 == 1) {
        a_button.style.gridRow = "1";
    }
    else {
        a_button.style.gridRow = "2";
    }

    container_bottom.appendChild(a_button);
}


//Todo WIP
//const button_colors = [[215,68,96],[255,158,7],[255,232,61],[121,206,18],[0,183,235],[76,103,255],[174,76,255],[255,109,158]];


//Updates list of schedules everytime a checkbox is clicked
async function updateSelectedSchedules(scheduleNumber, isSelected) {
    const button = document.getElementById(`image${scheduleNumber}`);

    if (isSelected) {
        selected_schedules.push(scheduleNumber);
        button.classList.add("selected");
        //Todo wip
        //button.style.backgroundColor = `rgb(${button_colors[scheduleNumber-1][0]}, ${button_colors[scheduleNumber-1][1]}, ${button_colors[scheduleNumber-1][2]})`;
    }
    else {
        const index = selected_schedules.indexOf(scheduleNumber);
        if (index !== -1) {
            selected_schedules.splice(index, 1);
        }
        //button.style.backgroundColor = `rgb(49,49,50)`;
    }

    await updateLayerCount(scheduleNumber, isSelected);
    await render();
}