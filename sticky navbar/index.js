const navbar =document.querySelector(".navbar");
const bottomcontainer =document.querySelector(".bottom-container");

console.log(navbar.offsetHeight);
console.log(bottomcontainer.offsetHeight);

window.addEventListener("scroll",()=>{
    if(
        window.scrollY >
        bottomcontainer.offsetTop-navbar.offsetHeight-50
    ){
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
});

 