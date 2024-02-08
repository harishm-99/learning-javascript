// //Array is a reference type object
let fruits = ["apple","grapes","guava"];
// console.log(fruits);
// fruits[0]="banana";
// console.log(fruits);

let obj={};//object literal
//array is an object in js
console.log(typeof(fruits));
console.log(typeof(obj));
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// Arrays are special type of objects. 
//Array Elements Can be Objects
// We can Have objects, functions as well as arrays in an Array

// Arrays vs objects

// Arrays use numbers to access its "elements".
const person = ["John",46,"doe"];
console.log(person[2])+"/n";

// Objects uses names to access its "members". 
const person1 = {firstName:"John", lastName:"Doe", age:46};
console.log(person1.firstName)
console.log(person.sort());//sorting Array Elements


//Array Literal declaration for simplicity

const cars = new Array("Lamborghini","Porsche","Mustang GT");
console.log(cars);


