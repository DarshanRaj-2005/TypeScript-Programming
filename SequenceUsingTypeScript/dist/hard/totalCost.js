"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const price = parseFloat(readline_sync_1.default.question("Enter the price of the item: "));
const quantity = parseInt(readline_sync_1.default.question("Enter the quantity: "));
const totalCost = price * quantity;
console.log(`Total cost: $${totalCost.toFixed(2)}`);
