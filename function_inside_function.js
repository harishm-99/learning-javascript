function app(){
    const sayHello = function(){
        console.log("Hello World !");
    }

    const addNum = () => {
        console.log(3+4);
    }

    const addNums = (num1,num2) => {
        return num1+num2;
    }

    const mulNums = (num1,num2) => num1*num2;

    console.log("This is the App !");
    sayHello();
    addNum();
    console.log(addNums(3,5));
    console.log(mulNums(2,0));
}

// app();