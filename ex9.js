let array=["item0",'item1',"item2",'item3'];

//POP
Array.prototype.POP = function(){
this.length--;
console.log(this);
}

array.POP();

//PUSH
Array.prototype.PUSH = function(...args){
args.forEach((arg) => {
		this[this.length] = arg;
  });
console.log(this);
}

array.PUSH("eee","azeaze",33);

//SHIFT
Array.prototype.SHIFT = function(){
for(let i=0;i<this.length; i++){
this[i] = this[i+1];
}
this.length--;
console.log(this);
}

array.SHIFT();

//UNSHIFT
Array.prototype.UNSHIFT = function(...args){
	args.forEach((arg) => {
		for(let i=this.length-1;i>=0; i--){
		this[i+1] = this[i];
}
this[0]=arg;
  });
  console.log(this);
}

array.UNSHIFT("kkkk","é");