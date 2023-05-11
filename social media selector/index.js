const menu = document.querySelector(".menu");
const menuText = document.querySelector(".menu p");
const socialLists = document.querySelector(".social-lists");
const li = document.querySelectorAll(".social-lists li");

menu.addEventListener("click", () => {
  socialLists.classList.toggle("hide");
  menu.classList.toggle("rotate");
});

li.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    menuText.innerHTML = liEl.innerHTML;
    socialLists.classList.add("hide");
    menu.classList.toggle("rotate");
  });
});
