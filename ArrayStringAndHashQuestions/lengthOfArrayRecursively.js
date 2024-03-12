function lengthOfArray(arr){

    

    if(arr.length === 0){
        return 0;
    }else{
        //console.log(arr.slice(1))
        return 1 + lengthOfArray(arr.slice(1));
    }

}

// lengthOfArray([1, 2, 3])
// Test cases
console.log(lengthOfArray([])); // Output: 0
console.log(lengthOfArray([1, 2, 3])); // Output: 3
console.log(lengthOfArray([4, 5, 6, 7])); // Output: 4