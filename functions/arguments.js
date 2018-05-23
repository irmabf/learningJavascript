//Multiple arguments
// let add = function(a, b, c) {
//   return (a * b)/c;
// }

// let result = add(5, 10, 25);
// console.log(result);

//Default arguments
// let getScoreText = function(name = 'Anonymous' , score = 0) {
//   return 'Name: ' + name + ' - Score: ' + score;
// }

// getScoreText();
// getScoreText('Andrew', 10);

// let scoreText = getScoreText('Andrew', 100);
// let scoreText = getScoreText(undefined, 99);
// console.log(scoreText);

//Challenge area
//Tip calculator
//Function that takes total, tipPercent
//It doesnt make sense to have a default for the total
//but for the tipPercent it does, for ex: 20% -> 0.2
//Run the calculation and return the value

//TIP CALCULATOR
let getTip = function (total, tipPercent = .2){
  return 'Your total is: ' + total + ' - Your tip is '+ tipPercent*total;
}

let tip = getTip(100, .5);
console.log(tip);