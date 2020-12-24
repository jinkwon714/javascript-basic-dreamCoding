// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - perform a task or calculate a value 

// 1. Function declaration
// function name(param1, param2) {body---, return}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS 

function printHello(){
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hello')

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference 
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('hi!')


// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    
    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');


// 5. Local scope 
let globalMessage = 'global'  // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);  // local variable 
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let chileMessage = 'hello';
    }
   // console.log(childMessage);
}
printMessage(); 


// 6. Return a value 
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit
// bad 
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good => early return if the condition doesn't meet
/*funtion upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic
}*/


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function 

// 1. Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {  // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('Yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No!');
};
randomQuiz('Wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
//const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// (function hello() {
//     console.log('hello');
// })();

// fun quiz time 
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder


// function add (a, b){
//     console.log(a + b);
// }

add = (a,b) => console.log(a + b);
add(1,2);

// function subtract(a, b) {
//     console.log(a - b);
// }

subtract = (a, b) => console.log(a - b);
subtract(3, 2);

// function divide (a, b) {
//     console.log (a / b);
// }

divide = (a, b) => console.log(a / b);
divide(12, 2);

// function multiply (a, b) {
//     console.log(a*b);
// }
multiply = (a, b) => console.log(a * b);
multiply(2, 4)

// function remainder(a, b) {
//     console.log(a % b);
// }
remainder = (a, b) => console.log(a % b);
remainder(3, 2)


// Dreamcoding answer 

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case ' remainder':
            return a % b;
        default:
            throw Error('Unknown Command');
    }
}

console.log(calculate('add', 12, 3))