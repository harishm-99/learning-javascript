// function print(){
//     console.log("Hey there Everyone ! Whasaappppp");
// }

// print();
// print();

// function addNumbers(){
//     // console.log(3+4);
//     return 3+4;//We use return in order to genrate the value and not print it
// }

// console.log(addNumbers());
// //Using Variables as arguments in order to reuse the code of the function 
// function sum(num1,num2){
//     return num1+num2;
// }

// const total = sum(27,23);
// console.log(total);
// const total2 = sum(34,92);// Reusing the Code
// console.log(total2);

// function even(number){
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

//function
//Input : string
//Output : first character

// function Firstchar(InputString){
//     return InputString[0];
// }

// console.log(Firstchar("Hello World"))

//function - Input : array, target (number)
//Output : index of target present in array

// function targetArrayIndex(array,target){
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

//Logic Tasks

// Write a function called calculateAverage that takes an array of numbers as an argument and returns the average of all the numbers in the array. The function should:

// Calculate the sum of all the numbers in the array.
// Divide the sum by the number of elements in the array.
// Return the result.

function calculateAverage(number){
    let sum = 0;
    for(let i=0;i<=number.length-1;i++){
        sum = sum + number[i];
    }
    const average = sum/number.length;
    return average;
}
console.log(calculateAverage([5,5,2]));