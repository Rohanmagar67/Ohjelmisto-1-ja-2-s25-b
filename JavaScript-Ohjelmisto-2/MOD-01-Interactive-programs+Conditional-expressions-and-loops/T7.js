"use strict";

const dices = prompt("Give me dices");
let sum = 0

for (let i = 0; i < dices; i++) {
  let roll = Math.ceil(Math.random()*6);
  sum += roll;
}

console.log(sum)
