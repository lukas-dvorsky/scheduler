'use strict'

// Function to get all dates for current week, strating on Monday.
export function getWeekDaysDate() {
    const weekDays = [];
    const d = new Date();

    // Get this weeks monday
    d.setDate(d.getDate() - d.getDay() + 1);

    // Push this week dates to array
    for(let i = 0; i < 7; i++) {
        weekDays.push(`${d.getDate()}.${d.getMonth()}`);
        d.setDate(d.getDate() + 1);
    }

    return weekDays;
}