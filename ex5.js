let array = [43,34,89,09,87,45];
let max = array[0];

for (let i=0; i<array.length; i++){

    if(array[i]>max) { max=array[i]; }
}

console.log(max);

//sorting from max to min

for (let i=0; i<array.length; i++){

    for (let j=0; j<array.length; j++){

        if(array[i]>array[j]){
  
            array[i] = array[i] + array[j];
            array[j] = array[i] - array[j];
            array[i] = array[i] - array[j];
  }
}
}

console.log(array);
