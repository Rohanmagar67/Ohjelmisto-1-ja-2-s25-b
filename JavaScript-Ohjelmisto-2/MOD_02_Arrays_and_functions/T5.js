"use strict";

const numbers = [];

while (true) {
  const num = parseInt(prompt("Feed me numbers"));
  if (numbers.includes(num)) {
    console.log("Number has already been given");
    break;
  }

  numbers.push(num);
}

numbers.sort((a,b) => a - b);
console.log(numbers);