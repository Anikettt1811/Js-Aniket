const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) //The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator => teen dot se ...variable,...variable (output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ])

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(1) //The flat() method in JavaScript is used to flatten nested arrays. By calling it with Infinity as an argument, you're instructing it to recursively flatten all levels of nested arrays...that argument or method states that the number of level to be flattened in nested arrays.

// console.log(real_another_array);



console.log(Array.isArray("Aniket")) //The Array.isArray() method in JavaScript is used to determine whether a given value is an array or not. If the value is an array, it returns true; otherwise, it returns false.

// console.log(Array.isArray(["Aniket"])) // output-true


console.log(Array.from("Aniket")) // Array.from() is a method in JavaScript that creates a new array instance from an array-like or iterable object. When you pass a string to Array.from(), it treats each character of the string as an element and creates an array from those characters.


console.log(Array.from({name:"aniket"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //  Array.of() method to create an array from individual variables score1, score2, and score3.