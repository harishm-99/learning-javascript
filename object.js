//Objects are refrence type
//arrays are good but not sufficient for real world data
//objects store key value pairs
// objects don`t have indexes.


// How to create Objects

const person = {Name:"Harish", Age:23};

// console.log(person);
// console.log(typeof person);


// //how to access data from Objects

// console.log(person.Name);
// console.log(person.Age);

const person2 = {
    Name:"Rahul",
    Age:22,
    Hobbies:["Listening music", "Sleeping","Watching Videos/Movies"]
}

console.log(person2);
console.log(person2.Hobbies);
console.log(person2.Hobbies[2]);


// How to add key value pairs to Objects

person2.email = "abc@gmail.com";
person2.Skills = ["Programming","Communication","English Speaking","Creativity"];

console.log(person2);