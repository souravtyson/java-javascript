// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('My promise resolved');
//   }, 10000);
// });

// p.then((res) => console.log(res));
// console.log('non async');

// ***********************************************************

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('My promise resolved');
//   }, 10000);
// });

// async function handlePomise() {
//   let val = await p;
//   console.log('non async check');
//   console.log(val);
// }

// handlePomise();
// console.log('hello');

// ***********************************************************

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('My promise resolved');
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('My promise resolved2');
//   }, 10000);
// });

// async function handlePomise() {
//   let val = await p1;
//   console.log('non async check');
//   console.log(val);

//   let val2 = await p2;
//   console.log('non async check2');
//   console.log(val2);
// }

// handlePomise();
// console.log('hello');

// ********************************************

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('My promise resolved');
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('My promise resolved2');
  }, 5000);
});

async function handlePomise() {
  let val = await p1;
  console.log('non async check');
  console.log(val);

  let val2 = await p2;
  console.log('non async check2');
  console.log(val2);
}

handlePomise();
console.log('hello');
