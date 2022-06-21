console.log('tut 10');
// // functions in JS
 function greet(name,thanks="Thank You"){
  console.log(`Happy Birthday ${name}... ${thanks}`);
// //   // return 'thanks';
 }
 let name ='Yuvraj';
greet(name)
console.log('done');

// // thanks will replace the default value of the parameter definded in function definition
let thanks = "Thanks a lot"
 greet(name,thanks);
console.log('done');

const mygreet = function (name,thanks='Thank you !means a lot '){
   let msg = `Happy Birthday ${name} ..... ${thanks}`;
   return msg;
 }

  console.log(mygreet(name,thanks));
console.log('done');

 const obj = {name :'skillf' ,game:function (){
return 'GTA'
  }};
 
 console.log(obj.game());
console.log('done');

 let arr = ['fruits','vegetable','furniture'];
 arr.forEach(function (element){
   console.log(element);
 });

console.log('done');
const i=234;
console.log(i);
function random(name){
  var i=9;
  console.log(i)
  return `This is a randomly created function by ${name}`;
}
console.log(random('Yuvraj'),i);
console.log('done');
