let score = "100";

console.log(typeof score); // number
console.log(typeof (score)); // number

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number

console.log(valueInNumber); // 100

let score2 = null;
console.log(Number(score2)); // 0
console.log(typeof score2); // object

let score3 = undefined;
console.log(Number(score3)); // NaN
console.log(typeof score3); // undefined


