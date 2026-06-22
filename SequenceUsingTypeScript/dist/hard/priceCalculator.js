"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
let totalPrice = 0;
function addItem() {
    const price = parseInt(readline_sync_1.default.question("Enter the price of the item: "));
    const quantity = parseInt(readline_sync_1.default.question("Enter the quantity: "));
    totalPrice = totalPrice + (price * quantity);
    const answer = readline_sync_1.default.question("Do you want to enter another item? (yes/no): ");
    if (answer.toLowerCase() === "yes") {
        addItem();
    }
    else {
        console.log(`Total Price: ${totalPrice}`);
    }
}
addItem();
