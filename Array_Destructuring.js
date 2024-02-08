// const myArray = ["value1","value2","value3"];
// const myArray2 = ["value1"];

// // let array1 = myArray[0];
// // let array2 = myArray[1];

// // console.log("The Value of Array1 is : "+array1);
// // console.log("The Value of Array2 is : "+array2);

// //Array Destructuring is Used for the Same above Process

// //if more array value but less in destructuring first two array elements will be filled the third element will be left out.
// let [var1,var2] = myArray;

// console.log("The Value of Array1 is : "+var1);
// console.log("The Value of Array2 is : "+var2);

// //if one array value but more in destructuring first variable will be filled the rest two variables will be filled as 'undefined'.
// let[var3,var4,var5] = myArray2;

// console.log("The Value of Array3 is : "+var3);
// console.log("The Value of Array4 is : "+var4);
// console.log("The Value of Array5 is : "+var5);

// //if we want the selected variable to be filled with the selected array element. eg. array1 in var6 and array2 in var8 and vacant 
// // the middle element, var7 is not there

// let[var6,,var8] = myArray;

// console.log("The Value of Array6 is : "+var6);
// console.log("The Value of Array8 is : "+var8);


//want array from a selected element
const arrayOld = ["valueA","valueB","valueC","valueD"];

let myNewArray = arrayOld.slice(3);
console.log("The Value of My New Array is : "+myNewArray);

// //Want the rest of the values after the first two array elemnts are used
let [var1,var2,,...ArrayNew] = arrayOld;


console.log("The Value of var1 is : "+var1);
console.log("The Value of var2 is : "+var2);
console.log("The Value of New Array is : "+ArrayNew);
