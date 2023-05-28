const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const submit = document.querySelector(".submit");
 

console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.id === "plum") {
      body.style.backgroundColor = e.target.id;
      submit.style.backgroundColor = "purple";
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      submit.style.backgroundColor = "green";
    }
    if (e.target.id === "lightblue") {
      body.style.backgroundColor = e.target.id;
      submit.style.backgroundColor = "rgb(13, 114, 148)";
    }
    if (e.target.id === "lightpink") {
      body.style.backgroundColor = e.target.id;
      submit.style.backgroundColor = "rgb(196, 78, 96)";
    }
  });
});

submit.addEventListener("click", function () {
    alert("Submit button clicked!");
  });

 


 
