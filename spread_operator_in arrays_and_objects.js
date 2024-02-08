//Using ChatGPT

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const combinedArr = [...arr1, ...arr2];

// console.log(combinedArr);


// const originalArr = [1,2,3,4];
// const copiedArr = [...originalArr];

// console.log(copiedArr);

//Harshit Vashisht

const arr1 = [1,2,3];
const arr2 = [4,5,6];

newArray = [...arr1,...arr2,76,89,45];
newArray2 = [..."1234567879"]
// arr3 = [...123456789];//Integers not iterable

console.log(newArray);
console.log(newArray2);
// console.log(...arr3);//non output


const obj1 = {a:5, b:8};
const obj2 = {c:7, d:9};

const combined = {...obj1,...obj2};

console.log(combined);

const copiedObj = {...combined};

console.log(copiedObj);

//harshit

const obj3 = {a:"unique",e:78};
const newObject = { ...obj3, ...obj1};//The Object which is initiated later will overwrite the other

console.log("The New Object is :");
console.log(newObject);

const newObject2 = {...obj1, ...obj2, z:34};

console.log(newObject2);