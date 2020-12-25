// JSON
// Javascript Object Notation 

// 1. Object to JSON 
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);


json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null, 
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit, ['name','color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(JSON)

console.clear();
json = JSON.stringify(rabbit);
//reviver 
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return 값을 상세히 설정
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

rabbit.jump();
// obj.jumb();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate())