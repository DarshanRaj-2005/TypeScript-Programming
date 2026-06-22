import readlineSync from "readline-sync";

const a: number = parseFloat(readlineSync.question("Enter side a: "));
const b: number = parseFloat(readlineSync.question("Enter side b: "));
const c: number = parseFloat(readlineSync.question("Enter side c: "));

if (a + b > c && a + c > b && b + c > a) {
  const s: number = (a + b + c) / 2;
  const area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(`The area of the triangle is: ${area}`);
} else {
  console.log("Error: The given sides do not form a valid triangle.");
}
