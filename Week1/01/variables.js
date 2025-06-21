const accountId = 144553
let accountEmail = "anjali@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "anmalviya@gmail"
accountPassword = "123456"
accountCity = "Delhi"

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountId, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

