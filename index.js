

function age(){
 var d1 = document.getElementById('date').value;
 var m1 = document.getElementById('month').value;
 var y1 = document.getElementById('year').value;

 console.log(d1)
 console.log(m1)
 console.log(y1)

 var date = new Date();// new Date() is a javascript method that collects time from your device
var d2 = date.getDate();
var m2 = 1+date.getMonth();
var y2 = date.getFullYear();
var month = [31,28,31,30,31,30,31,31,30,31,30,31];
console.log(d2)
console.log(m2)
console.log(y2)
console.log(month)

if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
}
if(m1 > m2){
 m2 = m2 + 12;
 y2 = y2 -1;
}
var d = d2-d1;
var m = m2-m1;
var y = y2-y1;

document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+" Days"
}
 