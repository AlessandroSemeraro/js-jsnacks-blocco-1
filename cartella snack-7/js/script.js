const array =[];

for (let i=1; i<=6; i++){
    const number=parseInt(prompt('insert  number'));
    
    if ( number % 2 == 0 ){
        console.log(number);
    }else if ( number % 2 == 1){
        const array = [number];
        console.log(array);
    }
}

