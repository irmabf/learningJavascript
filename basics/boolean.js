//let temp = 31;
//let isFreezing = temp === 31;
//let isFreezing = temp !== 31;

//let isFreezing = temp < 32;
//let isFreezing = temp <= 32;
//console.log(isFreezing);

//Challenge area

//Create age area set to an age
//calculate is child, if they are 7 or under
//Calculate is senior if they are 65 or older
//print

/*
let age = 70;

let isChild  = age <= 7;
let isSenior = age >= 65;

console.log(`You are a child:${isChild}`);
console.log(`You are a senior:${isSenior}`);

*/
/*
let temp = 32;
let isFreezing = temp === 31;

let weather = () => {
  if (isFreezing) {
    return console.log(`It is freezing outside`);
  }
  console.log(`It is not freezing`);
}

weather();*
*/


let isAccountLocked = false;
let userRole = 'admin';


if (isAccountLocked){
  console.log('The account is locked');
}else if (userRole === 'admin') {
  console.log('Welcome admin');
}else{
  console.log('Sorry, you are not allowed to do that');
}







































