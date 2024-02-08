const person = {
    name : "Harish",
    age : '24',
    // gender : 'Male',
}

// function func(obj){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gender);//Undefined because it is not defined
// }

function func({name, age, gender }){
    console.log(name);
    console.log(age);
    console.log(gender);
}

func(person);
