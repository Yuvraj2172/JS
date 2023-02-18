//More Array Methods
let num = [1,2,3,4,5,6,7,8];
console.log(num.length)
delete num[2];
console.log(num, num.length);
// for(let i =0;i<num.length;i++)console.log(num[i]);
let num1 = [1,2,3];
let num_more = [11,12,13];
let newArray=num1.concat(num_more,num1);
// console.log(newArray);
let compare=(a,b)=>{
    return a-b;
}
num.sort(compare);
console.log(num);

