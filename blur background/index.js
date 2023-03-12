const button= document.querySelector(".btn");
const popupbutton= document.querySelector(".popup-btn");
const popupcontainer= document.querySelector(".popup-container");
const closeicon= document.querySelector(".close-icon");
const container= document.querySelector(".container");


 
button.addEventListener("click", ()=>{
         button.ClassList.remove("active");
} );

button.addEventListener("click", ()=>{
    container.classList.add("active");
    popupcontainer.classList.remove("active");
} );

closeicon.addEventListener("click",()=>{
    container.classList.remove("active");
    popupcontainer.classList.add("active");

})