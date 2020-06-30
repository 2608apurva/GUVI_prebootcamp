const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var principal= +userInput[0];
var rate= +userInput[1];
var time= +userInput[2];

if (principal<=0 || rate<=0 || time<=0){
    return;
}

var simpleInterest= (principal*rate*time)/100;

console.log(simpleInterest);

});
