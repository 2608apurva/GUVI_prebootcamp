const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var celcius= +userInput[0];
var fahreinheit= ((celcius*9)/5)+32;

console.log(fahreinheit);

});
