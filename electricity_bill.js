var power=100;//in watts
var time= 1;// in hours
var days= 30;

var unit=(power*time*days)/1000;
var electricityBill = unit*10;

console.log(electricityBill);

