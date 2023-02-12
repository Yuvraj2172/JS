/* Use of vas should be deprecated*/
console.log('JavScript tut 3 : var , let and const');
var a = 45;
var b = 'Yuvraj';
const c = 56;
var d = undefined;

console.log(b);
{
    var b = 'this'
    let c = 36;
    console.log(c);
    console.log(b);
}
//c = 90; // error
console.log(b);