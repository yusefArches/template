let Marks=prompt("Enter all Marks, Seperated by Space");

let array= Marks.split(" ");
let Sum=0

console.log(array.length);

for(let i=0;i<array.length; i++){

console.log(array[i]);
	Sum += parseFloat(array[i]);
  
}

console.log("average is: " +Sum/array.length);