/* Fibonacci Series
Write a function that takes a number n as input and returns the first n numbers in the Fibonacci sequence. 
The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers. 
The first two numbers in the sequence are 0 and 1. For example, if n is 5, the function should return the array [0, 1, 1, 2, 3]. */


function fibonacci(n){

    const fib = [0, 1];

    for(let i = 2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    console.log(fib);

    return fib.slice(0, n);

}



console.log(fibonacci(3));
//console.log(fibonacci(10));