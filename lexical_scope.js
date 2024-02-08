// Lexical Scope - Ability to access outter variable from inside the function block but inner variable cannot be accessed from outside the block

const myVar = "globalvalue"; //Global Variable
function myApp(){
    const myVar = "value1";
    function myFunct(){
        // const myVar = "newvalue1";
        // console.log("Inside myFunct "+ myVar);
    }
    const myFunc2 = () => {
        console.log("inside myFunc2 ", myVar)
    }
    myFunc2();

    console.log(myVar);
    myFunct();
}
myApp();