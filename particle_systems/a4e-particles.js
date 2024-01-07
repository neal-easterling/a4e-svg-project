import { addObj, insertObj } from "./scripts/particleController.js";
const container = document.getElementById('particleContainer');

const particleSrc = document.getElementById('particleImage').dataset.src;

const COLORS_ARRAY = ["#0AE", "#36DAB3", "#B73DCB", "#38D22B", "#CE3232", "#FAA525", "#64257D" ];

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







