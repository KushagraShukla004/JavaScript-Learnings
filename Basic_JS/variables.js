const accountId = 1;
let accountEmail = "kush@gmail.com";
//we never use var now because of "Scope" related problems
var accountPassword = "pass@123";
accountCity = "Delhi";

// accountId = 2;
// console.log(accountId); //TypeError: Assignment to constant variable. Because accountId is const which can not be changed

accountEmail = "kush1@gmail.com";
accountPassword = "123";
accountCity = "Pune";

console.table([accountEmail, accountPassword, accountCity]);
