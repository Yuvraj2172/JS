let a = 1;
let b =2;
let c = 3;

function onePlusAvg(x,y){
    return Math.round(1 + (x + y) /2);
}
console.log( onePlusAvg(2,3) )

//Arrow Function
const hello = ()=>{
    console.log("Hey how are you, I am fine what about you!");
    return "Hi";
}
console.log(hello());
