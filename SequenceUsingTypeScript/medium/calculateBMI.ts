import readlineSync from "readline-sync";

const weight: number = parseFloat(readlineSync.question("Enter your weight in kilograms: "));
const height: number = parseFloat(readlineSync.question("Enter your height in meters: "));
const bmi: number = weight / (height * height);

console.log(`BMI: ${bmi.toFixed(2)}`);
