/* Find the Factorial of a Number
Write a function that takes a number as input and returns its factorial. 
The factorial of a number is the product of all positive integers from 1 to the number itself. 
For example, the factorial of 5 is 120 (1 _ 2 _ 3 _ 4 _ 5 = 120).

Write a function called factorial that takes a number as its parameter and returns its factorial. 
If the input number is 0, the function should return 1. */


function factorialNum(num){

    if(num === 0){
        return 1;
    }

    let product = 1;

    for(let i = 1; i<=num; i++){
        product = product * i;
    }

    return product;

}

console.log(factorialNum(5));
console.log(factorialNum(0));
console.log(factorialNum(10));