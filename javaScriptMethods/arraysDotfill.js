/* Array.prototype.fill()
The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

Syntax
fill(value)
fill(value, start)
fill(value, start, end)

Parameters
value
Value to fill the array with. Note all elements in the array will be this exact value: if value is an object, each slot in the array will reference that object.

start Optional
Zero-based index at which to start filling, converted to an integer.

Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, no index is filled.

end Optional
Zero-based index at which to end filling, converted to an integer. fill() fills up to but not including end.

Negative index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
If end < -array.length, 0 is used.
If end >= array.length or end is omitted, array.length is used, causing all indices until the end to be filled.
If end implies a position before or at the position that start implies, nothing is filled.
Return value
The modified array, filled with value.
*/


const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
