const userNumber = prompt('type a number with 7 digits');

const digitsArray = userNumber.split('');

let sum = 0

for(let i=0 ; i < digitsArray.length ; i++){
    sum = sum + parseInt(digitsArray[i]);  
}

console.log(sum)