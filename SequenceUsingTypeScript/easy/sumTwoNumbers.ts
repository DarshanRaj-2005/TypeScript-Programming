import readlineSync from "readline-sync";

const num1: number = parseInt(readlineSync.question("Enter the first integer: "));
const num2: number = parseInt(readlineSync.question("Enter the second integer: "));
const sum: number = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
