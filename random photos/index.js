
const imagecontainerE = document.querySelector(".imagecontainer");

const btnE= document.querySelector(".btn");

btnE.addEventListener("click",()=>{
    
     imageNum=10;
     addNewImages();
});

function addNewImages( ) {
    for (let index = 0; index < imageNum; index++) {
        const newImageE =document.createElement("img");
    newImageE.src=`https://picsum.photos/300?random=${Math.floor (Math.random()*2000)}`;
    imagecontainerE.appendChild(newImageE);
        
    }
    

}