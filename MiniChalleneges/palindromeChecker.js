/* Create a function that takes a string as an argument and returns true if it's a palindrome and false if it's not. 
A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. 
For example, "racecar" is a palindrome, but "hello" is not. */


function isPalindrome(str){

    const clearStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    let reverseStr = '';

    for(let i = clearStr.length-1; i>=0; i--){
        reverseStr = reverseStr + clearStr[i];
    }

    return clearStr === reverseStr;

}


console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   

