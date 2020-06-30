const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var side= +userInput[0];
if (side<=0){
    return;
}

var area= ((side*side)*(3**(1/2)))/4;

console.log(area);

});
