const accountId = 123456;
let accountemail = "nk@gmail.com";
var accountPassword = "654321";
let accountState; // undefined



//accountId = 234567; // Error: Assignment to constant variable.

accountemail = "ak@gmail.com"; // No Error
accountPassword = "123456"; // No Error
accountCity = "Delhi"; // No Error

console.table([accountId, accountemail, accountPassword, accountCity, accountState]);


/*
prefer not to use var because of issuse of functionl scope
*/
