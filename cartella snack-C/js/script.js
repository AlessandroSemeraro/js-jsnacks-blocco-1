const userTwoDigits = parseInt(prompt('insert a two-digit number'));
console.log(userTwoDigits);

const userFourDigits = parseInt(prompt('insert a four-digit number'));
console.log(userFourDigits);

let finalNumber;

for ( let i=userTwoDigits ; i < userFourDigits*2 ; i=i*2){
    console.log(i);
    finalNumber=i;
}

