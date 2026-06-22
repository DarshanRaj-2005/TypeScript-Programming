import readlineSync from "readline-sync";

const name: string = readlineSync.question("Enter your name: ");

console.log(`Hello, ${name}!`);
