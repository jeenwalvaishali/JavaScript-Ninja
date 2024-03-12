/* Sum of Digits
Write a function that takes a number as input and returns the sum of its digits. 
For example, if the input number is 123, the function should return 6 (1 + 2 + 3 = 6). */


function sumDigits(num){

    let sum = 0;

    let numString = num.toString();

    for(let i = 0; i<numString.length; i++){
        sum = sum + parseInt(numString[i]);
    }

    return sum;

}

console.log(sumDigits(123)); 
console.log(sumDigits(456)); 
console.log(sumDigits(789));