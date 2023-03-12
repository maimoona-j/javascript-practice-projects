const btn=document.querySelector(".btn");
const closeicon=document.querySelector(".close-icon");
const videocontainer=document.querySelector(".video-container");
const video=document.querySelector("video");

btn.addEventListener ("click", ()=>{
    videocontainer.classList.remove("active");

});

closeicon.addEventListener("click",()=>{
   videocontainer.classList.add("active");
   video.pause();
   video.currentTime=0;
});