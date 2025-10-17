// 1. for loop
for(let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while loop
let j = 0;
while(j < 5) {
  console.log(j);
  j++;
}

// 3. do-while loop
let k = 0;
do {
  console.log(k);
  k++;
} while(k < 5);

// 4. for...in loop (for enumerating properties of an object)
const obj = {a: 1, b: 2, c: 3};
for(let key in obj) {
  console.log(key + ': ' + obj[key]);
}

// 5. for...of loop (for iterating over iterable objects)
const arr = [10, 20, 30];
for(let val of arr) {
  console.log(val);
}

// 6. Array.prototype.forEach()
arr.forEach(function(item) {
  console.log(item);
});

// 7. Array.prototype.map()
const mappedArr = arr.map(item => item * 2);
console.log(mappedArr);

// 8. Array.prototype.filter()
const filteredArr = arr.filter(item => item > 15);
console.log(filteredArr);

// 9. Array.prototype.reduce()
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// 10. for-await-of loop (for async iterables, e.g. async generators)
async function printAsync() {
  const asyncIterable = {
    async *[Symbol.asyncIterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  for await (let val of asyncIterable) {
    console.log(val);
  }
}
printAsync();
