'use strict'
const d = new Date();

const block = {
    id: 1,
    name: 'Koupit rohliky',
    start: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
    end: `${d.getDate()}.${d.getMonth()}.${d.getFullYear()} ${d.getHours() + 1}:${d.getMinutes()}`,
    place: 'Kaufland',
    notes: 'Kup jich 10.',
    color: '#c7c7c7'
}

export function addBlock() {
    const parentId = `${block.start.split(' ')[0]}`;
    const parent = document.getElementById(parentId);
    const div = document.createElement('div');
    const timeStr = `${block.start.split(' ')[1]} - ${block.end.split(' ')[1]}`;

    div.classList.add("block");
    div.style.backgroundColor = block.color;
    //TODO: Adjust height of fiv based on time

    const hour_height = 4; // Each hour is 4 rem
    const base_offset = -2.3; // Shift from top

    let hours = d.getHours() + 2;
    let minutes = d.getMinutes();

    let top_position = base_offset + hour_height * (hours + minutes / 60);
    div.style.top = `${top_position}rem`;

    const name = document.createElement("p");
    const time = document.createElement("p");
    const place = document.createElement("p");
    const notes = document.createElement("p");

    name.innerText = block.name;
    time.innerText = timeStr;
    place.innerText = block.place;
    notes.innerText = block.notes;

    name.classList.add("block_name");
    time.classList.add("block_time");

    div.appendChild(name);
    div.appendChild(time);

    parent.appendChild(div);
}