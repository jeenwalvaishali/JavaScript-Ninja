/* Given a string S, find the length of the longest substring T that contains at most k distinct characters.

Example
Example 1:

Input: S = "eceba" and k = 2
Output: 3
Explanation: T = "eceb"

Example 2:
Input: S = "WORLD" and k = 4
Output: 4
Explanation: T = "WORL" or "ORLD" */

function longestSubstringKDistinct(str, k){

    let maxLength = 0;
    let windowStart = 0;
    const charFrequency = {};

    for(let windowEnd = 0; windowEnd < str.length; windowEnd++){
        const rightChar = str[windowEnd];
        charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;
 

    while(Object.keys(charFrequency).length > k){

        const leftChar = str[windowStart];
        charFrequency[leftChar]--;

        if(charFrequency[leftChar] === 0){
            delete charFrequency[leftChar];
        }

        windowStart++;
    }

    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
 }

 return maxLength;

}

console.log(longestSubstringKDistinct("eceba", 2)); 
console.log(longestSubstringKDistinct("WORLD", 4)); 