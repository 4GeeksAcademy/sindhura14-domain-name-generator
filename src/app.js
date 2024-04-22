/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let combinations = [];
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        combinations.push(pronoun + adj + noun + ".com");
      }
    }
  }
  var pTag = document.getElementById("combinations");
  var ul = document.createElement("ul");
  ul.setAttribute("class", "list-group list-group-numbered");

  pTag.appendChild(ul);

  combinations.forEach((item) => {
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    ul.appendChild(li);
    li.innerHTML = li.innerHTML + item;
  });
};
