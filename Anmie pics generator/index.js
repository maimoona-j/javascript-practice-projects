 


const btn = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const amineName = document.querySelector(".anime-name");

btn.addEventListener("click", async function () {
  try {
    btn.disabled = true;
    btn.innerText = "Loading...";
    amineName.innerText = "Updating...";
    animeImg.src = "spinner.svg";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    btn.disabled = false;
    btn.innerText = "Get Anime";
    animeContainer.style.display = "block";
    animeImg.src = data.url;
    amineName.innerText = data.artist;
  } catch (error) {
    console.log(error);
    btn.disabled = false;
    btn.innerText = "Get Anime";
    amineName.innerText = "An error happened, please try again";
  }
});