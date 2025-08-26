const accountId = 12345
let accountEmail = "sachin@google.com"
var accountPassword ="54321"
accountCity = "Nagpur"

//  accountId = 2   // not allowed

accountEmail = "sach@gmail.com"
accountPassword = "4323"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table( [accountEmail, accountId, accountPassword,accountCity])