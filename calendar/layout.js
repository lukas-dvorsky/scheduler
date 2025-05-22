import { getWeekDaysDate } from './date_functions.js';

'use strict'

const czech_day_names = ["PO", "ÚT", "ST", "ČT", "PÁ", "SO", "NE"];

function generateTime(elementForAppend) {
    for(let i = 0; i < 24; i++) {
        const par = document.createElement("p");

        i < 10 ? par.innerText = `0${i}:00`: par.innerText = `${i}:00`;
        elementForAppend.appendChild(par);
    }

}


// Function to generate arrow that shows current in on current day
function generateArrow(elementForAppend, date) {
    const arrow = document.createElement("div");

    const hour_height = 4; // Each hour is 4 rem
    const base_offset = -2.3; // Shift from top

    let hours = date.getHours() + 2;
    let minutes = date.getMinutes();

    let top_position = base_offset + hour_height * (hours + minutes / 60);
    arrow.style.top = `${top_position}rem`;

    arrow.classList.add("arrow");

    elementForAppend.appendChild(arrow);
}

function generateArrowLine(elementForAppend, date) {
    const arrow = document.createElement("div");

    const hour_height = 4; // Each hour is 4 rem
    const base_offset = -2.3; // Shift from top

    let hours = date.getHours() + 2;
    let minutes = date.getMinutes();

    let top_position = base_offset + hour_height * (hours + minutes / 60);
    arrow.style.top = `${top_position}rem`;

    arrow.classList.add("arrowline");

    elementForAppend.appendChild(arrow);
}

function setYear(date) {
    const yearContainer = document.getElementById("cl_year");

    yearContainer.innerText = date.getFullYear();
}


// Function to generate lines in each column for better clarity
function generateTimeStamps(column) {
    for(let i = 0; i < 24; i++) {
        const hour = document.createElement("div");
        const half_hour = document.createElement("div");
        const first_quarter = document.createElement("div");
        const second_quarter = document.createElement("div");

        hour.classList.add("hour");
        half_hour.classList.add("halfhour");
        first_quarter.classList.add("quarterhour");
        second_quarter.classList.add("quarterhour");

        column.appendChild(hour);
        column.appendChild(first_quarter);
        column.appendChild(half_hour);
        column.appendChild(second_quarter);
    }
}

function generateDaysAndDates(date, index) {
    const daysContainer = document.getElementById("daysContainer");

    const div = document.createElement("div");
    const dayName = document.createElement("p");
    const dayDate = document.createElement("p");

    div.classList.add("cl_day_and_date");
    

    dayName.innerText = czech_day_names[index];
    dayDate.innerText = date;

    div.appendChild(dayName);
    div.appendChild(dayDate);

    daysContainer.appendChild(div);

}

function generateDaysColumns(index, date) {
    const columnContainer = document.getElementById("columnContainer");
    const div = document.createElement("div");
    div.classList.add("cl_day_column");

    // Generate arrow for current day
    if(date.getDay() == index + 1) {
        generateArrow(div, date);
    } else if (date.getDay() > index + 1) {
        generateArrowLine(div, date);
    }

    // generate layout for time
    generateTimeStamps(div);

    columnContainer.appendChild(div);
}

//Function to generate layout for calendar
export function generateLayout() {
    const timesContainer = document.getElementById("cl_times_aside");
    const d = new Date();

    setYear(d);
    generateTime(timesContainer);

    getWeekDaysDate().map((date, index) => {
        generateDaysAndDates(date, index);
        generateDaysColumns(index, d)
    })
}

