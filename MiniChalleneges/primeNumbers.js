/* Check for Prime Numbers
Write a function that takes a number as input and returns true if it's a prime number and false if it's not. 
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 
For example, 2, 3, 5, 7, 11, and 13 are prime numbers, but 4, 6, 8, and 9 are not. */

function isPrime(num){

    if(num < 2){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;

}

console.log(isPrime(2)); 
console.log(isPrime(3)); 
console.log(isPrime(4)); 
console.log(isPrime(5)); 
console.log(isPrime(6)); 
console.log(isPrime(7)); 