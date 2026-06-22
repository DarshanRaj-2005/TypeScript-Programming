import readlineSync from "readline-sync";

let totalPrice: number = 0;

function addItem(): void {
  const price: number = parseInt(readlineSync.question("Enter the price of the item: "));
  const quantity: number = parseInt(readlineSync.question("Enter the quantity: "));
  totalPrice = totalPrice + (price * quantity);

  const answer: string = readlineSync.question("Do you want to enter another item? (yes/no): ");
  if (answer.toLowerCase() === "yes") {
    addItem();
  } else {
    console.log(`Total Price: ${totalPrice}`);
  }
}

addItem();
