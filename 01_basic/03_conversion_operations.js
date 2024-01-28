let score = "aniket"

//console.log(typeof score); output- string
//console.log(typeof(score));   output- string  
// two ways of getting typeof

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); output- Number
console.log(valueInNumber); //output-Nan (Not a Number)


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "aniket"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "aniket" => true

let someNumber = null

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);