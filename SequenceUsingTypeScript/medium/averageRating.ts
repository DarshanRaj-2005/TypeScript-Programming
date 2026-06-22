import readlineSync from "readline-sync";

const rating: number = parseFloat(readlineSync.question("Enter the average movie rating: "));
const roundedRating: number = Math.round(rating);

console.log(`Rounded Rating: ${roundedRating}`);
