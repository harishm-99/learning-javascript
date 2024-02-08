
//Arrow Function - Conciseness - Used Only for one parameter so to remove the curly braces

//This Function 

// function print(){
//     console.log("Hey there Everyone ! Whasaappppp");
// }

// print();
// print();

// //can also be written like this

// const greet = () => {
//     console.log("Good Morning Everyone !");
// }

// greet();


// Function to Add Two Numbers

// const addNumbers = () => {
//     // console.log(3+4);
//     return 3+4;//We use return in order to genrate the value and not print it
// }

// console.log(addNumbers());

// //Using Variables as arguments in order to reuse the code of the function 
// const sum = (num1,num2) => {
//     return num1+num2;
// }

// const total = sum(27,23);
// console.log(total);
// const total2 = sum(34,92);// Reusing the Code
// console.log(total2);

//Program for Even Number Input

// const even = (number) => {
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

// Function Expression 
// const Firstchar = function(InputString){
//     return InputString[0];
// }

// console.log(Firstchar("Hello World"))

// ArrowFunction
// const firstChar = (InputString) => {
//     return InputString[0];
// }

// console.log(firstChar("ey Yaa !"));

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


// More Simpler Technique to use Arrow Function

// Function to Add Two Numbers

// const addNumbers = () => 3+4;//We use return in order to genrate the value and not print it

// console.log(addNumbers());

// //Using Variables as arguments in order to reuse the code of the function 
// const sum = (num1,num2) => num1+num2;

// const total = sum(27,23);
// console.log(total);
// const total2 = sum(34,92);// Reusing the Code
// console.log(total2);

//Program for Even Number Input

// const even = (number) => number%2===0;

// const check = even(20);
// console.log(check);

// function
// Input : string
// Output : first character

// Function Expression 
// const Firstchar = function(InputString){
//     return InputString[0];
// }

// console.log(Firstchar("Hello World"))

// ArrowFunction
// const firstChar = (InputString) => {
//     return InputString[0];
// }

//Arrow Function Another way

// const firstChar = (InputString) => InputString[0];
// console.log(firstChar("Hii"));

// console.log(firstChar("ey Yaa !"));

// function - Input : array, target (number)
// Output : index of target present in array

// Arrow Function with multiline Code

const targetArrayIndex = (array,target) =>{
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const MeraArray = [1,2,3,4,5,6,7];
const ans = targetArrayIndex(MeraArray,5);

console.log(ans);
