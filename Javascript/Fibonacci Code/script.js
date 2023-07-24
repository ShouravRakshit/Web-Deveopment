// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
var firstNumber = 0;
var previousNumber = 1;
var nextTerm = firstNumber + previousNumber;
console.log(firstNumber);
console.log(previousNumber);

for (let index = 0; index < 10; index++) {
    console.log(nextTerm);
    firstNumber = previousNumber;
    previousNumber = nextTerm;
    nextTerm = firstNumber + previousNumber;
}