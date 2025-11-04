const num1 = parseInt(prompt("Give me a integer"));
const num2 = parseInt(prompt("Give me a integer"));
const num3 = parseInt(prompt("Give me a integer"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector(".num").textContent =
    `Sum: ${sum}, Product: ${product}, Average: ${average}`;