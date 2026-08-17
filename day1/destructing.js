const numbers = [10, 20, 30, 40];

const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

const newNumbers = [...numbers, 50, 60];
console.log(newNumbers);


