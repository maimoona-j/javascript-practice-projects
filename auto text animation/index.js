 

const container = document.querySelector(".container");
const careers = ["content writer", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;
let characterIndex = 0;

// logic to update text using updateText() function
updateText();
function updateText() {
  characterIndex++;
  container.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}


