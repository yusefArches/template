let array=["item0",'item1',"item2",'item3'];

//POP
array.length--;
console.log(array);

//PUSH
array[array.length] = "added"
console.log(array);

//SHIFT
for(let i=0;i<array.length; i++){
array[i] = array[i+1];
}
array.length--;

console.log(array);

//UNSHIFT
for(let i=array.length-1;i>=0; i--){
array[i+1] = array[i];
}
array[0]="begin";
console.log(array);