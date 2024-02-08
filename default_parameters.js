// function Greet(name = "Guest"){
//     console.log(`Hello, ${name} !`);
// } 

// Greet();
// Greet("Alice");

//If b is not defined

// function addTwo(a,b){
//     return a+b;
// }

// console.log(addTwo(5));
//Previously

// function addTwo(a,b){
//     if(typeof b == "undefined"){
//         b=1;
//     }
//     return a+b;
// }

//Now with Default Parameters

// function addTwo(a,b=0){
//     return a+b;
// }

// console.log(addTwo(2));