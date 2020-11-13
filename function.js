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

//2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference 
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);