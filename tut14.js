console.log('This is tut 14');
// console.log(document.all);

/* element selectors
1. Single element selectors 
2.Multiple element selectors
*/ 

// 1. Single element selectors 
let element=document.getElementById('second');
element=element.className;
element = element.parentNode;
element.style.color='red';
element.innerText='hi';
element.innerHTML='<i>hi</i>';
console.log(element.innerText);

// Query Selector

// in case of class containing multiple elements . the selector will return only the first leement 
let sel = document.querySelector('.child');
 sel = document.querySelector('#myfirst');

//  we can also specify tags as an arguement inside selector
 sel = document.querySelector('h1');

//  while selecting for divs...only trhe first div will be selected 
sel = document.querySelector('div');
console.log(sel);

let elems = document.getElementsByClassName('demo');
// console.log(elems[0].getElementsByClassName('child'));

elems=document.getElementsByTagName('div');
console.log(elems);
// Array.from(elems).forEach(element >= {
//    console.log(element);
// });

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue'; 
}