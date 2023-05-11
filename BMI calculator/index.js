const btn = document.getElementById("btn");
const bmiresult = document.getElementById("bmi-result");
const weightcondition = document.getElementById("weight-condition");

function calculate() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;
  const result = weight / (height * height);

  bmiresult.value = result;

  if (result < 18.5) {
    weightcondition.innerText = "Under Weight ";
  } else if (result >= 18.5 && result <= 24.9) {
    weightcondition.innerText = "Normal Weight ";
  } else if (result >= 25 && result <= 29.9) {
    weightcondition.innerText = "OverWeight ";
  } else if (result <= 30) {
    weightcondition.innerText = "Obesity ";
  }
}

btn.addEventListener("click", calculate);
