const si=(p,r,t)=> ((p*r*t)/100)

let p=Number(prompt("Enter the amount"));
let r= Number(prompt("Enter the interest"));
let year=Number(prompt("Enter the year"));
let month=Number(prompt("Enter the month"));

var t=year+(month/12);


var num =si(p,r,t);
var total=p+num;
alert("simple interest:"+ num);
alert("total amount:"+total);
