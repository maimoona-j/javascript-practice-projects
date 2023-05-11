const loginForm = document.getElementById("login-form");
const forgotPasswordLink = document.getElementById("forgot-password-link");
const forgotPasswordContainer = document.getElementById(
  "forgot-password-container"
);
const resetPasswordButton = document.getElementById("reset-password-button");
const backToLoginLink = document.getElementById("back-to-login-link");

forgotPasswordLink.addEventListener("click", () => {
  loginForm.style.display = "none";
  forgotPasswordContainer.style.display = "block";
});

backToLoginLink.addEventListener("click", () => {
  loginForm.style.display = "block";
  forgotPasswordContainer.style.display = "none";
});

resetPasswordButton.addEventListener("click", () => {
  alert("Your password has been reset");
});
