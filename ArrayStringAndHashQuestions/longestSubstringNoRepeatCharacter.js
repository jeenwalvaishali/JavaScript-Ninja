/* Given a string s, find the length of the longest substring without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. */

function longestString(str){

    let maxlength = 0;
    let windowStart = 0;
    const charIndexMap = {};

    for(let windowEnd = 0; windowEnd<str.length; windowEnd++){

        const currentChar = str[windowEnd];
        

        if(charIndexMap[currentChar] >= windowStart){
            windowStart = charIndexMap[currentChar] + 1;
        }

        charIndexMap[currentChar] = windowEnd;

        maxlength = Math.max(maxlength, windowEnd - windowStart + 1)
    }

    return maxlength;
}

console.log(longestString("pwwkew"));