// const fruits = ["Apple","Mango","Banana"];
// const fruits2 = [];
// for(let fruit of fruits){
//     // console.log(fruit);
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);


//Mostly Used By Devs.

const fruits = ["Apple","Mango","Banana"];
const fruits2 = [];
for(let index in fruits){
    // console.log(index);
    // console.log(fruits[index]);
    // fruits2.push(index);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);


for(let i=0;i<fruits;i++){
    console.log(fruits[i]);
}