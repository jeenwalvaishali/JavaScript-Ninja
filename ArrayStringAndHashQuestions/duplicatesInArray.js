/* Given an array of integers, find the duplicate elements in the array.
This problem can be solved in multiple ways, but you should aim for an efficient solution with a time complexity better than O(n^2). */


function findDuplicates(nums){

    const set = new Set();
    const duplicates = [];

    for(let num of nums){
        if(set.has(num)){
            duplicates.push(num);
        }else{
            set.add(num)
        }
    }

    return duplicates;

}

const nums = [1, 2, 3, 1, 4, 5, 6, 2];
console.log(findDuplicates(nums)); 