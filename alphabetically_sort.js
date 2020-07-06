var friend1 = ['Marie','Jane','Captain America','Munnabai','jeff','AAK'];
var friend2= ['Gabbar','Rajnikanth','Spiderman','Jeff']
var friends=friend1+','+friend2;
var ar=friends.split(",");
console.log(ar);
var x=ar.sort((a, b) => a.localeCompare(b));
console.log(x);

