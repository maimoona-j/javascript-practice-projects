//  to generate random numbers upto 10
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById("question");
const input = document.getElementById("input");
const form = document.getElementById("form");
const score = document.getElementById("score");
const button = document.getElementById("btn");
 

let newscore = JSON.parse(localStorage.getItem("score"));
if (!newscore) {
  newscore = 0;
}

score.innerText = `score: ${newscore}`;
question.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;
if(button){
form.addEventListener("submit", () => {
  const userAns = +input.value;
  if (userAns === correctAns) {
    newscore++;
    updateLocalStorage();
  } else {
    newscore--;
    updateLocalStorage();
  }
});
}

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(newscore));
}