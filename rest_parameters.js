// function func(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// func(1,2,3,6,7,89,8);

function addAll(...cs){
    let total = 0;
    for(let c of cs){
        total=total+c;
    }
    return total;
}

const ans = addAll(1,1,1,1,1,1,1,1);
console.log(ans);

