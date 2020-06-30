const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var actualCost= +userInput[0];
var soldCost= +userInput[1];

if (actualCost <=0 || soldCost <=0){
    return;
}
var discount= actualCost-soldCost;

console.log(discount);

});
