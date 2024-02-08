const bands = [
    { bandName : "Highway 95", Song : "Highway to Hell" },
    { bandName : "One Direction", Song : "What Makes You Beautiful" },
    { bandName : "Michael Jackson", Song : "Dangerous"}
]
const[ {Song : SongName}, , {bandName}] = bands;

console.log(SongName);
console.log(bandName);
// const emp = {
//     empName : "Harish",
//     empAge : 24,
//     Job : {
//         Designation : "Senior Frontend Engineer",
//         Location : "Ahmedabad"
//     },
//     Salary : "1,00,000"
// }

// const {empName:Rahul,empAge,Job : {Designation, Location},Salary}  = emp;

// console.log(Rahul);
// console.log(Designation);
// console.log(Location);
// console.log(Salary);