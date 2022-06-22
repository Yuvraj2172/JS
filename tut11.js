console.log('This is tut 11');
let a = window;
console.log(a);
// both will work same 
// alert('hio')
// window.alert('hi');
// a=prompt('This is prompt');
// a=confirm('Are you sure you want to sumit this form');
// a=window.document;
// a=window.innerWidth
// a=scrollX;
// a=location.toString();
a=window.history;

// to go one step forward 
history.go(1);

// to go one step backward
history.go(-1);

console.log(a);