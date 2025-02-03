"use strict";
//conversion & operations

//convert string to number
let str = '100';
let num = Number(str);
console.log(num); // 100

//convert number to string
let num1 = 100;
let str1 = num1.toString();
console.log(str1); // 100

//convert string to boolean
let str2 = 'true';
let bool = Boolean(str2);
console.log(bool); // true

//convert boolean to string
let bool1 = true;
let str3 = bool1.toString();
console.log(str3); // true

//convert number to boolean
let num2 = 100;
let bool2 = Boolean(num2);
console.log(bool2); // true

//convert boolean to number
let bool3 = true;
let num3 = Number(bool3);
console.log(num3); // 1

//NaN
let num4 = Number('Hello');
console.log(num4); // NaN

//operations
let a = 10;
let b = 20;
let c = a + b;
console.log(c); // 30

let d = a - b;
console.log(d); // -10

let e = a * b;
console.log(e); // 200

let f = a / b;
console.log(f); // 0.5

let g = a % b;
console.log(g); // 10

let h = a ** b;
console.log(h); // 100000000000000000000

let i = a++;
console.log(i); // 10

let j = b--;
console.log(j); // 20

let k = a += b;
console.log(k); // 30

let l = a -= b;
console.log(l); // 10

let m = a *= b;
console.log(m); // 200

let str4 = str1 + str2;
console.log(str4); // 100true

