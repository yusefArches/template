let x=prompt("Enter first Number");
let y=prompt("Enter Seconde Number");

x = x+y;

y = x.slice(0,x.length-y.length);
x = x.slice(y.length,x.length);

x=parseFloat(x);
y=parseFloat(y);

console.log(x,y);

// correction execrice 4 :

let x = 4, y = 5;

x = x + y;

y = x - y;

x = x - b;

console.log(x, y);
