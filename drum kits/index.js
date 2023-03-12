const kits =['drum','kick','snare','tom'];
const containerE=document.querySelector(".container");

kits.forEach(kit=>{
    const btnE=document.createElement("button");
    btnE.classList.add("btn");
    btnE.innerText=kit;
    containerE.appendChild(btnE);
    const audioE=document.createElement("audio");
    audioE.src="sounds/" +kit + ".mp3";
    containerE.appendChild(audioE);
    btnE.addEventListener("click", ()=>{
    audioE.play();
    });
    window.addEventListener("keydown", (event)=>{
      if(event.key ===kit.slice(0,1)){
        audioE.play();
        btnE.style.transform="scale(.9)";
        setTimeout(()=>{
            btnE.style.transform="scale(1)";
        },1000);
      }
    });

});