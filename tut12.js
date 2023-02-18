//problem 1
let marks = { 'rohan' : 40 , 'yuvraj' : 100};
for(let i = 0; i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i] + " " + marks[Object.keys(marks)[i]]);
}
//Problem 2
for ( item in marks){
    console.log( item + ":"+ marks[item]);
}


let cNum = 21;
let i ;
while(i!==cNum){
i =prompt("Enter a Number");
}
console.log("Correct Number found");

let cNum = 12;
let i ;
while(i!==cNum){
i =Number(prompt("Enter a Number"));
}
console.log("Correct Number found");

let x = "Hii";
console.log(Number(x));
const mean =(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(mean(1,2,3,4));