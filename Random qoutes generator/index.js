const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const copyIcon = document.querySelector(".fa-copy");

const apiURL = "https://api.quotable.io/random";

// main logic to generate random qoutes
async function getQuote() {
  try {
    btn.innerText = "Loading...";
    btn.disabled = true;
    quote.innerText = "Updating...";
    author.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quote.innerText = quoteContent;
    author.innerText = "~ " + quoteAuthor;
    btn.innerText = "Get a quote";
    btn.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quote.innerText = "An error happened, try again later";
    author.innerText = "An error happened";
    btn.innerText = "Get a quote";
    btn.disabled = false;
  }
}

// logic to copy qoutes
function copyQuote() {
  const text = quote.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("qoute has been copied to the clipboard!");
    })
    .catch((error) => console.error(error));
}

getQuote();

btn.addEventListener("click", getQuote);
copyIcon.addEventListener("click", copyQuote);
