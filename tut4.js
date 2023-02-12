/* Primitives and Objects in JavaScript */
/* nn bb ss u - Primitive Datatype in JS */
let a = null;
let b = 345;
let c = true;
let d = BigInt("123") + BigInt("5");
let e = "Yuvraj"
let f = Symbol(" I am a nice symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof  d);
console.log(typeof  f);

const item =
    { "yuvraj": true,
    "Soni" : false,
    "Ashu" : true,
    "Yash" : "right"
}
console.log(item["Yash"]);
console.log(item["Yah"]); // undefined