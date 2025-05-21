'use strict'

const czech_day_names = ["PO", "ÚT", "ST", "ČT", "PÁ", "SO", "NE"];

function SyncScroll(id) {
  let bar1 = document.getElementById("syncscrlbar1");
  let bar2 = document.getElementById("daysContainer");
  if (id=="syncscrlbar1") {
    bar2.scrollTop = bar1.scrollTop;
  }
  else {
    bar1.scrollTop = bar2.scrollTop;
  }
}

function getWeekFormat() {
    const weekDays = [];
    const d = new Date();

    // Get this weeks monday
    d.setDate(d.getDate() - d.getDay() + 1);

    // Push this week dates to array
    for(let i = 0; i < 7; i++) {
        weekDays.push(`${d.getDate()}.${d.getMonth()}`);
        d.setDate(d.getDate() + 1);
    }

    console.log(weekDays);

    return weekDays;
}

const daysContainer = document.getElementById("daysContainer");
const currWeekDays = getWeekFormat();
const d = new Date();

currWeekDays.map((date, index) => {




    const div = document.createElement("div");
    const column_div = document.createElement("div");
    const dayName = document.createElement("p");
    const dayDate = document.createElement("p");

    div.classList.add("cl_day_column");
    div.style.textAlign = "center";
    column_div.classList.add("cl_column");

    dayName.innerText = czech_day_names[index];
    dayDate.innerText = date;

    // Generate arrow for current day
    if(d.getDay() == index) {
        console.log("Dneska je " + index);

        const arrow = document.createElement("div");

        let hour_height = 4; // Each hour is 4 rem
        let base_offset = 4; // Shift from top

        let hours = d.getHours() + 2;
        let minutes = d.getMinutes();

        let top_position = base_offset + hour_height * (hours + minutes / 60);
        arrow.style.top = `${top_position}rem`;

        arrow.classList.add("arrow");


        column_div.appendChild(arrow);
    }

    // generate layout for time
    for(let i = 0; i < 24; i++) {
        const hour = document.createElement("div");
        const half_hour = document.createElement("div");
        const first_quarter = document.createElement("div");
        const second_quarter = document.createElement("div");

        hour.classList.add("hour");
        half_hour.classList.add("halfhour");
        first_quarter.classList.add("quarterhour");
        second_quarter.classList.add("quarterhour");

        column_div.appendChild(hour);
        column_div.appendChild(first_quarter);
        column_div.appendChild(half_hour);
        column_div.appendChild(second_quarter);
    }



    div.appendChild(dayName);
    div.appendChild(dayDate);
    div.appendChild(column_div);
    

    daysContainer.appendChild(div);
})