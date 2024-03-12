/* Capitalize the First Letter of Each Word
Write a function that takes a string as input and returns the string with the first letter of each word capitalized. 
For example, if the input string is "the quick brown fox", the function should return "The Quick Brown Fox". */

function capitalFirstLetter(str){

    // Split the string into an array of words
    const words = str.split(" ");

    // Initialize an empty array to store the capitalized words
    const capitalize = [];

    // Loop through the array of words and capitalize the first letter of each one
    for(let i = 0; i < words.length; i++){
        const word = words[i];
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalize.push(capitalizedWord); 
    }

     // Join the array of capitalized words back into a single string
    const result = capitalize.join(" ");

    // Return the string with capitalized words
    return result;
}


console.log(capitalFirstLetter("the quick brown fox")); 
console.log(capitalFirstLetter("hello world"));