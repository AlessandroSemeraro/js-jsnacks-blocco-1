const array =[];

for (let i=0; i<=6; i++){
    const number=parseInt(prompt('insert  number'));
    
    if ( number % 2 !== 0 ){
        console.log(number);
        array.push(number)
    }
}

console.log(array)