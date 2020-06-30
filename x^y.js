const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var x= +userInput[0];
var y= +userInput[1];

var power= (x**y);

console.log(power);

});
