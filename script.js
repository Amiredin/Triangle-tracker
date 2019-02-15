function tap(){
var functiona = document.getElementById("data1").value;
var functionb = document.getElementById("data2").value;
var functionc= document.getElementById("data3").value;
var functionA= parseInt(functiona);
var functionB= parseInt(functionb);
var functionC= parseInt(functionc);
console.log(functionA)
console.log(functionB)
console.log(functionC)
if (functionA + functionB < functionC || functionB + functionC < functionA || functionA + functionC < functionB) {
alert("Not atriangle Enter value again");
}
else if (functionA === functionB && functionB === functionC && functionA === functionC){
alert("Equilateral Triangle")
}
else if (functionA === functionB || functionB === functionC || functionA === functionC){
alert("isocleces")
}
else if (functionA !== functionB || functionB !== functionC || functionA !== functionC) {
alert("scalene Triangle");
}
}
