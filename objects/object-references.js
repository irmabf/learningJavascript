// let myAccount = {
//  name: 'Andrew Mead',
  // expenses: 0,
//  income: 0
// }

// let addExpense = function (account, expensedAmmount) {
//   // return {
//   //   expense: account.expenses = account.expenses + expensedAmmount
//   // }
//   account = {}
//   console.log(account);

// }

// addExpense(myAccount, 20);
// console.log(myAccount);
// let firstExpense = addExpense(myAccount, 500);

// console.log(firstExpense.expense);

// let secondExpense = addExpense(myAccount, 275);

// console.log(secondExpense.expense);

//How it works:

//We are not getting a new object, we are getting a reference
//to the exact same object stored in memory, myAccount is
//a pointer to the object

/****************** HOWEVER ***************************** */
/**
 * When we pass an object into a function we can manipulate its properties,
 * if we manipulate its properties we are manipulating the properties
 * of the object originally passed in.
 *
 * BUT IF WE ASSIGN  A NEW VALUE TO THAT OBJECT WE BREAK THIS BINDING
 * completely, now account   not point to the same thing that myAccount.
 */



let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50);
console.log(myAccount);