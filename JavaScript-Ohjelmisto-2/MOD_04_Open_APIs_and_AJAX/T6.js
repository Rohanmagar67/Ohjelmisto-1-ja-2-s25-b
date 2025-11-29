"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", async function(event){
  event.preventDefault();

  const query = document.getElementById("query").value;
  const response = await fetch("https://api.chucknorris.io/jokes/search?query="+ query);
  const data = await response.json();

  const results = document.getElementById("results");
  results.innerHTML = "";

  for (const joke of data.result) {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.textContent = joke.value;
    article.appendChild(p);
    results.appendChild(article);
  }
});