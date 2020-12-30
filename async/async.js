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