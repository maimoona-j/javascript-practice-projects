const rating = document.querySelectorAll(".rating");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

let selectedRating = "";

rating.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btn.addEventListener("click", () => {
  if (selectedRating != "") {
    container.innerHTML = `<strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedRating}</strong>
        <p> We're really grateful and appreciate you taking the time to share your rating with us.</p>
        `;
  }
});

function removeActive() {
  rating.forEach((rating) => {
    rating.classList.remove("active");
  });
}
