// let num = 103.441;

// console.log(num.toFixed(2));

// console.log(num);

// //if >=.5 round up
// console.log(Math.round(num));

// //round down
// console.log(Math.floor(num));
// //round up
// console.log(Math.ceil(num));

// let min = 10;
// let max = 20
// let random = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(random);

//Challege area
// 1 - 5 - true if correct - false if not correct
// let min = 1;
// let max = 5;
// let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

//Guess a number between 1 and 5
let makeGuess = function(guess){
  let min = 0;
  let max = 5;
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return guess === randomNum
}
console.log(makeGuess(1));
