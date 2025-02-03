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
