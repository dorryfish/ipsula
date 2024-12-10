const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected');
  }, 500);
});

Promise.any([promise1, promise2])
  .then((value) => {
    console.log(value); // Output: Promise 1 resolved
  })
  .catch((error) => {
    console.error(error); // This line will not be executed
  });
