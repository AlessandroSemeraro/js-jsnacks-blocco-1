const newArray = [];

for (let i=1; i<=100; i=i+1) {

if (i % 7 === 0) {
    newArray.push(i);
}  else if  (i % 8 === 0) {
   newArray.push(i)
}
}

console.log(newArray);
