//Undefined for variable
let name;
name = 'Jen';

if (name === undefined){
  console.log('Please provide a name');
}else{
  console.log(name);
}

//Undefined for funcion arguments 
let square = function (num){
  console.log(num);
}
square();

//Undefined for no returned values

let result = square();
console.log(result);

//Clear a value, null is meant to be assigned for that
let age = 22;

age = null;

console.log(age);