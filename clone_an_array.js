//how to clone an array

//how to concate an array

let array1 = ["item1","item2"];
// let array2 = ["item1","item2"];
// let array2 = array1.slice(0);//fastest way
// let array2 = [].concat(array1);

//new way - spread operator
// let array2 = [...array1];//mostly used by devs

// let array2 = [...array1].concat(["item3","item4"]);
// let array2 = [...array1,"item3","item4"];
// let array2 = [].concat(array1,["item3","item4"]);


//Spread Operator

let oneMoreArray = ["item3","item4","item5"];
let array2 = [...array1,...oneMoreArray];

array1.push("item3");

console.log(array1===array2);

console.log(array1);
console.log(array2);