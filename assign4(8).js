const numbers = [1, 5, 2, 8, 5, 1, 9, 2, 10];

const uniqueNumbersSet = new Set(numbers);
const setSize = uniqueNumbersSet.size;

console.log(uniqueNumbersSet); // Set {1, 5, 2, 8, 9, 10}
console.log(`The size of the Set is: ${setSize}`); // "The size of the Set is: 6"