const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//Square of a number    
    var a= +userInput[0];
    var b= a*a;
    console.log(b);

});
