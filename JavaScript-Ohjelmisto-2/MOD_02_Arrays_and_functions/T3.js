"use strict";

const dogs = 6

const names = [];
for (let i = 0; i < dogs; i++) {
  const name = prompt(`Dog name? ${i + 1}`);
  names.push(name);
}

names.sort().reverse();

document.querySelector(".dog").innerHTML = "<ul><li>" + names.join("</li><li>")
+ "</li></ul>";