const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
    
var r= +userInput[0];//r=radius

if (r<=0){
    return;
}

var volume= (4/3)*(22/7)*(r**3);

console.log(volume);

});
