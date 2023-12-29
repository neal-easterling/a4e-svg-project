const container = document.getElementById('particleContainer');
console.log(container);

const particleSrc = document.getElementById('particleImage').dataset.src;

let svgObjs = document.querySelectorAll('.particle');
let svgObj = svgObjs[0];
let svgAccent;

const accent1 = "yellow";

svgObj.addEventListener("load", ()=>{
    svgAccent = svgObj.contentDocument.children[0].children[2];
    svgAccent.setAttribute('fill', accent1);
    console.log(svgAccent);
    svgObj.setAttribute("style", "left: 50%; width: 50px; transition: all 20s linear;");
    svgObj.classList.add("rise");
    
});






