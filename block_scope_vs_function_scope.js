// //function scope vs block scope

// //let and const are blockscope - can be accessed only from inside the block not from outside


// // let globVar = "This is global";
// // {
// //     let var1 = "Hello World";
// //     console.log(var1);
// //     console.log("Global Var Can be accessed : ",globVar)

// // }
// // console.log(var1);//Cannot be Accessed
// // console.log("Global Var Can be accessed : ",globVar)

// //var is a function scope - can be accessed from anywhere within the function block including the nested functions


// function scope(){
//     var dobara = "Phirse! Hello World";
//     {
//         var isko = "Hii ! Main Isko."
//         console.log(dobara);//Accessing from a nested function
//     }
//     console.log(isko);
//     // console.log(dobara);
//     innerFunc();
// }
// scope();
// // console.log(dobara);//Cannot be Accessed

// {
//     var isko = "Kya ?";
// }

// console.log(isko);

function myApp(){
    if(true){
        var firstName = "Harish";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();