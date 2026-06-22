import readlineSync from "readline-sync";

const radius: number = parseFloat(readlineSync.question("Enter the radius: "));
const pi: number = 3.14159;
const area: number = pi * radius * radius;

console.log(`The area of the circle with radius ${radius} is: ${area}`);
