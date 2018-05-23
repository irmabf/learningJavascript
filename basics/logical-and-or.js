// let temp = 55;

// if (temp >= 60 && (temp<=90)){
//   console.log('Its pretty nice out');
// } else if (temp <= 0 || (temp>=120)){
//   console.log('Do not go outside');
// }else{
//   console.log('Eh, do what you want');
// }

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan){
  console.log('What vegan dish do you want');
}else if (isGuestOneVegan || isGuestTwoVegan){
  console.log('We have some vegan dish')
}else{
  console.log('What do you want');
}