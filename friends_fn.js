var friend1 = ['Marie','Jane','Captain America','Munnabai','jeff','AAK'];
var friend2= ['Gabbar','Rajnikanth','Spiderman','Jeff']
var friends=friend1+','+friend2;
var ar=friends.split(",");
//console.log(ar);
var x=ar.sort((a, b) => a.localeCompare(b));
console.log(x);

console.log(x[0]);
console.log(x[(x.length)/2]);

var y=x.toString()
console.log(y)

var l=0
for (var i=0;i<x.length;i++){
    var w=x[i].length;
    l+=w;
}

console.log(l);
console.log(l/x.length);

