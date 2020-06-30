const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var baseArea= +userInput[0];
var height= +userInput[1];
if (baseArea<=0 || height <=0){
    return;
}

var volume= baseArea*height;

console.log(volume);

});
