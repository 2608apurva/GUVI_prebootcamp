const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var a = +userInput[0];
var b = +userInput[1];

var addition= a+b;
var subtraction= a-b;
var multiplication= a*b;
var division= a/b;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

});
