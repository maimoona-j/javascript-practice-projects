//to get elements from DOM

const textareaE1= document.getElementById("textarea");
const totalcharacterE1= document.getElementById("total-character");
const remainingE1= document.getElementById("remaining");
//to get character length after typing

textareaE1.addEventListener("keyup", ()=>{
      updateCounter();
});

//to keep data or character data updated
updateCounter();
function updateCounter() {
    totalcharacterE1.innerText=textareaE1.value.length;
    remainingE1.innerText=textareaE1.getAttribute("maxLength")-textareaE1.value.length ;
}

