"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const income = parseFloat(readline_sync_1.default.question("Enter your monthly income: "));
const expensesInput = readline_sync_1.default.question("Enter your expenses (space-separated): ");
const expenseStrings = expensesInput.split(" ");
let totalExpenses = 0;
for (const expenseStr of expenseStrings) {
    const expense = parseFloat(expenseStr);
    totalExpenses = totalExpenses + expense;
}
const remainingBudget = income - totalExpenses;
console.log(`Remaining budget: $${remainingBudget.toFixed(2)}`);
