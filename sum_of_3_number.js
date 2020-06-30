const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var a= +userInput[0];
var b= +userInput[1];
var c= +userInput[2];

var d= a+b+c;
console.log(d);

});
