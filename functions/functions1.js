// let square = function (num) {
//   let result = num ** 2;
//   return result;
// }
// let value = square(3);
// console.log(value);

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
