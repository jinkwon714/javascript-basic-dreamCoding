// Objects
// one of the JS's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object
// object = {key : value};

const obj1 = {};  // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax


function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

// with Javascript magic (dynamically typed language)
// can add properties later

ellie.hasJob = true; 
console.log(ellie.hasJob);

// can delete properties later

delete ellie.hasJob;
console.log(ellie.hasJob);