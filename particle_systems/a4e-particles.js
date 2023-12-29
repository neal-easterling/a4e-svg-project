import { addObj, insertObj } from "./scripts/particleController.js";
const container = document.getElementById('particleContainer');

const particleSrc = document.getElementById('particleImage').dataset.src;

for(let i=0; i<10; i++){
    let classId=`p${i}`;
    addObj(classId, particleSrc, container);
}


let svgObjs = document.querySelectorAll('.particle');
let count = 0;
svgObjs.forEach((obj)=>{
    count += 1;
    insertObj(obj);
});

function runLoop(){
    svgObjs.forEach((obj)=>{
        let position = obj.getBoundingClientRect();
        if(position.bottom < -20) {
            obj.remove();
            console.log('removed');
        }  

    });
}

function animationLoop(timestamp){
    runLoop();
    requestAnimationFrame(animationLoop);
}

requestAnimationFrame(animationLoop);







