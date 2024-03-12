/* Find the Smallest Common Multiple
Write a function that takes two numbers as input and returns the smallest common multiple of those numbers. 
The smallest common multiple is the smallest number that is divisible by both of the input numbers. 
For example, the smallest common multiple of 3 and 4 is 12.

Write a function called smallestCommonMultiple that takes two numbers as its parameters and 
returns the smallest common multiple of those */

function smallestCommon(num1, num2){

    const larger = Math.max(num1, num2);
    const smaller = Math.min(num1, num2);

    let current = larger;

    while(current % smaller !== 0){
        current = current + larger;
    }

    return current;

}

console.log(smallestCommon(3, 4)); // 12
console.log(smallestCommon(6, 9)); // 18
console.log(smallestCommon(5, 7)); // 35