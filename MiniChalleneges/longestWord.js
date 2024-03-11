/* Find the Longest Word
Write a function that takes a string and returns the longest word in the string. 
If there are two or more words that are of the same length, return the first one that appears in the string. 
For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "quick". */

function longestWordInString(str){

    const words = str.split(" ");
    // console.log(words)

    let longestWord = "";
    for(let i = 0; i<words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }


    return longestWord;

}

console.log(longestWordInString("The quick brown fox jumps over the lazy dog"));
console.log(longestWordInString("My name is Vaishali"));