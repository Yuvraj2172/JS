//Array Methods
 let num = [1,2,34,3];

let b = num.toString();
console.log(b);

let c = num.join("Yuvraj");
console.log(c,typeof c);

num.push(23);
console.log(num);

// removes the first element of the array
console.log(num.shift());
console.log(num);

// add the elemets at starting index and returns the new array length...
let r =num.unshift(121212);
console.log(num, r);
