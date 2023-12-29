"use strict";

export function addObj(classId, particleSrc, container){
        let obj = document.createElement('object');
        obj.setAttribute('class', `particle ${classId}`);
        obj.setAttribute('data', particleSrc);
        obj.setAttribute('type', 'image/svg+xml');
        container.appendChild(obj);
    }


    

export function insertObj(Obj){
        const colors = [
            "#00AAEE", "red", "blue", "yellow", "purple"
        ];

        function getRandomInt(max){
            return Math.floor(Math.random() * max);
        }
  
        Obj.addEventListener("load", ()=>{
            let svgAccent = Obj.contentDocument.children[0].children[2];
            let colorIndex = getRandomInt(5);
            let sizeQ = getRandomInt(7);
            let size = ( sizeQ * 25) + 50;
            let speed = 60/sizeQ; 
            let z = sizeQ * 20;
            svgAccent.setAttribute('fill', colors[colorIndex]);
            Obj.setAttribute('style', `left: ${getRandomInt(80)}%; width: ${size}px; transition: all ${speed}s linear; transition-delay: ${Math.random()* 15}s; z-index: ${z}`);
            Obj.classList.add("rise");
        });
    }

