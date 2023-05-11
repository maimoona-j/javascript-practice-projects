const searchBarContainer = document.querySelector(".search-container");
const magnifier = document.querySelector(".magnifier");

magnifier.addEventListener("click", () => {
  searchBarContainer.classList.toggle("active");
});
