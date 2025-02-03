"use strict"; // to enable strict mode
//alert(3 + 3); // 6 , we are useing node.js so alert will not work

//Code readabilty shuld be frist priority
// 1. Use camelCase for identifiers
// 2. Use 2 spaces for indentation
// 3. Use single quotes for strings
// 4. End lines with semicolons ;
// 5. Use === instead of 
// 6. Use descriptive names for variables and functions
// 7. Use // for comments
// 8. Use /* */ for multi line comments
// 9. Use 'use strict' at the beginning of the file
// 10. Declare variables at the beginning of their scope
// 11. Use constants for values that do not change
// 12. Use shorthand notations
// 13. Use array literals
// 14. Use object literals
// 15. Use ternary operators

//data types
// Number => 2 to the power of 53 - 1
// String => 'Hello'
// Boolean => true or false
// Undefined => undefined
// Null => null
// Object => {name: 'John', age: 30}
// Symbol => Symbol('unique')
//bigint => 9007199254740991n

//typeof operator
let message = 'Hello';
console.log(typeof message); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {name: 'John', age: 30}); // object
console.log(typeof Symbol('unique')); // symbol
console.log(typeof 9007199254740991n); // bigint

//object
let user = {
    name: 'John',
    age: 30
};
console.log(user.name); // John
console.log(user.age); // 30

//number
let num = 100;
console.log(num); // 100

//string
let str = 'Hello';
console.log(str); // Hello

//boolean
let isGreater = 4 > 1;
console.log(isGreater); // true

//null
let age = null;
console.log(age); // null

//undefined
let x;
console.log(x); // undefined

//symbol
let id = Symbol('id');
console.log(id); // Symbol(id)

//bigint
let value = 9007199254740991n;
console.log(value); // 9007199254740991n

