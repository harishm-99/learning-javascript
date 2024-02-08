let total = 0;
let first = 0;
let last = 10;

for(first=0;first<=last;first++){
    total = total + first;
}

console.log(total);

//break 

for(let i=1;i<=10;i++){
    if(i==4){
        break;
    }
    console.log(i);
}
console.log("Hello There! This is a break !")

// continue

for(i=0;i<=10;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}
console.log("Hello There! This is to be continued")