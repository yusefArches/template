let res;

function factorial(num){
res = num--;
while(num>0){
res = res * num;
num--;
}
console.log(res);
}

factorial(9);
