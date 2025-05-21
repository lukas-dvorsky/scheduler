'use strict'

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

currWeekDays.map((date) => {
    const para = document.createElement("p");
    para.innerText = date;
    daysContainer.appendChild(para);
})