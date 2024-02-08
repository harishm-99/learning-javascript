
//Function Expressions

//This Function 

// function print(){
//     console.log("Hey there Everyone ! Whasaappppp");
// }

//can also be written like this

// const greet = function(){
//     console.log("Good Morning Everyone !");
// }

// greet();


//Function to Add Two Numbers

// const addNumbers = function(){
//     // console.log(3+4);
//     return 3+4;//We use return in order to genrate the value and not print it
// }

// console.log(addNumbers());

// //Using Variables as arguments in order to reuse the code of the function 
// const sum = function(num1,num2){
//     return num1+num2;
// }

// const total = sum(27,23);
// console.log(total);
// const total2 = sum(34,92);// Reusing the Code
// console.log(total2);

//Program for Even Number Input

// const even = function (number){
//     // if(number%2==0){
//     //     return true;
//     // }
//     //This way

//     // else{
//     //     return false;
//     // }
//     //Or This way
//     // return false;

//     //Or This way
//     return number%2===0;
// }

// const check = even(20);
// console.log(check);

// function
// Input : string
// Output : first character

// const Firstchar = function(InputString){
//     return InputString[0];
// }

// console.log(Firstchar("Hello World"))

// function - Input : array, target (number)
// Output : index of target present in array

// const targetArrayIndex = function(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const MeraArray = [1,2,3,4,5,6,7];
// const ans = targetArrayIndex(MeraArray,5);

// console.log(ans);
