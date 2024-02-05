
let x=prompt("Enter first Number");
let y=prompt("Enter Seconde Number");

x = x+y;

y = x.slice(0,x.length-y.length);
x = x.slice(y.length,x.length);

x=parseFloat(x);
y=parseFloat(y);

console.log(x,y);
