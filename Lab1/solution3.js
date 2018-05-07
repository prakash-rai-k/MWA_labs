const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const numbersGT70 = numbers.filter(num => num > 70);

numbersGT70.forEach(num => console.log(num));