const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var r = +userInput[0];//r=radius

var diameter = 2*r;
var circumference=2*(22/7)*r;
var area= (22/7)*r*r;

console.log(diameter);
console.log(circumference);
console.log(area);

});
