"use strict";

const joo = document.getElementById("target");

const joo1 =
    document.createElement("li");
joo1.textContent = "First Item";
joo.appendChild(joo1);


const joo2 = document.createElement("li");
joo2.textContent = "Second Item";
joo.appendChild(joo2);
joo2.classList.add("my-item");


const joo3 = document.createElement("li");
joo3.textContent = "Third Item";
joo.appendChild(joo3);

