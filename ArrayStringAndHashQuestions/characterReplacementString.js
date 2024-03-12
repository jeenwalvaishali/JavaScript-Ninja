/* You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too. */

function characterReplacement(s, k) {
    let maxCount = 0; // Maximum count of repeating characters in the window
    let maxLength = 0; // Length of the longest substring with repeating characters
    let windowStart = 0; // Start index of the current window
    const charCount = new Array(26).fill(0); // Array to store the count of each character in the window

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const charIndex = s.charCodeAt(windowEnd) - 'A'.charCodeAt(0);
        charCount[charIndex]++; // Increment count of the current character
        maxCount = Math.max(maxCount, charCount[charIndex]); // Update maxCount

        // If the current window size minus the maximum count exceeds k, shrink the window
        while (windowEnd - windowStart + 1 - maxCount > k) {
            const startCharIndex = s.charCodeAt(windowStart) - 'A'.charCodeAt(0);
            charCount[startCharIndex]--; // Decrement count of the character going out of the window
            windowStart++; // Move the window start forward
        }

        // Update the maxLength if the current window size is greater
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4





/* s.charCodeAt(windowEnd): This part retrieves the Unicode value of the character at the windowEnd index of the string s. 
The charCodeAt() method in JavaScript returns the Unicode value of the character at a specified index within a string.

'A'.charCodeAt(0): This part retrieves the Unicode value of the character 'A'. 
Since 'A' is the first character in the English alphabet, its Unicode value represents the starting point for mapping characters to indices in the range [0, 25].

s.charCodeAt(windowEnd) - 'A'.charCodeAt(0): Subtracting the Unicode value of 'A' from the Unicode value of the character at windowEnd 
effectively calculates the offset of the character from 'A' in the ASCII table. This operation maps the character to an index in the range [0, 25]. */