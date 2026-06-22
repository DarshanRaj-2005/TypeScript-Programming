import readlineSync from "readline-sync";

const income: number = parseFloat(readlineSync.question("Enter your monthly income: "));
const expensesInput: string = readlineSync.question("Enter your expenses (space-separated): ");
const expenseStrings: string[] = expensesInput.split(" ");
let totalExpenses: number = 0;

for (const expenseStr of expenseStrings) {
  const expense: number = parseFloat(expenseStr);
  totalExpenses = totalExpenses + expense;
}

const remainingBudget: number = income - totalExpenses;
console.log(`Remaining budget: $${remainingBudget.toFixed(2)}`);
