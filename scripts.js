const math = require("mathjs");
const fs = require("fs");

let rawdata = fs.readFileSync("array1.json");
let data = JSON.parse(rawdata);
// console.log(typeof student); //---> object
let matrix1 = math.matrix(data);

rawdata = fs.readFileSync("array2.json");
data = JSON.parse(rawdata);
let matrix2 = math.matrix(data);

// console.log(math.subset(matrix1, math.index(0, 1)));
// console.log(math.subset(matrix2, math.index(0, 1)));

// console.log(math.size(matrix)); //---> [4, 1280] is correct

let newM = math.subtract(matrix1, matrix2);
// console.log(math.subset(newM, math.index(0, 1)));  //---> checked for wokring, works!

console.log(math.size(newM));
