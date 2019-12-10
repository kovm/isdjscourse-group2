const promises = [
  Promise.resolve(1),
  new Promise(resolve => {
    return setTimeout(() => {
      resolve(2);
    }, 2000);
  }),
  new Promise(resolve => {
    return setTimeout(() => {
      resolve(3);
    }, 1000);
  })
];

async function all(promises) {
  for await(let promise of promises) {
    console.log(promise);
  }
}

all(promises);


