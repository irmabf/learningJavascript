// let myBook = {
//   title: '1984',
//   author: 'George Orwell',
//   pageCount: 326
// }

// let otherBook = {
//   title: 'A Peoples History',
//   author: 'Howard Zinn',
//   pageCount: 723
// }

// //How to return an object from a function
// let getSummary = function (book) {
//   //Here we are gonna to return an object: summary is an object
//   //We are going to return two properties
//   return {
//     summary: `${book.title} by ${book.author}`,
//     pageCountSummary: `${book.title} is ${book.pageCount} pages long`
//   }

// }

// let bookSummary = getSummary(myBook);
// let otherBookSummary = getSummary(otherBook);

// console.log(bookSummary.pageCountSummary);

// Challenge

// let convertFahrenheitToCelsius = function(fahrenheit) {
//   let celsius = (fahrenheit - 32) * 5/9;
//   return celsius;
// }

// let tempOne = convertFahrenheitToCelsius(32);
// let tempTwo = convertFahrenheitToCelsius(68);

// console.log(tempOne);
// console.log(tempTwo);

//Create function - take fahrenheit in - return an object with all three

let fahrenheit = 50;

let convertFahrenheitToCelsius = function(fahrenheit){
  return {
    // celsius: ((fahrenheit - 32) * 5/9)
    fahrenheit: `${fahrenheit}º Fahrenheit`,
    kelvin: `${fahrenheit}º Fahrenheit are equal to ${(fahrenheit + 459.67) / 5/9}`,
    celsius: `${fahrenheit}º Farenheit are equal to ${(fahrenheit - 32) * 5/9}º Celsius.`,

  }

}

let temperatures = convertFahrenheitToCelsius(fahrenheit);

console.log(temperatures.fahrenheit);
console.log(temperatures.kelvin);
console.log(temperatures.celsius);

