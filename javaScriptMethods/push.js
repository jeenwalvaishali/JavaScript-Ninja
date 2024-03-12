/* Array.prototype.push()
The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

Syntax
push()
push(element1)
push(element1, element2)
push(element1, element2,  elementN)

Parameters
element1, …, elementN
The element(s) to add to the end of the array.

Return value
The new length property of the object upon which the method was called.

*/

const animals = ['pigs', 'goats', 'sheeps']

const count = animals.push('cows')
console.log(count)
console.log(animals)

animals.push('deer', 'elephant')
console.log(animals)

animals.push('chickens', 'cats', 'dogs');
console.log(animals)