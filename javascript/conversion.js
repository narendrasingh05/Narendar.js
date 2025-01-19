// let score = "100";

// console.log(typeof score); // number
// console.log(typeof (score)); // number

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number

//console.log(valueInNumber); // 100

// let score2 = null;
// console.log(Number(score2)); // 0
// console.log(typeof score2); // object

// let score3 = undefined;
// console.log(Number(score3)); // NaN
// console.log(typeof score3); // undefined

// "100" -> 100
// "100abc" -> NaN
//true => 1
//false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

let isLoggedIn2 = "narendar singh";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // true

let isLoggedIn3 = "";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3); // false

let isLoggedIn4 = null;
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(booleanIsLoggedIn4); // false

let isLoggedIn5 = undefined;
let booleanIsLoggedIn5 = Boolean(isLoggedIn5);
console.log(booleanIsLoggedIn5); // false

let someNumber = 100;
let stringNumber = someNumber.toString();
console.log(stringNumber); // "100"
console.log(typeof stringNumber); // string

