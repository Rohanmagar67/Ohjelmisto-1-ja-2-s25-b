"use strict";

const participants = parseInt(prompt("How many participants?"));

const names = [];
for (let i = 0; i < participants; i++) {
  const name = prompt(`What are their names? ${i + 1}`);
  names.push(name);
}

names.sort();

document.querySelector(".bob").innerHTML = "<ol><li>" + names.join("</li><li>")
+ "</li></ol>";