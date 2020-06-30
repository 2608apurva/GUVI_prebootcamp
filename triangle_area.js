const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//a,b,c three sidesv of triangle    
var a= +userInput[0];
var b= +userInput[1];
var c= +userInput[2];

if (a <=0 || b <=0 || c<=0){
    return;
}
var s=(a+b+c)/2;

var area=(s*(s-a)*(s-b)*(s-c))**(1/2);
console.log(area);

});
