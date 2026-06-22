import readlineSync from "readline-sync";

const price: number = parseFloat(readlineSync.question("Enter the price of the item: "));
const quantity: number = parseInt(readlineSync.question("Enter the quantity: "));
const totalCost: number = price * quantity;

console.log(`Total cost: $${totalCost.toFixed(2)}`);
