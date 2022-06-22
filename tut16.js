console.log('This is tut 16');
let element= document.createElement('li');
let text = document.createTextNode('I am a text Node');

element.appendChild(text);
// adding a class name to element 
// element.className='chuldul';
// element.id='createdLi';
// element.setAttribute('title','mytitle');
// element.innerText = 'this is the newly appended element';  // this is the newly appended element
// element.innerHTML = '<b>this is the newly appended element</b>' // bolded (this is the newly appended element)

// appending the created element to DOM
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(element);

let elem2= document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode = document.createTextNode('This is created node for elem2');
elem2.appendChild(tnode);

// replacing element elem by elem2
element.replaceWith(elem2);
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));


// removing a child 
myul.removeChild(document.getElementById('lui'));
let pr=elem2.getAttribute('id')
console.log(pr,elem2);

// tells whether an attribute is present inside an element or not 
 pr=elem2.hasAttribute('class');
 console.log(pr);

//  removing a attribute from element
elem2.removeAttribute('id');
console.log(elem2);