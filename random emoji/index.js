const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});



const container = document.querySelector(".container");

let characterIndex = 0;
const text = "Generate random emoji";

// logic to update text using updateText() function
updateText();
function updateText() {
  characterIndex++;
  const animatedText = text.slice(0, characterIndex);
  container.innerHTML = `<h1>${animatedText}</h1>`;

  if (characterIndex === text.length) {
    characterIndex = 0;
  }
  setTimeout(updateText, 400);
}


