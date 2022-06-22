console.log('Welcome to tut8');
let age= 65;
// == operator checks only for value
// while === operator checks for value as well as its type
// so we use === and !== to check for inequality

// if(age!==19)
// console.log("Age is 19");
// else if(age===65){
//   console.log('Age is '+age);
// }
// else {
//   console.log("Age is not 19");
// }

// const vari=34;
// console.log('vari is defined')

let vari=9;
// undefined is assigned as a type to a variable until and unless
//any value is assigned to it

// if(typeof vari!=='undefined'){
//   console.log('vari is defined');
// }
// else {
//   console.log('var is not defined');
// }

let doesdrive=true;
// if(doesdrive ){
//   console.log('Yes you can drive');
// }
// else {
//   console.log("No you cannot drive");
// }

// if (doesdrive && age>=65){
//   console.log("Yes you can drive");
// }
// else{
//   console.log("No you cant drive");
// }

//Tennary Operators
// console.log(age===65  ? 'Age is 65 ' : 'Age is not 65');

//Switch-Case Statements
age= 79;
switch(age){
  case 18:console.log("you are 18");
  break;
  case 65 : console.log("you are 65");
  break;
  case 79:console.log("you are 79");
  break;
  default: console.log("Some other age");
  break;
}
