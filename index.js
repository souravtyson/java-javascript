// run `node index.js` in the terminal
import fetch from 'node-fetch';

console.log(`Hello Node.js v${process.versions.node}!`);

const key = 'msg';
const testCase = {
  msg: 'Test case',
  [key]: 'Hello',
};

console.log(key);
console.log(testCase);

console.log('script start');

let myPromise = new Promise((resolve) => {
  resolve(123);
});

setTimeout(() => {
  console.log('timeout');
});

fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  .then((response) => response.json())
  .then((data) => console.log(data));

myPromise.then((res) => console.log(res));

console.log('script end');
