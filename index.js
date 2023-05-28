// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const key = 'msg';
const testCase = {
  msg: 'Test case',
  [key]: 'Hello',
};

console.log(key);
console.log(testCase);
