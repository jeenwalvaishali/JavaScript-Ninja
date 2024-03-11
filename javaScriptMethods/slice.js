/* Array.prototype.slice()
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array. The original array will not be modified. 

Syntax
slice()
slice(start)
slice(start, end)

Parameters
start (Optional)
Zero-based index at which to start extraction, converted to an integer.

Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, nothing is extracted.

end (Optional)
Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

Negative index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
If end < -array.length, 0 is used.
If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
If end implies a position before or at the position that start implies, nothing is extracted.

Return value
A new array containing the extracted elements.

*/


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2));

console.log(animals.slice(2, -1));

console.log(animals.slice());


