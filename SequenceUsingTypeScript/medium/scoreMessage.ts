import readlineSync from "readline-sync";

const score: number = parseInt(readlineSync.question("Enter your game score: "));
const scoreString: string = score.toString();

console.log(`Your score is ${scoreString}.`);
