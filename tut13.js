// Exercise 1
// You have to create a variable , which conatins valid link you are interested in ... You have to fetch all the links from the given page which contains this text

// for ex - from tutorialspoint we want to fetch only those links which contains "javascript"

let a=document;
a=document.links;
Array.from(a).forEach(function (element){
   if(element.href.includes('javascript')){
    console.log(element.href);
   }
});