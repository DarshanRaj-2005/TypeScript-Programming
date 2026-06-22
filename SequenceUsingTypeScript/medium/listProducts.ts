import readlineSync from "readline-sync";

const input: string = readlineSync.question("Enter a list of product names separated by commas: ");
const products: string[] = input.split(",");

console.log("List of Products:");
for (const product of products) {
  console.log(product.trim());
}
