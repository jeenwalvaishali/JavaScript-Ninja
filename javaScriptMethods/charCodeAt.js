/* String.prototype.charCodeAt()
The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

charCodeAt() always indexes the string as a sequence of UTF-16 code units, so it may return lone surrogates. 
To get the full Unicode code point at the given index, use String.prototype.codePointAt().

Syntax
charCodeAt(index)

Parameters

index
Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.

Return value
An integer between 0 and 65535 representing the UTF-16 code unit value of the character at the specified index. 
If index is out of range of 0 – str.length - 1, charCodeAt() returns NaN.

*/

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);