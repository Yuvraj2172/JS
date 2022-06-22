console.log('This is tut15')
let cont = document.querySelector('.no');
cont = document.querySelector('.container');

// .childNodes will consider all the contents while selecting even the text and comments also . 
// console.log(cont.childNodes);

// to ignore text and comments while selecting ... we utilise childern
// console.log(cont.children);

// let nodeName =cont.childNodes[1].nodeName;
// console.log(nodeName);
// let nodeType=cont.childNodes[1].nodeType;
// console.log(nodeType);

// Node types
// 1. element 
// 2. attribute 
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild)
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.children)
// console.log(container.childElementCount); //this counts only child elements

// console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);