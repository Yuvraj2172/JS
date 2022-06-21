console.log('We are in tut-7');
// The Array methods changes the original array

let marks=[14,45,63,65,3,32];


const fruits=["apple","banana","kiwi","pappaya"];

const mixed= [1,"papaaa",2,"brinjal",3,4];

const arr = new Array(2,3,4,5,"hii");

// console.log(arr);
// console.log(marks);
// console.log(mixed);
// console.log(fruits);

// indexing starts from 0 in JS .
// console.log(arr[1]);

// Array.isArray(paramter) is used to check whether the passed parameter is array or not...
// Returns boolean value according to the result
// console.log(Array.isArray(mixed));

// console.log(arr)
arr[0]="Yuvraj";
// console.log(arr);

// .indexOf returns the index of the paramater passed .
//   If not present it returns -1
let val = marks.indexOf(65);
// console.log(val);

//Mutating or Modifying Arrays
// console.log(marks);
marks.push(101);
// console.log(marks);

// to insert at the front we use unshift method
marks.unshift(95);
// console.log(marks);

// removes the last element
marks.pop();
// console.log(marks)

// to removethe element from begining
// we use shift() method of array
marks.shift();
// console.log(marks);

// to remove n elements from a specified range
// we use splice() method splice(start index , delete count)
marks.splice(1,2);
// console.log(marks);

// to reverse the array we use reverse()
marks.reverse();
// console.log(marks);

// to join two arrays we use concat() method of Arrays
let marks2=[4,5,6,7];
marks = marks.concat(marks2);
// console.log(marks)

//Objects
// object is just like dictionary of JS
let myobj={ name:'Yuvraj', eatsfood: true,marks: [13,34,5,3],'last name':"soni"};
console.log(myobj.marks);
//to give space in keys we create it as string
// keys can be accessed using both dot(.) operator and square brakets[]
console.log(myobj["last name"] )

