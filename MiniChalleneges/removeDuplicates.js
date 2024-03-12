/* Remove Duplicates from an Array
Write a function that takes an array as input and returns a new array with all duplicate elements removed. 
For example, if the input array is [1, 2, 2, 3, 4, 4, 5], the function should return [1, 2, 3, 4, 5].

Write a function called removeDuplicates that takes an array as its parameter and 
returns a new array with all duplicate elements removed. */

function removeDuplicates(arr){
    let uniqueArr = [];

    for(let i = 0; i<arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }


    return uniqueArr;
}


const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); 