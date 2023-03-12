
const inputE= document.querySelector(".input");
const bodyE= document.querySelector("body");

inputE.checked= JSON.parse (localStorage.getItem("mode"));
updateBody();

function updateBody(){
    if (inputE.checked) {
        bodyE.style.background="black";
    }else{
        bodyE.style.background="white";
    }
}

inputE.addEventListener('input' ,()=>{
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputE.checked))
}