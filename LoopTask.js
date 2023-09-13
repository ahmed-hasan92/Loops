for (let index = 1; index <= 10; index++) {
  console.log(index);
}

for (let index = 2; index <= 20; index++) {
  console.log(index++);
}
let sum = 0;
let number = 1;

while (number <= 100) {
  sum += number;
  number++;
}
console.log(sum);

let numbers = [2, 4, 6, 8, 10];
let sumArray = 0;

for (let counter = 0; counter < numbers.length; counter++) {
  sumArray += numbers[counter];
}

console.log(sumArray);
