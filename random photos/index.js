
const imagecontainer = document.querySelector(".imagecontainer");

const btn= document.querySelector(".btn");

btn.addEventListener("click",()=>{
    
     imageNum=10;
     addNewImages();
});

function addNewImages( ) {
    for (let index = 0; index < imageNum; index++) {
        const newImageE =document.createElement("img");
    newImage.src=`https://picsum.photos/300?random=${Math.floor (Math.random()*2000)}`;
    imagecontainer.appendChild(newImageE);
        
    }
    

}