// Don't give up
// 포기하지 마세요

// 함수는 크게 2가지로 나뉜다. 

// 1. 함수 선언
// 함수선언은 크게 2가지 

// 1) 기능을 전달하는 경우 (아래는 console.log()기능을 전달)
/*
function doSomething() {
  console.log('hello');
}

// 2) 계산 등과 같은 값을 처리 
function add(a, b) {
  const sum = a + b;
  return a +b;
}

// 2. 함수 호출 
doSomething();

// 위의 add function은 계산을 처리해주는 기능만 있으므로, 호출시 인자를 받을 수 있는 변수 및 console.log (출력)필요
const result = add(1, 2);
console.log(result);

*/


// 3. 함수를 인자로 전달 

function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);

}

function add(a, b) {
  const sum = a + b;
  return a +b;
}

doSomething(add);

const addFun = add;
const result2 = addFun(1,2);
console.log(result2)