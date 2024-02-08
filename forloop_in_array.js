let fruits = ["Apple", "Mango", "Grapes","Strawberry"];

// for(let i=0;i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-1]);

let fruits2 = [];

for(let i=0;i<fruits.length;i++){
    // console.log(fruits[i]);
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);