const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

var food=userInput[0].split(' ');
var x=food.toString();
console.log(x);
console.log(food[4]);
console.log(food.length)

});
