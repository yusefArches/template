
let x = parseFloat(prompt("Enter First Number"));
let y = parseFloat(prompt("Enter Seconde Number"));

if(x*y > 0){
	console.log("Positive")
}

if(x*y < 0){
	console.log("Negative")
}

if(isNaN(x) || isNaN(y)){ 
console.log("Enter a Number")
}
else if(x*y==0){ console.log("Null")}
