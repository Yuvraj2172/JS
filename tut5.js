console.log('Welcome to tut5');
// // type conversion
let myvar = 34;
console.log(34);

console.log(myvar, (typeof myvar));
myvar = String(myvar);

console.log(myvar, typeof myvar);
let booleanVar = null;
console.log(booleanVar, typeof booleanVar);

let arr = [1, 2, 3, 4, 5];
console.log(arr, typeof (String(arr)));

let i = 8;
console.log(i.toString());
let a = "3434";
console.log(typeof Number(a), typeof a);

let stri = Number(false );
console.log(stri);

let number = '36757.422';
console.log(number, typeof number);
number = parseFloat(number);
console.log(number, typeof number);

console.log(number.toFixed(6), typeof number);

// Type Coercion

let mynum = '34';
console.log(698 + mynum);

// number will get converted to string and concatenated to string

mystr = 45;
console.log(Number(mynum) + 78);
