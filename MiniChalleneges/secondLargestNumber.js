/* Find the Second Largest Number
Write a function that takes an array of numbers as input and returns the second largest number in the array. 
For example, if the input array is [5, 10, 7, 2, 1], the function should return 7.

Write a function called secondLargest that takes an array of numbers as its parameter and 
returns the second largest number in the array. */


function secondlargestNum(arr){

     let largestNumber = arr[0];
     let secondLargest = arr[0];


     for(let i = 1; i<arr.length; i++){
        if(arr[i] > largestNumber){
            secondLargest = largestNumber;
            largestNumber = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largestNumber){
            secondLargest = arr[i];
        }
     }

     return secondLargest;

}

console.log(secondlargestNum([5, 10, 7, 2, 1]));
console.log(secondlargestNum([20, 10, 30, 40, 50]));
console.log(secondlargestNum([-10, -5, -20, -30, 0]));