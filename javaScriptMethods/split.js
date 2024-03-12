/* String.prototype.split()
The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, 
puts these substrings into an array, and returns the array.

Syntax
split(separator)
split(separator, limit)

Parameters

separator
The pattern describing where each split should occur. Can be undefined, a string, or an object with a Symbol.split method — the typical example being a regular expression. Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. All values that are not undefined or objects with a @@split method are coerced to strings.

limit Optional
A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.

The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
If limit is 0, [] is returned.

Return value
An Array of strings, split at each point where the separator occurs in the given string.
*/


const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars);
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

const str1 = "lint:;code:;love:;you";
const strSplit = str1.split(":;");
console.log(strSplit);
