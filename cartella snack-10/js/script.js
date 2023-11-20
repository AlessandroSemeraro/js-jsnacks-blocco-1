const numberX = document.getElementById("random-number").innerHTML = Math.floor(Math.random() * 1000);

const button = document.getElementById('button');

button.addEventListener("click", function() {
    const sum = numberX + 3;
    console.log('mouse clicked')
  }); 