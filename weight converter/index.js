const input = document.getElementById("input");
const error = document.getElementById("error");
const result = document.getElementById("result");

let errorTime;
let resultTime;

// logic to display error message
function updateResults() {
  if (input.value < 0 || isNaN(input.value)) {
    error.innerText = "Please Enter a Valid Number";
    clearTimeout(errorTime);
    setTimeout(() => {
      error.innerText = "";
      input.value = "";
    }, 2000);
    //  logic to convert weight
  } else {
    result.innerText = (+input.value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      result.innerText = "";
      input.value = "";
    }, 10000);
  }
}
input.addEventListener("input", updateResults);
