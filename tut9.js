console.log("tut 9 ")
//Loops in JS
//General Loops : for ,while ,do-while

// for loop
for(let i =0;i<10;i++){
  console.log(i);
}
console.log("done");

// while loop
let j=0;
while(j<10){
  console.log(j);
  j++;
}
console.log("done");
// do while loop
let k=0;

do {
  console.log(k);
  k += 1;
} while (k < 10)
console.log("done");
//Break / Continue
console.log("done");
for (let i = 0; i < 10; i++) {
  if(i===5){
   continue;
  }
  if(i===6) break;
  console.log('hi ' + i);
}
console.log("done");
// forEach in JS
let arr = [2,3,5,4,6,7];
arr.forEach(function (element ) {
console.log(element);
});
console.log("done");
let arr2 = [1,2,3,4,5,6]
arr.forEach(function (element,index,array){
  console.log(index,element,array);
});
console.log("done");

//loop for objects
let obj = { name:"Yuvraj Soni",age :18,type :"student",OS : "windows"};
for(let key in obj){
  console.log(`${key} of object ${obj[key]}`);
  }
console.log("done");
