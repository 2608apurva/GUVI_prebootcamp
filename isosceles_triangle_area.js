const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var a= +userInput[0];//equalSide
var b= +userInput[1];//unEqualSide
if (a<=0 || b<=0){
    return;
}

var area= (b/4)*((4*(a**2)-(b**2))**(1/2));

console.log(area);

});
