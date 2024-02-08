//Dot Notations

const person = {
    Name : "NAruto Uzumaki",
    Age : 19,
    Gender : "Male", 
}

console.log(person);
console.log(person.Name);


//Bracket Notations

const person2 = {
    "Name" : "Sasuke Uchiha",//Variables are String by Default
    "Age" : 19,
    "Gender" : "Male" 
}

console.log(person2);
console.log(person2["Name"])

//Adding Using Bracket Notation

person2["Power"] = "Saringan";

console.log(person2["Power"]);


//Difference

// Cannot Access Attributes with Spaces with dot notations

// person2.person Nationality = "Japanese";//Cannot Use object attributes with spaces in dot

person2["Person Nationality"] = "Japanese";

console.log("The Nationality of Sasuke Uchiha is : "+person2["Person Nationality"]);

const NameKey = "email";

// person2["NameKey"]  = "abc@gmail.com";//Bracket Notation Key Accessing
person2[NameKey]  = "abc@gmail.com";
console.log(person2)