 


const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");

btn.addEventListener("click", () => {
  createPassword();
});

copyIcon.addEventListener("click", () => {
  copyPassword();
  if (input.value) {
    alertContainer.classList.remove("active");
    setTimeout(() => {
      alertContainer.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  input.value = password;
  alertContainer.innerText = password + " copied!";
}

function copyPassword() {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
}