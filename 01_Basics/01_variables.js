const accountId = 24045118
let accountEmail = "sanskruti.toley.che@itbhu.ac.in"
var accountPassword = "Sa@230506"
accountCity = "Varanasi" // Don't use this method to store variables
let accountState; // Unassigned variable is considered undefined by JS 

// accountId = 24045119 // assigning value to const is not allowed 

accountEmail = "sanskrutitoley@gmail.com"
accountPassword = "Sa@23052006"
accountCity = "Akola"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
Use const for constant declaration and use let for declaring variables.
Prefer NOT to use var because of issue in bloack scope and functional scope.
*/


