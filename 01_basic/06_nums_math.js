// const score = 400
// // console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// // +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.2));// top value
console.log(Math.floor(4.1));//least value
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); // ye humesha 0 se 1 ke bich me  koi random value deta h
// console.log((Math.random()*10) + 1); // zero ni aaye esliye +1 kiye hai
// console.log(Math.ceil(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.ceil(Math.random() * (max - min + 1)) + min)