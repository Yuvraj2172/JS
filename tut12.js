console.log('Welcome to tut12.js')
let a =document;
// to get all the tags in website...Is is a arary-type object but array methods doesn't work here
// a=document.all;
// a=document.body
// a=document.forms;

// Create an Array with the help of a
// Array.from(a).forEach(function (element){
//     console.log(element);
// });

a=document.links[0];
console.log(a);
a=document.images;

// images crawler from webpage
Array.from(a).forEach(function(element){
    console.log(element);
});

// scripts crawler from webpage
b=document.scripts;
Array.from(a).forEach(function (element){
    console.log(element);
});
