const container = document.getElementById('particleContainer');
console.log(container);

const particleSrc = document.getElementById('particleImage').dataset.src;
const accent1 = "yellow";
const accent2 = "red";
const accent3 = "green";
const accent4 = "purple";
const accent5 = "blue";
const accent6 = "aqua";
const accent7 = "sage";
const accent8 = "orange";
const accent9 = "red";
const accent10 = "pink";

function addObj(classId){
    let obj = document.createElement('object');
    obj.setAttribute('class', `particle ${classId}`);
    obj.setAttribute('data', particleSrc);
    obj.setAttribute('type', 'image/svg+xml');
    container.appendChild(obj);
}
function insertObj(Obj, size, position, speed, delay , accentColor ){
    Obj.addEventListener("load", ()=>{
        let svgAccent = Obj.contentDocument.children[0].children[2];
        svgAccent.setAttribute('fill', accentColor);
        Obj.setAttribute('style', `left: ${position}; width: ${size}; transition: all ${speed} linear; transition-delay: ${delay}`);
        Obj.classList.add("rise");
    });
}

for(let i=0; i<10; i++){
    let classId=`p${i}`;
    addObj(classId);
}


let svgObjs = document.querySelectorAll('.particle');
let count = 0;
svgObjs.forEach((obj)=>{
    count += 1;
    insertObj(obj, `${count * 25}px`, `${count*5}%`, `${count * 2}s`, `${count}s`, "red");
});







