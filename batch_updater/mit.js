const fs = require('node:fs');
const controller = require('./controllers/svgController');
const path = require('path');

const importFolderPath = "../public/images";
const readFilePath = importFolderPath + "/";
const folderDir = fs.readdirSync(importFolderPath);
const extension = '.svg';
const importFolderDir = folderDir.filter(file=>{
    return path.extname(file).toLowerCase() === extension;
});
const outputFolderPath = './output/';
let index = 0;

function parseSVG(fileName){
    index += 1;
    let fileNameArray = fileName.split('-');
    let title = fileNameArray[0];
    const fileAsArray = controller.svgToArray(readFilePath + fileName);
    const svgArray = controller.removeFill(fileAsArray);
    controller.fixGroupElement(svgArray);
    const lineAsString = controller.addClassAndAria(svgArray[0], title);
    svgArray.splice(0, 1, lineAsString);
    controller.addLicense(svgArray, 'MIT');
    const newSVGasString = controller.parseArrayToString(svgArray);
    controller.writeFile(newSVGasString, outputFolderPath + fileName);
    console.log(`Completed ${index } of ${importFolderDir.length} `);
}

importFolderDir.forEach((fileName)=>{
    parseSVG(fileName);
    fs.unlinkSync(readFilePath + fileName);
});


