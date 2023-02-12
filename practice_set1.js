let a = "string";
let b = 45;
a +=b;
console.log(a);
console.log(typeof  a);

const obj = {
    name : "Yuvraj",
    age : 19,
    section : "D"
}
// obj = "Soni"; // Error

obj["Soni"] = "Surname";
console.log(obj);

const dict = {
    car : "vehicle",
    appreciate: "recognize the full worth of",
    ataraxia : "a state of freedom from emotional disturbance and anxiety",
    yakka : "hardwork"
}

// Both works same
console.log(dict["yakka"]);
console.log(dict.yakka);