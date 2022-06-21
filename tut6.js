console.log('tut-6')
 const name ='Yuvraj';
 const greet = 'Good Morning!';
 console.log(greet +' '+ name);

let html;
html="<h1>This is heading</h1> " +
  "<p>This is para</p>";
 console.log(html);

 // to concat existing string with the string passed as a paraneter
 html=html.concat('this'," another string");
 console.log(html);

 console.log(html.length);
 console.log(html.toLowerCase());
 console.log(html.toUpperCase());
 console.log(html.includes('this',63));

//if contained in the string then it will return the starting index of string
console.log(html.indexOf('This'));

// if not contained then indexOf method wil return -1
 console.log(html.indexOf('that'));

// if a character has multiple occurence then it will return its first occurence
console.log(html.indexOf('i'));

// to find last occurence of a character we use lastIndexOf method, all remaining rules are same as that of indexOf method
// console.log(html.lastIndexOf('i'));

// to find character at particular index we can use charAt   , if it does not contain character at that index it will return nothing
console.log(html.length);
console.log(html.charAt(6));

console.log(html.endsWith('>'))
console.log(html.includes('h',0));

// in substring(a,b) method it returns string from a to b-1 indices
console.log(html.substring(0,6));

// slice and substring are both same . Except slice will return the n characters from backward driection if parameter is negative , but substring will return the whole string
console.log(html.slice(-5)) ;
console.log(html.substring(-1));

// split is used to split the string with the seperator .... if '' is provided this will lead to break the string char by char
// console.log(html.split(' '));

// to replace any substring we use replace method .It will replace only the first occurence of the parameter ...
console.log(html.replace('This','it'));

// To replace all the occrences we use replaceAll method
console.log(html.replaceAll('This','It'));

//Template Literals

let fruits=['Orange','Apple','Papaya','Mango'];
let test="Uveee";
//remember to use back-tick symbol instead of quotes or double-quotes
let myhtml=`Hello ${test} <h1>This is heading</h1>`;
console.log( myhtml);

document.body.innerHTML=myhtml;
