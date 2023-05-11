const counter = document.querySelector(".counter");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const download = document.querySelector(".download");
const bar = document.querySelector(".loading-bar-front");

btn.addEventListener("click", () => {
  download.style.display = "none";
  container.style.display = "block";
});

let idx = 0;

updateNum();

function updateNum() {
  counter.innerText = idx + "%";
  bar.style.width = idx + "%";
  idx++;

  if (idx < 101) {
    setTimeout(updateNum, 40);
  }
}
