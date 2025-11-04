"use strict";

const integer = parseInt(prompt("Give me integer number"));
let primeyes = true

if (integer < 2) {
  primeyes = false;
} else {
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      primeyes = false;
    }
  }
}

if (primeyes) {
  document.querySelector(".prime").textContent =
      `${integer} is prime`;
} else {
  document.querySelector(".prime").textContent =
      `${integer} is not prime`;
}


