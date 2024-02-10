let num = 5893476;
let x;
let rev=0;

for(let i=0; i<=num.toString().length; i++){
	x = num % Math.pow(10,i);
  rev += x.toString()[0] * Math.pow(10,num.toString().length-i);
}

console.log(rev);

