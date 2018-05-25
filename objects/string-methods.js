let name = 'Andrew Mead';

// console.log(name.length);

// console.log(name.toUpperCase());

// console.log(name.toLowerCase());

// let password = 'abc123password098';
// // console.log(password.includes('password'));

// let warning = password.includes('password');

// if (warning){
//   console.log('You should not include password as a word in your password');
// }else{
//   console.log('OK');
// }

// let data = ' dss dds dd ';
// console.log(data);
// console.log(data.trim());

//Challenge area

//isValidPassword

//lenght is more than 8 - and it doesnt contain the word password

// const isValidPassword = function(password){
//   password.trim();
//   if (password.length > 8 && !password.includes('password') ){
//     console.log('Your password is not valid');
//   }else{
//     console.log('Your password is  valid');
//   }
// }

// isValidPassword('asefgs');
// isValidPassword('asfahshapassword');
// isValidPassword('ahdhskvhdusahahdh');

let isValidPassword = function(password){
  if (password.length > 8 && !password.includes('password')){
    return true;
  }else{
    return false;
  }
}

console.log(isValidPassword('asefgs'));
console.log(isValidPassword('asfahshapassword'));
console.log(isValidPassword('ahdhskvhdusahahdh'));

