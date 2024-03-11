/* Reverse a String
Write a function that takes a string as input and returns the string reversed. For example, if the input string is "hello", the function should return "olleh". */

function reverseAString(str){
    let reverseStr = '';

    for(let i = str.length - 1; i>=0; i--){
        reverseStr = reverseStr + str[i];
    }

    return reverseStr;
}


function reverseAStringAlt(str){
    // Split the string into an array of characters
    const chars = str.split("");
 
    // Reverse the array of characters
    const reversed = chars.reverse();

    // Join the array of characters back into a string
    const result = reversed.join("");

    // Return the reversed string
    return result;  

}

console.log(reverseAStringAlt('Hello'));