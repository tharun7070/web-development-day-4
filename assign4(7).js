const inputArray = ["apple", "banana", "apple", "orange", "banana"];

const uniqueSet = new Set(inputArray);
const uniqueArray = [...uniqueSet];

console.log(uniqueArray); // ["apple", "banana", "orange"]