"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", async function(event){
  event.preventDefault();

  const query = document.getElementById("query").value;
  const response = await fetch("https://api.tvmaze.com/search/shows?q=" + query);
  const data = await response.json();

  console.log(data);
})