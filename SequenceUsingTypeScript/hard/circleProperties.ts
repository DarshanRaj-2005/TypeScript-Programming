import readlineSync from "readline-sync";

const radius: number = parseFloat(readlineSync.question("Enter the radius of the circle: "));
const angle: number = parseFloat(readlineSync.question("Enter the angle in degrees (for sector area): "));
const pi: number = Math.PI;

const diameter: number = 2 * radius;
const circumference: number = 2 * pi * radius;
const sectorArea: number = (angle / 360) * pi * radius * radius;
const arcLength: number = (angle / 360) * 2 * pi * radius;

console.log(`Radius: ${radius}`);
console.log(`Diameter: ${diameter}`);
console.log(`Circumference: ${circumference}`);
console.log(`Sector Area for ${angle} degrees: ${sectorArea}`);
console.log(`Arc Length for ${angle} degrees: ${arcLength}`);
