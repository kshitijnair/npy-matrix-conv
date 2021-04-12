const math = require("mathjs");
const np = require("npyjs");

// n.load("./1-06JanDesktop-croppedDown.npy", (array, shape) => {
//   // `array` is a one-dimensional array of the raw data
//   // `shape` is a one-dimensional array that holds a numpy-style shape.
//   console.log(
//     `You loaded an array with ${array.length} elements and ${shape.length} dimensions.`
//   );
// });
const fs = require("fs");

let rawdata = fs.readFileSync("array1.json");
let student = JSON.parse(rawdata);
console.log(typeof student);

const matrix = math.matrix(student);
console.log(matrix);
math.size(matrix);

// fetch("./array1.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));
