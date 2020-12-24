// 1. Use strict 
// added ECMAScript 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable rw(read/write)
// let (added in ES6)

let globalScope = 'global name';

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name);

// var (don't ever use it)
// var hoisting (move declaration from bottom to top)
// var has no block scope 

console.log(age);
age = 4;
var age;

// 3. Constatn, r(read only)
// use const whenever possible.
// only use let if variable needs to change

const dayInWeek = 7;
const maxNumber = 5; 

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes 

// 4. Variable Types
// primitive, single item: string, boolean, null, undefied, symbol 
// object, box container
// function, first-class function 

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinit, -infinity, NaN(Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; 
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value:' + helloBob + 'type:' + typeof helloBob); // no `` = write more 

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value 
const canRead = true;
const test = 3 < 1; // false 
console.log(`value: ${canRead}`, `type: ${typeof canRead}`); 
console.log(`value: ${test}, type: ${typeof test}`);


// null
let nothing = null;
console.log(`value: ${null}, type: ${typeof null}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique indentifers for objects 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2) // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; 
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));


// object, real-life object, data structure 
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;
console.log(ellie);

