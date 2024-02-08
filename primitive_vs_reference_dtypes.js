//Primitive Datatypes

let num1 = 6;
let num2 = num1;

console.log("The value of Num1 : "+num1);
console.log("The value  of Num2 : "+num2);

num1++;
console.log("After increament of num1");
console.log("The value of Num1 : "+num1);
console.log("The value of Num2 : "+num2);

//Reference Datatypes
//Arrays

let people1=["Elon Musk","Nikola Tesla","Albert Einstein"];
let people2=people1;
console.log("The People in no. 1 are : "+people1);
console.log("The People in no. 2 are : "+people2);

people1.push("Steve Jobs");

console.log("People after pushing Steve jobs in them")
console.log("The People in no. 1 are : "+people1);
console.log("The People in no. 2 are : "+people2);


