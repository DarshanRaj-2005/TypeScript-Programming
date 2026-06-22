import readlineSync from "readline-sync";

const input: string = readlineSync.question("Enter a string: ");
const totalChars: number = input.length;
const repeated: string = input + input;
const firstChar: string = input[0];
const firstThree: string = input.substring(0, 3);

console.log(totalChars);
console.log(repeated);
console.log(firstChar);
console.log(firstThree);
