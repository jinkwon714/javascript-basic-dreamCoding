// async & await 
// clear style of using promise 

// 1. async 
async function fetchUser(){
  // do network requiest in 10secs... (가정)
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}


async function pickFruits(){
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log)

// 3. Useful Promise APIs 

// all이라는 promise 기본 제공 api를 활용해서 병렬적으로 쉽게 받아올 수 있다. 
function pickAllFruits(){ 
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// 
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);

}

pickOnlyOne().then(console.log)