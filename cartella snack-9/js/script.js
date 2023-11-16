const userTwoDigits = parseInt(prompt('insert a two-digit number'));
console.log(userTwoDigits);

const userFourDigits = parseInt(prompt('insert a four-digit number'));
console.log(userFourDigits);

for ( let i=1 ; i > userFourDigits ; i++){
    if( userTwoDigits < userFourDigits){
        userNumber=userNumber * 2;
        console.log(userNumber)
    }
}