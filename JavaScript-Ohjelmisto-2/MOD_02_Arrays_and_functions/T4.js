"use strict";

const numbers = [];

while (true) {

  const num = parseInt(prompt("Give me a number (enter 0 to stop"));

  if (num === 0) {
    break;
  }

  numbers.push(num);
}

numbers.sort((a, b) => b - a);

console.log(numbers);