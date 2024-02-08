// Hoisting - It the process of calling the function even before declaring it. 
//             And it gives the correct output.

//function declaration
// console.log(hello());
// function hello(){
//     return "Hello World !";
// }

//While it is only in the case of function declaration and not function expression

// hello(); //Cannot access 'hello' before initialization
// const hello = function(){
//     console.log("Hii World !");
// }

//Same with the case of Arrow Functions

// hello(); //Cannot access 'hello' before initialization
// const hello = () => console.log("Hii World !");


//Different behaviours for different datatypes

// console.log(hello());
// let hello = function(){
//     return "Hello World !";
// }

// console.log(hello());

// console.log(hello());
// const hello = function(){
//     return "Hello World !";
// }

// console.log(hello());

// console.log(hello());
// var hello = function(){
//     return "Hello World !";
// }

// console.log(hello());