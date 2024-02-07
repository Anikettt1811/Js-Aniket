// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeors[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) //The unshift() method inserts the given values to the beginning of an array-like object.....ye usually todo list sbme kaam aata

myArr.shift() // The shift() method removes the element at the zeroth index and shifts the values at consecutive indexes down, then returns the removed value

// console.log(myArr.includes(9)); // The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// console.log(myArr);

// console.log(myArr.indexOf(5)); //The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const newArr = myArr.join() //The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


console.log("C ", myArr);
console.log(myn2);