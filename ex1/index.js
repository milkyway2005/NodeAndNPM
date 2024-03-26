const fs = require("fs");

const data = fs.readFileSync("text.txt");
console.log("before: ", data.toString());

const newData = data.toString().split('').reverse().join('');
fs.writeFileSync("text.txt", newData);
console.log("after: ", fs.readFileSync("text.txt").toString());