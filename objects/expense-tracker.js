let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0
}

let addExpense = function (account, ammount){
  account.expenses = account.expenses + ammount
}

// fn addIncome
//      arguments: account to manipulate, amount of income that we want to add
let addIncome = function(account, income){
  account.income = account.income + income
}
// fn resetAccount
      //should reset the expenses and the income for an account to 0
      //argument: which account to change

let resetAccount = function(account){
  account.expenses = 0,
  account.income = 0
}
// fn getAccountSummary
    //this function is gonna print the account summary: current account expenses and income and owner
let getAccountSummary = function(account){
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance} balance. $${account.income} in income. $${account.expenses} in expenses`;
}
  //Account for Andrew has a balance $900 , $1000 in income. $100 in expenses


addIncome(myAccount, 2000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));