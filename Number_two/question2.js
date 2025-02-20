function square(number){
    return number * number;
}

function displaySquares(){
    let squareOutput = '';// This will hold the output 
    for (let a = 1 ; a <= 10; a++){
      let squareNumbers = square(a);
      squareOutput += `The square of ${a} is ${squareNumbers}<br>`// Adding the result to the output
 }
 document.getElementById('square').innerHTML= squareOutput // result to potray from the id
}