let numberX = document.getElementById("random-number").innerHTML = Math.floor(Math.random() * 1000);

const button = document.getElementById('button');
console.log(button)

let finalNumber=0

button.addEventListener ('click', function() {{
      let firstValue = document.getElementById("random-number");
      finalNumber= parseInt(firstValue.innerHTML) +
      parseInt(3);
      console.log(finalNumber)
   }})
