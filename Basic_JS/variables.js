const accountId = 1;
let accountEmail = "kush@gmail.com";
//we never use var now because of "Scope" related problems
var accountPassword = "pass@123";
accountCity = "Delhi";

let accountState; // undefined

// accountId = 2;
// console.log(accountId); //TypeError: Assignment to constant variable. Because accountId is const which can not be changed

accountEmail = "kush1@gmail.com";
accountPassword = "123";
accountCity = "Pune";

console.table([accountEmail, accountPassword, accountCity, accountState]);

// Fun Fact
// if we loose check for null like
// x==null then both (x==null and x==undefined) is True
// Because ==(loose equality) converts types to match before comparing.
let x = null;

console.log("x==null: ", x == null); //true
console.log("x==undefined: ", x == undefined); //true
